# Technical Requirement System

Hệ thống xử lý và trích xuất yêu cầu kỹ thuật từ tài liệu PDF sử dụng AI/ML.

## 📋 Mục lục

- [Tổng quan](#tổng-quan)
- [Công nghệ sử dụng](#công-nghệ-sử-dụng)
- [Yêu cầu hệ thống](#yêu-cầu-hệ-thống)
- [Cài đặt](#cài-đặt)
- [Cấu hình](#cấu-hình)
- [Chạy ứng dụng](#chạy-ứng-dụng)
- [API Documentation](#api-documentation)
- [Cấu trúc dự án](#cấu-trúc-dự-án)

## 🎯 Tổng quan

Dự án này là một hệ thống full-stack để xử lý và trích xuất thông tin kỹ thuật từ các tài liệu PDF, sử dụng các công nghệ AI/ML như LlamaIndex, OpenAI embeddings, và Qdrant vector database.

## 🛠 Công nghệ sử dụng

### Backend

- **Python 3.12**
- **Flask** - Web framework
- **LlamaIndex** - Framework cho RAG (Retrieval-Augmented Generation)
- **OpenAI** - Embeddings và LLM
- **Qdrant** - Vector database
- **PostgreSQL** - Relational database
- **Flasgger** - API documentation (Swagger)

### Frontend

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **shadcn-ui** - UI components
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **Axios** - HTTP client

### DevOps

- **Docker** & **Docker Compose** - Containerization

## 📦 Yêu cầu hệ thống

- Python 3.12
- Node.js (phiên bản mới nhất)
- Docker & Docker Compose (tùy chọn)
- PostgreSQL database
- Qdrant vector database

## 🔧 Cài đặt

### 1. Clone repository

```bash
git clone <YOUR_GIT_URL>
cd Technical_requirement
```

### 2. Cài đặt Backend

```bash
# Tạo virtual environment (khuyến nghị)
python -m venv venv

# Kích hoạt virtual environment
# Trên Windows:
venv\Scripts\activate
# Trên Linux/Mac:
source venv/bin/activate

# Cài đặt dependencies
pip install -r requirement.txt
```

### 3. Cài đặt Frontend

```bash
cd frontend
npm install
cd ..
```

## ⚙️ Cấu hình

### Biến môi trường

Tạo file `.env` trong thư mục gốc với các biến sau:

```env
# API Keys
LLAMA_API_KEY=your_llama_api_key
OPENAI_API_KEY=your_openai_api_key

# Qdrant Configuration
QDRANT_API_KEY=your_qdrant_api_key
QDRANT_URL=your_qdrant_url

# Database Configuration
DB_POSTGRES_URL=postgresql://user:password@localhost:5432/dbname
```

## 🚀 Chạy ứng dụng

### Chạy Backend

```bash
# Kích hoạt virtual environment (nếu chưa kích hoạt)
source activate  # hoặc venv\Scripts\activate trên Windows

# Chạy Flask server
python -m backend.app
```

Backend sẽ chạy tại: `http://127.0.0.1:5000`

### Chạy Frontend

```bash
cd frontend
npm run dev
```

Frontend sẽ chạy tại: `http://localhost:5173` (hoặc port khác nếu 5173 đã được sử dụng)

### Chạy với Docker

```bash
# Build và chạy tất cả services
docker-compose up --build -d

# Xem logs
docker-compose logs -f

# Dừng services
docker-compose down
```

Sau khi chạy Docker:

- Backend: `http://localhost:5000`
- Frontend: `http://localhost:8080`

## 📚 API Documentation

Sau khi chạy backend, truy cập Swagger UI tại:

**<http://127.0.0.1:5000/docs>**

Các API chính nằm trong phần **Main API**.

## 📁 Cấu trúc dự án

```
Technical_requirement/
├── ai_server/              # AI/ML processing modules
│   ├── chat_agent/        # Chat agent functionality
│   ├── retrieve/          # Retrieval modules
│   ├── retrieve2/         # Alternative retrieval implementation
│   ├── upload_data/       # Data upload processing
│   └── highlight/         # Keyword highlighting
├── backend/               # Flask backend
│   ├── db/               # Database connection
│   ├── models/           # Database models
│   └── services/         # Business logic services
├── frontend/             # React frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/       # Page components
│   │   └── hooks/       # Custom hooks
│   └── public/          # Static assets
├── crawl_data/          # Web crawling utilities
├── step_process/        # Data processing steps
├── output/             # Generated output files
├── test_data/         # Test data files
└── docker-compose.yml  # Docker configuration
```

## 🔍 Các tính năng chính

- 📄 Trích xuất và xử lý tài liệu PDF
- 🔍 Tìm kiếm semantic với vector database
- 📊 Trích xuất bảng từ PDF
- 🤖 Xử lý ngôn ngữ tự nhiên với AI
- 📝 Tạo và xuất file Excel tự động
- 🌐 Giao diện web hiện đại với React

## 📝 Ghi chú

- Đảm bảo các API keys được cấu hình đúng trong file `.env`
- Database và Qdrant phải được khởi động trước khi chạy backend
- Xem file `note.txt` để biết thêm thông tin chi tiết

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng tạo issue hoặc pull request.

