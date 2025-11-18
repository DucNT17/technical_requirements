## Python sử dụng
```bash
python 3.12
```

## Chạy với Docker (Khuyến nghị) 🐳

### Lần đầu tiên - Khởi động Database
```bash
start-db.bat
```
Database sẽ chạy persistent, không cần khởi động lại.

### Khởi động Application
```bash
start-app.bat
```

### Khi thay đổi code - Rebuild App
```bash
docker-compose up --build -d
```
✅ Database vẫn chạy, dữ liệu không bị mất!

### Hệ thống bao gồm:
- **PostgreSQL** (port 5432) - Database
- **Qdrant** (port 6333) - Vector database  
- **Backend** (port 5000) - Flask API
- **Frontend** (port 8080) - React app

### Truy cập ứng dụng:
- Frontend: http://localhost:8080
- Backend API: http://localhost:5000
- API Docs: http://localhost:5000/docs
- Qdrant Dashboard: http://localhost:6333/dashboard

### Các file .bat hữu ích:
- `start-db.bat` - Khởi động database (chỉ cần 1 lần)
- `start-app.bat` - Khởi động/rebuild application
- `stop-app.bat` - Dừng application (giữ database)
- `stop-db.bat` - Dừng database
- `start-all.bat` - Khởi động tất cả
- `stop-all.bat` - Dừng tất cả

📖 **Xem hướng dẫn chi tiết**: [DOCKER_GUIDE.md](./DOCKER_GUIDE.md)

---

## Chạy Local (Development)

### Chạy Backend:
```bash
source activate
```
```bash 
python -m backend.app
```

**Doc api**: http://127.0.0.1:5000/docs  
**Api chính ở phần Main API**

### Chạy Frontend
```bash
cd frontend
```
```bash
npm run dev
```

**Note**: Khi chạy local, cần cấu hình kết nối đến external database trong file `.env`