# Hướng dẫn chạy Docker bằng lệnh

## 1. Khởi động Database (Lần đầu tiên)

```bash
# Khởi động PostgreSQL và Qdrant
docker-compose -f docker-compose.db.yml up -d

# Kiểm tra trạng thái
docker-compose -f docker-compose.db.yml ps

# Xem logs
docker-compose -f docker-compose.db.yml logs -f
```

## 2. Khởi động Application

```bash
# Khởi động Backend và Frontend
docker-compose up -d --build

# Kiểm tra trạng thái
docker-compose ps

# Xem logs
docker-compose logs -f
```

## 3. Quy trình Development hàng ngày

### Lần đầu tiên:
```bash
# Bước 1: Start database
docker-compose -f docker-compose.db.yml up -d

# Bước 2: Đợi 10 giây cho DB khởi động
# (hoặc kiểm tra: docker-compose -f docker-compose.db.yml ps)

# Bước 3: Start application
docker-compose up -d --build
```

### Khi sửa code (rebuild app):
```bash
# Rebuild và restart app (database vẫn chạy)
docker-compose up -d --build

# Hoặc rebuild chỉ backend
docker-compose up -d --build backend

# Hoặc rebuild chỉ frontend
docker-compose up -d --build frontend
```

## 4. Xem logs

```bash
# Logs tất cả app containers
docker-compose logs -f

# Logs chỉ backend
docker-compose logs -f backend

# Logs chỉ frontend
docker-compose logs -f frontend

# Logs database
docker-compose -f docker-compose.db.yml logs -f postgres
docker-compose -f docker-compose.db.yml logs -f qdrant
```

## 5. Kiểm tra trạng thái

```bash
# Kiểm tra app containers
docker-compose ps

# Kiểm tra database containers
docker-compose -f docker-compose.db.yml ps

# Kiểm tra tất cả containers
docker ps
```

## 6. Dừng services

```bash
# Dừng chỉ application (giữ database chạy)
docker-compose down

# Dừng database
docker-compose -f docker-compose.db.yml down

# Dừng tất cả
docker-compose down
docker-compose -f docker-compose.db.yml down
```

## 7. Restart services

```bash
# Restart backend
docker-compose restart backend

# Restart frontend
docker-compose restart frontend

# Restart database
docker-compose -f docker-compose.db.yml restart postgres
docker-compose -f docker-compose.db.yml restart qdrant
```

## 8. Vào shell của container

```bash
# Vào backend container
docker exec -it backend_api bash

# Vào postgres container
docker exec -it postgres_db psql -U postgres -d technical_requirements

# Vào frontend container
docker exec -it frontend_app sh
```

## 9. Xóa và reset (cẩn thận!)

```bash
# Xóa app containers (giữ images và volumes)
docker-compose down

# Xóa database containers và DATA
docker-compose -f docker-compose.db.yml down -v

# Xóa tất cả containers, networks, volumes
docker-compose down -v
docker-compose -f docker-compose.db.yml down -v
```

## 10. Troubleshooting

### Lỗi network không tồn tại:
```bash
# Tạo network thủ công
docker network create technical_requirements_app-network

# Sau đó start lại
docker-compose -f docker-compose.db.yml up -d
docker-compose up -d
```

### Reset hoàn toàn:
```bash
# Stop tất cả
docker-compose down
docker-compose -f docker-compose.db.yml down

# Xóa network
docker network rm technical_requirements_app-network

# Start lại từ đầu
docker-compose -f docker-compose.db.yml up -d
docker-compose up -d --build
```

### Kiểm tra network:
```bash
# List tất cả networks
docker network ls

# Inspect network
docker network inspect technical_requirements_app-network
```

## URLs để truy cập:

- Frontend: http://localhost:8080
- Backend API: http://localhost:5000
- API Docs: http://localhost:5000/docs
- PostgreSQL: localhost:5432 (user: postgres, pass: postgres123)
- Qdrant: http://localhost:6333/dashboard
