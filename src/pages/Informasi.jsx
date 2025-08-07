import React from 'react';
import './Informasi.css';

const Informasi = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">Hubungi Kami</h1>
      <p className="page-intro">
        Kami sangat terbuka untuk kolaborasi, pertanyaan, dan aspirasi. <br />
        Jangan ragu untuk menghubungi kami melalui kanal di bawah ini.
      </p>

      <div className="info-container">
        <div className="info-card contact-details">
          <h2>Detail Kontak</h2>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:himaeisnten.com@gmail.com">himaeinsten.com@gmail.com</a></li>
            <li><strong>Instagram:</strong> <a href="https://instagram.com/himaeinsten" target="_blank" rel="noopener noreferrer">@himaeinsten</a></li>
          </ul>
        </div>

        <div className="info-card location">
          <h2>Lokasi Sekretariat</h2>
          <iframe src="https://maps.google.com/maps?q=-7.7784133,110.4117608&output=embed" width="100%" height="300" style={{border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Lokasi Sekretariat HIMA Einstein"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Informasi;