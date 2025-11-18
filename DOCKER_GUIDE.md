# Hướng dẫn chạy Docker với PostgreSQL và Qdrant

## Cấu trúc hệ thống

Hệ thống được tách thành 2 phần độc lập:

### 1. Database Layer (docker-compose.db.yml)
- **PostgreSQL** - Database server (port 5432)
- **Qdrant** - Vector database (port 6333, 6334)

### 2. Application Layer (docker-compose.yml)
- **Backend** - Flask API (port 5000)
- **Frontend** - React/Vite app (port 8080)

## Tại sao tách riêng?

✅ **Lợi ích:**
- Rebuild/restart app mà không ảnh hưởng database
- Dữ liệu luôn được bảo toàn
- Tiết kiệm thời gian development
- Dễ dàng quản lý từng layer riêng biệt

## Yêu cầu

- Docker Desktop đã cài đặt
- Docker Compose
- File `.env` đã được cấu hình

## Cách chạy

### Phương án 1: Chạy toàn bộ (Lần đầu tiên)

**Sử dụng file .bat:**
```bash
start-all.bat
```

**Hoặc chạy thủ công:**
```bash
# Tạo network
docker network create app-network

# Khởi động databases
docker-compose -f docker-compose.db.yml up -d

# Đợi 10 giây cho DB khởi động

# Khởi động applications
docker-compose up --build -d
```

### Phương án 2: Chỉ chạy Database (Khuyến nghị)

**Lần đầu tiên hoặc khi cần database:**
```bash
start-db.bat
```

Hoặc:
```bash
docker network create app-network
docker-compose -f docker-compose.db.yml up -d
```

Database sẽ chạy persistent, không cần stop/start lại.

### Phương án 3: Chỉ chạy Application

**Khi đã có database chạy sẵn và muốn rebuild app:**
```bash
start-app.bat
```

Hoặc:
```bash
docker-compose up --build -d
```

✅ **Đây là cách bạn sẽ dùng thường xuyên khi develop!**

## Quy trình Development thông thường

1. **Lần đầu tiên:**
   ```bash
   start-db.bat      # Khởi động database (chỉ 1 lần)
   start-app.bat     # Khởi động app
   ```

2. **Mỗi khi thay đổi code:**
   ```bash
   stop-app.bat      # Dừng app
   start-app.bat     # Rebuild và start lại app
   ```
   
   Database vẫn chạy, dữ liệu không mất!

3. **Kết thúc ngày làm việc:**
   ```bash
   stop-app.bat      # Dừng app
   # Có thể giữ database chạy hoặc:
   stop-db.bat       # Dừng database (data vẫn được lưu)
   ```

## Các lệnh thường dùng

### Kiểm tra trạng thái

**Kiểm tra database containers:**
```bash
docker-compose -f docker-compose.db.yml ps
```

**Kiểm tra app containers:**
```bash
docker-compose ps
```

**Kiểm tra tất cả:**
```bash
docker ps
```

### Xem logs

**Database logs:**
```bash
docker-compose -f docker-compose.db.yml logs -f
docker-compose -f docker-compose.db.yml logs -f postgres
docker-compose -f docker-compose.db.yml logs -f qdrant
```

**Application logs:**
```bash
docker-compose logs -f
docker-compose logs -f backend
docker-compose logs -f frontend
```

### Truy cập ứng dụng

- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:5000
- **API Documentation**: http://localhost:5000/docs
- **PostgreSQL**: localhost:5432
  - User: `postgres`
  - Password: `postgres123`
  - Database: `technical_requirements`
- **Qdrant Dashboard**: http://localhost:6333/dashboard
- **Qdrant API**: http://localhost:6333

### Dừng services

**Dừng chỉ application (giữ database chạy):**
```bash
stop-app.bat
# hoặc
docker-compose down
```

**Dừng chỉ database:**
```bash
stop-db.bat
# hoặc
docker-compose -f docker-compose.db.yml down
```

**Dừng tất cả:**
```bash
stop-all.bat
# hoặc
docker-compose down
docker-compose -f docker-compose.db.yml down
```

### Rebuild application (khi thay đổi code)

**Cách nhanh nhất:**
```bash
docker-compose up --build -d
```

Hoặc rebuild từng service:
```bash
# Chỉ rebuild backend
docker-compose up --build -d backend

# Chỉ rebuild frontend
docker-compose up --build -d frontend
```

### Xóa dữ liệu (cẩn thận!)

```bash
# Xóa database và tất cả dữ liệu
docker-compose -f docker-compose.db.yml down -v
```

⚠️ **Cảnh báo**: Lệnh này sẽ xóa tất cả dữ liệu trong PostgreSQL và Qdrant!

## Kết nối Database

### Từ máy local (host)

**PostgreSQL:**
```
Host: localhost
Port: 5432
User: postgres
Password: postgres123
Database: technical_requirements
```

**Connection String:**
```
postgresql://postgres:postgres123@localhost:5432/technical_requirements
```

**Qdrant:**
```
URL: http://localhost:6333
API Key: (không cần - local)
```

### Từ backend container (internal)

Backend đã được cấu hình tự động:
- PostgreSQL: `postgresql://postgres:postgres123@postgres:5432/technical_requirements`
- Qdrant: `http://qdrant:6333`

## Quản lý dữ liệu

### Backup PostgreSQL

```bash
docker exec postgres_db pg_dump -U postgres technical_requirements > backup.sql
```

### Restore PostgreSQL

```bash
docker exec -i postgres_db psql -U postgres technical_requirements < backup.sql
```

### Backup Qdrant

Dữ liệu Qdrant được lưu trong volume `qdrant-data` và tự động persist.

## Troubleshooting

### 1. Port đã được sử dụng

Nếu gặp lỗi port conflict, bạn có thể thay đổi port trong `docker-compose.yml`:

```yaml
ports:
  - "5433:5432"  # Thay vì 5432:5432
```

### 2. Containers không khởi động

Kiểm tra logs:
```bash
docker-compose logs
```

### 3. Reset toàn bộ

```bash
docker-compose down -v
docker-compose up --build -d
```

### 4. Kết nối database failed

Đảm bảo:
- Containers đã khởi động hoàn toàn (kiểm tra health check)
- Chờ khoảng 10-15 giây sau khi chạy `docker-compose up`

### 5. Frontend không kết nối được Backend

Kiểm tra biến môi trường trong `docker-compose.yml`:
```yaml
environment:
  - VITE_API_BASE_URL=http://localhost:5000  # Truy cập từ browser
```

Nếu gọi từ browser, đổi thành `http://localhost:5000`

## Các lệnh hữu ích

### Rebuild một service cụ thể

```bash
docker-compose up --build -d backend
```

### Restart một service

```bash
docker-compose restart backend
```

### Vào shell của container

```bash
docker exec -it backend_api bash
docker exec -it postgres_db psql -U postgres -d technical_requirements
```

### Xem resource usage

```bash
docker stats
```

### Xóa tất cả containers và images không sử dụng

```bash
docker system prune -a
```

## Volumes

Dữ liệu được lưu trữ trong Docker volumes:
- `postgres-data`: Dữ liệu PostgreSQL
- `qdrant-data`: Dữ liệu Qdrant

Xem danh sách volumes:
```bash
docker volume ls
```

Xem chi tiết volume:
```bash
docker volume inspect technical_requirements_postgres-data
docker volume inspect technical_requirements_qdrant-data
```

## Chuyển đổi giữa Local và External Database

Để sử dụng external database (Neon, Qdrant Cloud), uncomment các dòng trong file `.env`:

```env
# Sử dụng external database
DB_POSTGRES_URL=postgresql://neondb_owner:...@ep-twilight-art...
QDRANT_URL=https://a8bcf78f-0147-411f-aa58...
QDRANT_API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Sau đó restart backend:
```bash
docker-compose restart backend
```

## Network

Tất cả containers nằm trong cùng network `app-network`, cho phép chúng giao tiếp với nhau qua tên service:
- `backend` có thể truy cập `postgres` qua hostname `postgres`
- `backend` có thể truy cập `qdrant` qua hostname `qdrant`
- `frontend` có thể truy cập `backend` qua hostname `backend`
