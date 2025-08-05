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
            <li><strong>Email:</strong> <a href="mailto:kontak@einsten.com">kontak@einsten.com</a></li>
            <li><strong>Instagram:</strong> <a href="https://instagram.com/hima_einsten" target="_blank" rel="noopener noreferrer">@hima_einsten</a></li>
            {/* TAMBAHKAN KONTAK LAINNYA DI SINI (MISAL: LINE, WHATSAPP) */}
          </ul>
        </div>

        <div className="info-card location">
          <h2>Lokasi Sekretariat</h2>
          <div className="map-placeholder">
            {/* GANTI DENGAN EMBED GOOGLE MAPS ATAU GAMBAR PETA */}
            <p>Gedung A Lantai 2, Kampus Politeknik</p>
            <p>Jalan Pendidikan No. 1, Kota Teknologi</p>
            <p>(Placeholder Peta Lokasi)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informasi;