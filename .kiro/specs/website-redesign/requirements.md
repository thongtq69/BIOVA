# Requirements Document

## Introduction

Thiết kế lại giao diện website BIOVA theo bố cục mẫu mới, sử dụng logo thực tế và màu chủ đạo theo logo (xanh lá cây), cập nhật nội dung giới thiệu và hình ảnh trong các section.

## Glossary

- **BIOVA**: Tên thương hiệu sản phẩm bột khô dầu đậu tương lên men
- **Solutions_Section**: Phần hiển thị các giải pháp BIOVA mang lại
- **Hero_Section**: Phần banner chính của website
- **Color_Scheme**: Bảng màu chủ đạo của website

## Requirements

### Requirement 1: Logo và Branding

**User Story:** As a visitor, I want to see the official BIOVA logo, so that I can recognize the brand identity.

#### Acceptance Criteria

1. THE Header SHALL display logo.jpg from public folder
2. THE Hero_Section SHALL display logo.jpg as main visual element
3. WHEN logo is displayed, THE System SHALL maintain proper aspect ratio

### Requirement 2: Color Scheme

**User Story:** As a visitor, I want to see a consistent color theme based on the logo, so that the website feels cohesive and professional.

#### Acceptance Criteria

1. THE Color_Scheme SHALL use green as primary color matching logo.jpg
2. THE System SHALL apply green theme to all interactive elements (buttons, links, badges)
3. THE Hero_Section SHALL use green gradient background
4. WHEN hovering on elements, THE System SHALL use darker green shade for feedback

### Requirement 3: Hero Section Content

**User Story:** As a visitor, I want to understand BIOVA's mission immediately, so that I know what the company offers.

#### Acceptance Criteria

1. THE Hero_Section SHALL display tagline "Bột khô dầu đậu tương lên men"
2. THE Hero_Section SHALL display main title "Tái sử dụng nguồn phụ phẩm khô dầu đậu tương bằng công nghệ lên men vi sinh"
3. THE Hero_Section SHALL display subtitle "Tạo ra nguồn protein thực vật thay thế đạm động vật trong thức ăn chăn nuôi"

### Requirement 4: Solutions Section Layout

**User Story:** As a visitor, I want to see BIOVA's solutions in a clear grid layout, so that I can quickly understand the value propositions.

#### Acceptance Criteria

1. THE Solutions_Section SHALL display 6 solution cards in a 3x2 grid layout on desktop
2. THE Solutions_Section SHALL display 2x3 grid on tablet and 1 column on mobile
3. WHEN displaying solution cards, THE System SHALL show image on top and title below
4. THE System SHALL use images from public folder for each solution card

### Requirement 5: Solution Card Images

**User Story:** As a visitor, I want to see relevant images for each solution, so that I can visually understand the benefits.

#### Acceptance Criteria

1. THE Solution_Card_1 SHALL display "an toàn cho vật nuôi.png" with title "An toàn cho vật nuôi và môi trường"
2. THE Solution_Card_2 SHALL display "thay thế đạm động vật.png" with title "Thay thế đạm động vật bằng sản phẩm giá rẻ, chất lượng cao"
3. THE Solution_Card_3 SHALL display "phát triển mô hình kinh tế tuần hoàn.jpeg" with title "Phát triển mô hình kinh tế tuần hoàn, sản xuất khép kín"
4. THE Solution_Card_4 SHALL display "ảnh nông nghiệp bền vững.jpg" with title "Thúc đẩy nghiên cứu, ứng dụng công nghệ cao trong nông nghiệp"
5. THE Solution_Card_5 SHALL display "mở rộng quy mô chăn nuôi.jpg" with title "Hỗ trợ cộng đồng mở rộng quy mô chăn nuôi"
6. THE Solution_Card_6 SHALL display "ảnh nông nghiệp bền vững.jpg" with title "Hướng đến chăn nuôi xanh - an toàn - bền vững"

### Requirement 6: Responsive Design

**User Story:** As a mobile user, I want the website to display properly on my device, so that I can browse comfortably.

#### Acceptance Criteria

1. WHEN viewport width is less than 768px, THE Solutions_Section SHALL display cards in single column
2. WHEN viewport width is between 768px and 1024px, THE Solutions_Section SHALL display cards in 2 columns
3. WHEN viewport width is greater than 1024px, THE Solutions_Section SHALL display cards in 3 columns
