from llama_parse import LlamaParse
import os
from ai_server.config_minio import client
import tempfile, os

def config_parser(pdf_path: str):
    bucket_name = "documents"

    # Tạo file tạm an toàn cho Windows
    fd, local_path = tempfile.mkstemp(suffix=".pdf")
    os.close(fd)  # Đóng file descriptor ngay lập tức

    # Tải file từ MinIO về file tạm
    client.fget_object(bucket_name, pdf_path, local_path)

    parser = LlamaParse(
        result_type="markdown",
        auto_mode=True,
        auto_mode_trigger_on_image_in_page=True,
        auto_mode_trigger_on_table_in_page=True,
        skip_diagonal_text=True,
        preserve_layout_alignment_across_pages=True,
        num_workers=4,
        max_timeout=1000,
    )

    file_name = os.path.splitext(os.path.basename(pdf_path))[0]
    print("Đang parse PDF sang Markdown...")
    parsed_docs = parser.load_data(local_path)

    # Xóa file tạm sau khi dùng
    os.remove(local_path)

    return parsed_docs, file_name
