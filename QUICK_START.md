# Quick Reference - Docker Commands

## Quy trình Development hàng ngày

### Lần đầu tiên:
```bash
start-db.bat      # Khởi động database (CHỈ LẦN ĐẦU)
start-app.bat     # Khởi động app
```

### Khi sửa code Backend/Frontend:
```bash
docker-compose up --build -d
```
✅ Database vẫn chạy, data không mất!

### Kết thúc:
```bash
stop-app.bat      # Dừng app, giữ database
```

---

## Các file .bat

| File | Mục đích | Khi nào dùng |
|------|----------|--------------|
| `start-db.bat` | Khởi động PostgreSQL + Qdrant | Lần đầu hoặc sau khi stop database |
| `stop-db.bat` | Dừng database | Kết thúc hoàn toàn |
| `start-app.bat` | Khởi động Backend + Frontend | Mỗi ngày làm việc |
| `stop-app.bat` | Dừng app | Khi cần rebuild hoặc nghỉ |
| `start-all.bat` | Khởi động tất cả | Setup ban đầu |
| `stop-all.bat` | Dừng tất cả | Dọn dẹp hoàn toàn |

---

## Lệnh thường dùng

### Rebuild khi sửa code:
```bash
# Rebuild tất cả
docker-compose up --build -d

# Chỉ rebuild backend
docker-compose up --build -d backend

# Chỉ rebuild frontend  
docker-compose up --build -d frontend
```

### Xem logs:
```bash
# Logs app
docker-compose logs -f

# Logs backend
docker-compose logs -f backend

# Logs database
docker-compose -f docker-compose.db.yml logs -f
```

### Kiểm tra status:
```bash
docker ps
```

### Restart service:
```bash
docker-compose restart backend
```

---

## URLs

- Frontend: http://localhost:8080
- Backend API: http://localhost:5000/docs
- Qdrant: http://localhost:6333/dashboard
- PostgreSQL: localhost:5432

---

## Database Connection

```
Host: localhost
Port: 5432
User: postgres
Password: postgres123
Database: technical_requirements
```

Connection String:
```
postgresql://postgres:postgres123@localhost:5432/technical_requirements
```
