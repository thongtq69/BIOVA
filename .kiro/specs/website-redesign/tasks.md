# Implementation Plan: Website Redesign BIOVA

## Overview

Triển khai thiết kế lại giao diện website BIOVA: cập nhật color scheme sang xanh dương, sử dụng logo thực tế, cập nhật nội dung và hình ảnh.

## Tasks

- [x] 1. Cập nhật Color Scheme trong CSS
  - Thay đổi CSS variables trong `src/index.css`
  - Chuyển từ green theme sang blue theme
  - Cập nhật primary colors: `--primary-blue: #1976D2`, `--primary-blue-dark: #0D47A1`
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 2. Cập nhật Header Component
  - [x] 2.1 Thay logo SVG bằng logo.jpg
    - Sử dụng `<img src="/logo.jpg">` thay vì SVG component
    - Điều chỉnh kích thước phù hợp
    - _Requirements: 1.1, 1.2_
  - [x] 2.2 Cập nhật styling header
    - Background trắng với shadow
    - Điều chỉnh navigation colors theo theme mới
    - _Requirements: 1.3, 5.1, 5.2, 5.3_

- [x] 3. Cập nhật Hero Section
  - [x] 3.1 Thay đổi background gradient sang xanh dương
    - Cập nhật gradient trong `src/App.css`
    - Màu từ #0a4d8c đến #1976d2
    - _Requirements: 2.2_
  - [x] 3.2 Cập nhật logo và tagline
    - Hiển thị logo.jpg centered trong hero
    - Cập nhật tagline mới về tái sử dụng phụ phẩm
    - _Requirements: 3.1, 3.2, 3.3_

- [x] 4. Cập nhật Solutions Section
  - [x] 4.1 Thay ảnh các solution cards
    - Card 1: `/an toàn cho vật nuôi.png`
    - Card 2: `/thay thế đạm động vật.png`
    - Card 3: `/phát triển mô hình kinh tế tuần hoàn.jpeg`
    - Card 5: `/mở rộng quy mô chăn nuôi.jpg`
    - Card 6: `/ảnh nông nghiệp bền vững.jpg`
    - _Requirements: 4.1, 4.2, 4.3_

- [x] 5. Cập nhật các section khác theo theme mới
  - Điều chỉnh màu sắc các section còn lại cho đồng bộ
  - Cập nhật buttons, badges, highlights sang blue theme
  - _Requirements: 2.3_

- [x] 6. Checkpoint - Kiểm tra visual
  - Đảm bảo tất cả thay đổi hiển thị đúng
  - Kiểm tra responsive trên các kích thước màn hình
  - Hỏi user nếu có vấn đề phát sinh

## Notes

- Các ảnh trong public folder có tên tiếng Việt với dấu, cần encode URL đúng
- Giữ nguyên cấu trúc component, chỉ thay đổi content và styling
- Đảm bảo backward compatibility với các phần không thay đổi
