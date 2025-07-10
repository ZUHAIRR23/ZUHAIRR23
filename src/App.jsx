import React from 'react';
import './App.css';

function App() {
  const businessItems = [
    {
      id: 1,
      title: "Pengadaan Capital Kitchen & Outlet For 3 Jumantan & Mall",
      price: "Rp 150.000.000",
      image: "/api/placeholder/300/200",
      category: "BISNIS"
    },
    {
      id: 2,
      title: "Pengadaan Bahan Baku Kain Fashion Tahap IV CV Kebut Kayo Semarang",
      price: "Rp 338.000.000",
      image: "/api/placeholder/300/200",
      category: "BISNIS"
    },
    {
      id: 3,
      title: "Bisnis Kerjasama Pengadaan Jasa Penyelenggara Tahungan Umrah Untuk Umrah",
      price: "Rp 160.000.000",
      image: "/api/placeholder/300/200",
      category: "BISNIS"
    },
    {
      id: 4,
      title: "Pengadaan Bahan Baku Kain Fashii Madinah - PT Agi Official Store Tahap",
      price: "Rp 977.000.000",
      image: "/api/placeholder/300/200",
      category: "BISNIS"
    }
  ];

  const investmentItems = [
    {
      id: 1,
      title: "Bisnis Kerjasama Pengadaan Capital Kitchen & Outlet For 3 Jumantan & Mall Jakarta Pusat, Jakarta",
      price: "Rp 3.500.000.000",
      status: "TERPENUHI",
      image: "/api/placeholder/60/60"
    },
    {
      id: 2,
      title: "Pengadaan Bahan Baku Kain Fashion Tahap IV CV Kebut Kayo Semarang Jawa Tengah",
      price: "Rp 2.838.000.000",
      status: "TERPENUHI",
      image: "/api/placeholder/60/60"
    },
    {
      id: 3,
      title: "Bisnis Kerjasama Pengadaan Jasa Penyelenggara Tabungan Umrah Untuk Umrah Tanpa Ribet PT Kabal Ahead Transport Bekasi",
      price: "Rp 4.000.000.000",
      status: "TERPENUHI",
      image: "/api/placeholder/60/60"
    },
    {
      id: 4,
      title: "Pengadaan Bahan Baku Kain Fashion Madinah - PT Agi Official Store Tahap IV Tahun 2024",
      price: "Rp 1.877.000.000",
      status: "TERPENUHI",
      image: "/api/placeholder/60/60"
    },
    {
      id: 5,
      title: "Bisnis Kerjasama Pengadaan Jasa Tipperisasi GRAI-ADM 3L Untuk Laboratorium Media Berstandar Nasional Dalam Hal PT Bersama Medika Surabaya - PT Bulutarketing Sengi Jakarta Timur | Tahun 2024",
      price: "Rp 300.000.000",
      status: "TERPENUHI",
      image: "/api/placeholder/60/60"
    }
  ];

  return (
    <div className="App">
      <div className="container">
        {/* Header Section */}
        <section className="section">
          <h2 className="section-title">BISNIS TERKINI</h2>
          <div className="business-grid">
            {businessItems.map(item => (
              <div key={item.id} className="business-card">
                <div className="business-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="business-content">
                  <span className="business-category">{item.category}</span>
                  <h3 className="business-title">{item.title}</h3>
                  <p className="business-price">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Business Section */}
        <section className="section">
          <h2 className="section-title">BISNIS YANG AKAN DATANG</h2>
          <div className="upcoming-business">
            <div className="upcoming-icon">
              <div className="icon-circle">
                <span className="icon">📈</span>
              </div>
            </div>
            <div className="upcoming-content">
              <h3>Bisnis Akan Segera Hadir</h3>
              <p>Bisnis yang akan segera tersedia akan ini. Namun, anda dapat melakukan perpanjangan secara berkala di sini. LBS Urun Dana yang akan memberikan informasi terkait kepada anda yang akan hadir melalui email pada setiap bulannya.</p>
            </div>
          </div>
        </section>

        {/* Investment List Section */}
        <section className="section">
          <h2 className="section-title">DAFTAR LENGKAP INVESTASI</h2>
          <div className="investment-list">
            {investmentItems.map(item => (
              <div key={item.id} className="investment-item">
                <div className="investment-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="investment-content">
                  <span className="investment-category">BISNIS</span>
                  <h3 className="investment-title">{item.title}</h3>
                  <p className="investment-price">{item.price}</p>
                  <span className="investment-status">TERPENUHI</span>
                </div>
                <div className="investment-action">
                  <button className="btn-terpenuhi">{item.status}</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Halal Investment Banner */}
        <section className="halal-banner">
          <div className="banner-content">
            <h2>Investasi Halal bersama LBS Urun Dana: Layak bisnisnya, syariah transaksinya</h2>
            <p>LBS Urun Dana adalah platform layanan urun dana efek (Securities Crowdfunding) yang fokus memberikan solusi investasi yang tidak melanggar syariat Islam melalui produk investasi, seperti: Saham & Sukuk.</p>
            <div className="banner-features">
              <div className="feature">✓ Kebijakan bertanakad halal bersama LBS Urun Dana</div>
              <div className="feature">✓ Apa itu saham?</div>
              <div className="feature">✓ Apa itu sukuk?</div>
              <div className="feature">✓ Perbedaan saham dengan sukuk</div>
              <div className="feature">✓ Syariat dan sistem syariah</div>
              <div className="feature">✓ Bagaimana cara memulai investasi di LBS Urun Dana?</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;