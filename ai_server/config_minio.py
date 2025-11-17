from minio import Minio
from minio.error import S3Error
import os
from dotenv import load_dotenv

load_dotenv()

# Kết nối tới MinIO
client = Minio(
    os.getenv("MINIO_URL"),  # endpoint
    access_key=os.getenv("MINIO_ACCESS_KEY"),
    secret_key=os.getenv("MINIO_SECRET_KEY"),
    secure=False  # vì chạy local, không dùng https
)
