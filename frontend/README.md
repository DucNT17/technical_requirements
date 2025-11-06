# Frontend - Technical Requirement System

Frontend application được xây dựng với React và TypeScript cho hệ thống xử lý yêu cầu kỹ thuật.

## 🚀 Quick Start

### Cài đặt dependencies

```bash
npm install
```

### Chạy development server

```bash
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:5173` (hoặc port khác nếu 5173 đã được sử dụng).

### Build cho production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 🛠 Công nghệ sử dụng

Dự án này được xây dựng với các công nghệ hiện đại:

- **[Vite](https://vitejs.dev/)** - Build tool và dev server nhanh chóng
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety và developer experience tốt hơn
- **[React 18](https://react.dev/)** - UI library
- **[shadcn-ui](https://ui.shadcn.com/)** - Component library dựa trên Radix UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[Axios](https://axios-http.com/)** - HTTP client cho API calls
- **[React Query](https://tanstack.com/query)** - Data fetching và caching
- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[Zod](https://zod.dev/)** - Schema validation

## 📁 Cấu trúc thư mục

```
frontend/
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/          # Page-level components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions và configurations
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── package.json        # Dependencies và scripts
└── vite.config.ts      # Vite configuration
```

## 🔧 Cấu hình

### Environment Variables

Tạo file `.env` trong thư mục `frontend/`:

```env
VITE_API_BASE_URL=http://localhost:5000
```

## 📦 Scripts có sẵn

- `npm run dev` - Chạy development server
- `npm run build` - Build cho production
- `npm run build:dev` - Build ở chế độ development
- `npm run preview` - Preview production build
- `npm run lint` - Chạy ESLint để kiểm tra code

## 🌐 API Integration

Frontend kết nối với backend API tại `http://localhost:5000` (hoặc URL được cấu hình trong `.env`).

Xem API documentation tại: `http://localhost:5000/docs`

## 💡 Development Tips

- Sử dụng TypeScript để có type safety tốt hơn
- Components được tổ chức theo cấu trúc modular
- Styling sử dụng Tailwind CSS với utility classes
- Form validation sử dụng React Hook Form + Zod
- State management có thể sử dụng React Query cho server state

## 🐛 Troubleshooting

### Port đã được sử dụng

Nếu port 5173 đã được sử dụng, Vite sẽ tự động chọn port khác. Kiểm tra terminal để xem port mới.

### API connection issues

Đảm bảo backend đang chạy và URL trong `.env` đúng.

### Build errors

Xóa `node_modules` và `package-lock.json`, sau đó chạy lại `npm install`:

```bash
rm -rf node_modules package-lock.json
npm install
```
