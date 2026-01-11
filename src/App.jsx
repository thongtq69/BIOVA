import './App.css'

// SVG Decorative Icons
const LeafIcon = () => (
  <svg className="deco-icon leaf-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
  </svg>
)

const PlantIcon = () => (
  <svg className="deco-icon plant-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z"/>
  </svg>
)

const GrainIcon = () => (
  <svg className="deco-icon grain-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,2C6.5,2 2,6.5 2,12C2,17.5 6.5,22 12,22C17.5,22 22,17.5 22,12C22,6.5 17.5,2 12,2M12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4M9,7V17H11V13H13V17H15V7H13V11H11V7H9Z"/>
  </svg>
)

// Agriculture Background Pattern
const AgriculturePattern = () => (
  <div className="agri-pattern">
    <svg className="pattern-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <pattern id="leafPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M10,2 Q15,5 12,10 Q10,12 8,10 Q5,5 10,2Z" fill="rgba(76,175,80,0.1)"/>
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#leafPattern)"/>
    </svg>
  </div>
)

// Decorative floating elements with agriculture theme
const FloatingElements = () => (
  <div className="floating-elements">
    <div className="floating-leaf leaf-1">🌿</div>
    <div className="floating-leaf leaf-2">🌱</div>
    <div className="floating-leaf leaf-3">🍃</div>
    <div className="floating-leaf leaf-4">🌾</div>
    <div className="floating-leaf leaf-5">🥬</div>
    <div className="floating-circle circle-1"></div>
    <div className="floating-circle circle-2"></div>
    <div className="floating-circle circle-3"></div>
    <svg className="floating-svg svg-1" viewBox="0 0 100 100">
      <path d="M50,10 Q70,30 50,50 Q30,70 50,90" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none"/>
    </svg>
    <svg className="floating-svg svg-2" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="30" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none"/>
    </svg>
  </div>
)

// Feature highlights for hero
const HeroFeatures = () => (
  <div className="hero-features">
    <div className="hero-feature">
      <span className="feature-icon">🧬</span>
      <span className="feature-text">Công nghệ sinh học</span>
    </div>
    <div className="hero-feature">
      <span className="feature-icon">🌿</span>
      <span className="feature-text">100% tự nhiên</span>
    </div>
    <div className="hero-feature">
      <span className="feature-icon">✅</span>
      <span className="feature-text">An toàn sinh học</span>
    </div>
  </div>
)

// Header Navigation Component
const Header = () => (
  <header className="main-header">
    <div className="container header-container">
      <a href="#hero" className="header-logo">
        <img src="/logo-removebg-preview.png" alt="BIOVA Logo" className="header-logo-img" />
        <span className="header-brand-name">BIOVA</span>
      </a>
      <nav className="header-nav">
        <a href="#benefits">Ưu điểm</a>
        <a href="#technology">Công nghệ</a>
        <a href="#solutions">Giải pháp</a>
        <a href="#contact" className="nav-cta">Đăng ký ngay</a>
      </nav>
    </div>
  </header>
)

function App() {
  return (
    <div className="app">
      {/* Header Navigation */}
      <Header />

      {/* Hero Section - Modern Design */}
      <section id="hero" className="hero-section">
        <div className="hero-overlay"></div>
        <FloatingElements />
        <div className="container hero-content">
          <div className="hero-badge">🌱 Công nghệ sinh học tiên tiến</div>
          
          {/* Hero Logo - Large centered */}
          <div className="hero-logo-wrapper">
            <img src="/logo-removebg-preview.png" alt="BIOVA Logo" className="hero-main-logo" />
            <h2 className="hero-brand-name">BIOVA</h2>
          </div>
          
          <span className="hero-tagline">Bột khô dầu đậu tương lên men</span>
          
          <h1 className="hero-title">
            Tái sử dụng nguồn phụ phẩm khô dầu đậu tương bằng công nghệ lên men vi sinh
          </h1>
          
          <p className="hero-subtitle">
            Tạo ra nguồn protein thực vật thay thế đạm động vật trong thức ăn chăn nuôi
          </p>
          
          {/* Hero Features */}
          <HeroFeatures />
          
          <div className="hero-cta-group">
            <a href="#benefits" className="btn btn-primary hero-cta">
              Tìm hiểu thêm
            </a>
            <a href="#contact" className="btn btn-outline hero-cta-secondary">
              Liên hệ ngay
            </a>
          </div>
        </div>
      </section>

      {/* Technology Process Section */}
      <section id="technology-process" className="technology-process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Công nghệ độc quyền</span>
            <h2 className="section-title">Quy trình lên men kiểm soát</h2>
            <p className="section-description">
              Sử dụng các chủng vi sinh vật có lợi để tạo ra sản phẩm chất lượng cao
            </p>
          </div>
          
          <div className="process-grid">
            <div className="process-card">
              <div className="process-icon">🔬</div>
              <h3 className="process-title">Phân hủy kháng dinh dưỡng</h3>
              <p className="process-text">
                Loại bỏ các yếu tố kháng dinh dưỡng trong đậu tương như trypsin inhibitor, lectin
              </p>
            </div>
            
            <div className="process-card">
              <div className="process-icon">⚡</div>
              <h3 className="process-title">Tăng cường hấp thu</h3>
              <p className="process-text">
                Tăng cường khả năng tiêu hóa và hấp thu protein nhờ quá trình tiền phân hủy
              </p>
            </div>
            
            <div className="process-card">
              <div className="process-icon">🧬</div>
              <h3 className="process-title">Hợp chất sinh học</h3>
              <p className="process-text">
                Tạo ra các hợp chất sinh học có giá trị dinh dưỡng cao, bổ sung probiotic tự nhiên
              </p>
            </div>
            
            <div className="process-card">
              <div className="process-icon">✨</div>
              <h3 className="process-title">Cải thiện mùi vị</h3>
              <p className="process-text">
                Cải thiện mùi vị và độ ngon miệng của thức ăn, kích thích ăn uống
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Ưu điểm vượt trội</span>
            <h2 className="section-title">Tại sao chọn BIOVA?</h2>
            <p className="section-description">
              Bột khô dầu đậu tương lên men BIOVA đảm bảo an toàn vi sinh và bảo vệ môi trường
            </p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-image">
                <img 
                  src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80" 
                  alt="Chất lượng dinh dưỡng cao"
                />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Chất lượng dinh dưỡng cao</h3>
                <p className="benefit-text">
                  Hàm lượng protein cao, dễ tiêu hóa. Giàu acid amin thiết yếu và enzyme tự nhiên
                </p>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-image">
                <img 
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80" 
                  alt="Công nghệ hiện đại"
                />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Công nghệ hiện đại</h3>
                <p className="benefit-text">
                  Lên men kết hợp 3 chủng vi sinh độc đáo duy nhất tại Việt Nam
                </p>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-image">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80" 
                  alt="Thân thiện môi trường"
                />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Thân thiện môi trường</h3>
                <p className="benefit-text">
                  Giảm khí thải từ chăn nuôi, an toàn sinh học, không biến đổi gen
                </p>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-image">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80" 
                  alt="Đa dạng lựa chọn"
                />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Đa dạng lựa chọn</h3>
                <p className="benefit-text">
                  Phù hợp cho nhiều loại vật nuôi: heo, gà, vịt, bò, thủy sản
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Tabs Section - NEW */}
      <section id="advantages" className="advantages-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Chi tiết ưu điểm</span>
            <h2 className="section-title">Hiệu quả toàn diện</h2>
          </div>
          
          <div className="advantages-grid">
            {/* Nutrition Column */}
            <div className="advantage-column">
              <div className="advantage-header nutrition">
                <span className="advantage-icon">🥗</span>
                <h3>Về dinh dưỡng</h3>
              </div>
              <ul className="advantage-list">
                <li>Hàm lượng protein cao, dễ tiêu hóa</li>
                <li>Protein đã được tiền phân hủy</li>
                <li>Giàu acid amin thiết yếu</li>
                <li>Bổ sung probiotic và enzyme tự nhiên</li>
                <li>Giảm thiểu yếu tố kháng dinh dưỡng</li>
              </ul>
            </div>
            
            {/* Efficiency Column */}
            <div className="advantage-column">
              <div className="advantage-header efficiency">
                <span className="advantage-icon">📈</span>
                <h3>Về hiệu quả chăn nuôi</h3>
              </div>
              <ul className="advantage-list">
                <li>Tăng tỷ lệ chuyển hóa thức ăn</li>
                <li>Cải thiện sức khỏe đường ruột</li>
                <li>Giảm tình trạng tiêu chảy ở vật nuôi non</li>
                <li>Tăng trọng nhanh, đồng đều</li>
                <li>Nâng cao sức đề kháng tự nhiên</li>
              </ul>
            </div>
            
            {/* Economy Column */}
            <div className="advantage-column">
              <div className="advantage-header economy">
                <span className="advantage-icon">💰</span>
                <h3>Về kinh tế</h3>
              </div>
              <ul className="advantage-list">
                <li>Giảm chi phí thuốc thú y</li>
                <li>Nâng cao năng suất chăn nuôi</li>
                <li>Thân thiện với môi trường</li>
                <li>Giảm khí thải từ chăn nuôi</li>
                <li>Tiết kiệm chi phí thức ăn</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </div>
              <div className="stat-number">6K+</div>
              <div className="stat-label">Lượt tìm kiếm</div>
              <p className="stat-description">
                BIOVA ngày càng tiếp cận nhiều khách hàng tìm kiếm nguồn thức ăn bổ sung đạm chất lượng cao
              </p>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                  <path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z"/>
                </svg>
              </div>
              <div className="stat-number">10+</div>
              <div className="stat-label">Máy móc công nghệ</div>
              <p className="stat-description">
                Ứng dụng công nghệ hiện đại, đổi mới sáng tạo độc đáo duy nhất ở Việt Nam
              </p>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Hài lòng</div>
              <p className="stat-description">
                Khách hàng đánh giá cao chất lượng dinh dưỡng và hiệu quả BIOVA mang lại
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="technology-section">
        <div className="container">
          <div className="technology-content">
            <span className="tech-badge">🏆 Độc quyền tại Việt Nam</span>
            <h2 className="technology-title">
              Công nghệ lên men kết hợp
              <span className="technology-highlight"> 3 chủng vi sinh</span>
            </h2>
            <p className="technology-subtitle">
              Giải quyết bài toán tái sử dụng phụ phẩm nông nghiệp, 
              hướng đến chăn nuôi xanh - an toàn - bền vững
            </p>
            <div className="technology-image-placeholder">
              <img 
                src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=800&q=80" 
                alt="Công nghệ lên men vi sinh BIOVA"
                className="technology-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Animals Section - NEW */}
      <section id="targets" className="targets-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Đối tượng sử dụng</span>
            <h2 className="section-title">Phù hợp cho nhiều loại vật nuôi</h2>
          </div>
          
          <div className="targets-grid">
            <div className="target-card">
              <div className="target-icon">🐷</div>
              <h3>Heo</h3>
              <p>Heo con, heo thịt, heo nái</p>
            </div>
            <div className="target-card">
              <div className="target-icon">🐔</div>
              <h3>Gia cầm</h3>
              <p>Gà broiler, gà đẻ, vịt, ngan, ngỗng</p>
            </div>
            <div className="target-card">
              <div className="target-icon">🐄</div>
              <h3>Bò</h3>
              <p>Bò sữa, bò thịt</p>
            </div>
            <div className="target-card">
              <div className="target-icon">🐟</div>
              <h3>Thủy sản</h3>
              <p>Cá tra, tôm và các loại khác</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="solutions-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Giá trị mang lại</span>
            <h2 className="section-title">Giải pháp BIOVA</h2>
          </div>
          
          <div className="solutions-grid">
            <div className="solution-card solution-card-1">
              <div className="solution-image">
                <img 
                  src="/1.png"
                  alt="An toàn cho vật nuôi và môi trường"
                />
              </div>
              <div className="solution-content">
                <h3 className="solution-title">An toàn cho vật nuôi và môi trường</h3>
              </div>
            </div>

            <div className="solution-card solution-card-2">
              <div className="solution-image">
                <img 
                  src="/2.jpg"
                  alt="Thay thế đạm động vật"
                />
              </div>
              <div className="solution-content">
                <h3 className="solution-title">Thay thế đạm động vật bằng sản phẩm giá rẻ, chất lượng cao</h3>
              </div>
            </div>

            <div className="solution-card solution-card-3">
              <div className="solution-image">
                <img 
                  src="/3.jpg"
                  alt="Kinh tế tuần hoàn"
                />
              </div>
              <div className="solution-content">
                <h3 className="solution-title">Phát triển mô hình kinh tế tuần hoàn, sản xuất khép kín</h3>
              </div>
            </div>

            <div className="solution-card solution-card-4">
              <div className="solution-image">
                <img 
                  src="/4.jpeg"
                  alt="Công nghệ cao"
                />
              </div>
              <div className="solution-content">
                <h3 className="solution-title">Thúc đẩy nghiên cứu, ứng dụng công nghệ cao trong nông nghiệp</h3>
              </div>
            </div>

            <div className="solution-card solution-card-5">
              <div className="solution-image">
                <img 
                  src="/5.png"
                  alt="Hỗ trợ cộng đồng"
                />
              </div>
              <div className="solution-content">
                <h3 className="solution-title">Hỗ trợ cộng đồng mở rộng quy mô chăn nuôi</h3>
              </div>
            </div>

            <div className="solution-card solution-card-6">
              <div className="solution-image">
                <img 
                  src="/3.jpg"
                  alt="Chăn nuôi xanh"
                />
              </div>
              <div className="solution-content">
                <h3 className="solution-title">Hướng đến chăn nuôi xanh - an toàn - bền vững</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment Section - NEW */}
      <section id="quality" className="quality-section">
        <div className="container">
          <div className="section-header light">
            <span className="section-badge light">Cam kết chất lượng</span>
            <h2 className="section-title">Tiêu chuẩn quốc tế</h2>
          </div>
          
          <div className="quality-grid">
            <div className="quality-item">
              <div className="quality-check">✓</div>
              <span>Sản xuất theo tiêu chuẩn quốc tế</span>
            </div>
            <div className="quality-item">
              <div className="quality-check">✓</div>
              <span>Kiểm soát chất lượng nghiêm ngặt</span>
            </div>
            <div className="quality-item">
              <div className="quality-check">✓</div>
              <span>Không chứa hormone, kháng sinh</span>
            </div>
            <div className="quality-item">
              <div className="quality-check">✓</div>
              <span>An toàn sinh học, không biến đổi gen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section - NEW */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2>Bạn quan tâm đến sản phẩm BIOVA?</h2>
            <p>Liên hệ ngay để được tư vấn và báo giá chi tiết</p>
            <div className="contact-buttons">
              <a href="tel:0898575254" className="btn btn-primary btn-lg">
                📞 0898 575 254
              </a>
              <a href="mailto:botkhodaudautuong.biova@gmail.com" className="btn btn-outline-light btn-lg">
                ✉️ Gửi email
              </a>
            </div>
            <div className="contact-info">
              <p>📧 botkhodaudautuong.biova@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src="/logo-removebg-preview.png" alt="BIOVA Logo" className="footer-logo-img" />
              <p>Bột khô dầu đậu tương lên men - Giải pháp dinh dưỡng cao cấp cho chăn nuôi</p>
            </div>
            <div className="footer-contact">
              <h4>Liên hệ</h4>
              <p>📞 0898 575 254</p>
              <p>📧 botkhodaudautuong.biova@gmail.com</p>
            </div>
            <div className="footer-copyright">
              <p>© 2026 BIOVA. Tất cả quyền được bảo lưu.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
