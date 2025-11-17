import os
from sqlalchemy.orm import Session
from backend.models.models import Category, ProductLine, Product, FileVectorStore
from werkzeug.utils import secure_filename
from ai_server.upload_data.step_5_upload_data2db import upload_data2db 
from ai_server.config_minio import client

# Folder mặc định trên server để lưu file
PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
DEFAULT_FOLDER = os.path.join(PROJECT_ROOT, "output10")  # output ở root project
import uuid
class ProductService:
    def __init__(self, db: Session):
        self.db = db

    def create_or_get_category(self, name: str):
        cat = self.db.query(Category).filter_by(name=name).first()
        id = uuid.uuid1()
        if not cat:
            cat = Category(id=f"cat_{id}", name=name)
            self.db.add(cat)
            self.db.commit()
        return cat

    def create_or_get_product_line(self, name: str, category_id: str):
        pl = self.db.query(ProductLine).filter_by(name=name, category_id=category_id).first()
        id = uuid.uuid1()
        if not pl:
            pl = ProductLine(id=f"pl_{id}", name=name, category_id=category_id)
            self.db.add(pl)
            self.db.commit()
        return pl

    def create_or_get_product(self, name: str, product_line_id: str):
        prod = self.db.query(Product).filter_by(name=name, product_line_id=product_line_id).first()
        is_new_product = False
        id = uuid.uuid1()
        if not prod:
            prod = Product(id=f"p_{id}", name=name, product_line_id=product_line_id)
            self.db.add(prod)
            self.db.commit()
            is_new_product = True
        return prod, is_new_product

    def save_files(self, product, files):
        saved_files = []
        file_db_records = []  # Lưu thông tin file và ID
        bucket_name = "documents"

        # Tạo bucket nếu chưa có
        if not client.bucket_exists(bucket_name):
            client.make_bucket(bucket_name)

        for file in files:
            id = uuid.uuid1()
            filename = secure_filename(file.filename)
            if not filename.lower().endswith(".pdf"):  # bỏ các file không phải PDF
                continue

            # Tạo record trong DB với ID cụ thể
            file_id = f"f_{id}"
            f_db = FileVectorStore(
                id=file_id, name=filename, product_id=product.id
            )
            self.db.add(f_db)

            # object_name trong MinIO = product.name/filename
            object_name = f"{product.name}/pdf/{filename}"

            # ĐỌC TOÀN BỘ CONTENT TRƯỚC KHI UPLOAD
            file.stream.seek(0)  # Reset về đầu stream
            file_content = file.stream.read()
            file_size = len(file_content)
            
            # Tạo BytesIO object từ content
            from io import BytesIO
            file_stream = BytesIO(file_content)

            # Upload trực tiếp vào MinIO
            client.put_object(
                bucket_name=bucket_name,
                object_name=object_name,
                data=file_stream,
                length=file_size,
                content_type="application/pdf"
            )

            # Trả về URL theo chuẩn minio://
            minio_url = object_name
            saved_files.append(minio_url)

            # Lưu thông tin để upload vector store
            file_db_records.append({
                'filename': filename,
                'filepath': minio_url,  # link trong MinIO
                'file_id': file_id
            })

        self.db.commit()
        return saved_files, file_db_records

    def upload_product_with_files(self, category_name, product_line_name, product_name, files, description, features_benefits, collection_name):
        cat = self.create_or_get_category(category_name)
        pl = self.create_or_get_product_line(product_line_name, cat.id)
        prod, is_new_product = self.create_or_get_product(product_name, pl.id)
        saved_files, file_db_records = self.save_files(prod, files)
                # Chỉ upload document store nếu product mới được tạo
        if is_new_product:
            from ai_server.upload_data.step_5_upload_data2db import create_docStore, upload_docStore2db
            documentStore, _ = create_docStore(cat.name, pl.name, prod.name, description, features_benefits, prod.id)
            upload_docStore2db(collection_name, documentStore)
            print(f"Uploaded docStore for new product: {prod.name}")
        else:
            print(f"Product {prod.name} already exists, skipping docStore upload")
        # Upload từng file với filename_id trùng với DB
        for file_record in file_db_records:
            # filepath = "minio://bucket/object_name"
            object_name = file_record['filepath']

            # Nếu upload_data2db hỗ trợ nhận stream hoặc bytes
            upload_data2db(
                pdf_path=object_name,   # thay vì pdf_path
                collection_name=collection_name,
                product_id=prod.id,
                filename_id=file_record['file_id']
            )
        return { 
            "category": cat.name, 
            "product_line": pl.name, 
            "product": prod.name, 
            "files": saved_files, 
            "is_new_product": is_new_product 
        }