import json
from ai_server.upload_data.step_5_upload_data2db import upload_data2db
import os
# Mở và đọc file JSON
# with open('D:\\study\\LammaIndex\\downloads1\\dc-power-systems.json', 'r', encoding='utf-8') as f:
#     data = json.load(f)

import uuid
def upload_data2db_from_folder(folder_path, collection_name=None):
    """
    Duyệt folder_path, tìm các file .pdf và gọi upload_data2db cho từng file.
    Nếu collection_name không truyền thì dùng tên thư mục làm collection_name (spaces -> _).
    product_id và filename_id tự tạo bằng uuid4.
    """
    collection_name = "HuyenThyNguyen"

    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.lower().endswith(".pdf"):
                full_path = os.path.join(root, file)
                product_id = uuid.uuid4().hex
                filename_id = uuid.uuid4().hex
                print(f"Uploading: {full_path} -> collection: {collection_name}, product_id: {product_id}, filename_id: {filename_id}")
                try:
                    upload_data2db(pdf_path=full_path, collection_name=collection_name, product_id=product_id, filename_id=filename_id)
                except Exception as e:
                    print(f"Failed to upload {full_path}: {e}")

# ...existing code...
if __name__ == "__main__":
    # Thư mục PDF bạn cung cấp
    folder = r"D:\\project\\technical_requirements\\downloads\\DC Power Systems\\Netsure 731 A41"
    upload_data2db_from_folder(folder)
