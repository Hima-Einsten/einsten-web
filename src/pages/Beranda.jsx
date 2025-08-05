import React from 'react';
import { Link } from 'react-router-dom';
import './Beranda.css';

const Beranda = () => {
  return (
    <div className="beranda-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Selamat Datang di HIMA EINSTEN.COM</h1>
        <p>Himpunan Mahasiswa Elektronika & Instrumentasi yang Berdedikasi dan Inovatif</p>
        <Link to="/profil" className="cta-button">Pelajari Lebih Lanjut</Link>
      </section>

      {/* About Summary Section */}
      <section className="summary-section">
        <h2>Tentang Kami</h2>
        <p>
          HIMA EINSTEN.COM adalah wadah bagi para mahasiswa untuk berkembang, berkolaborasi, dan berinovasi di bidang elektronika dan instrumentasi.
        </p>
        <Link to="/profil" className="text-link">Lihat profil lengkap...</Link>
      </section>

      {/* Kegiatan Pratinjau Section */}
      <section className="kegiatan-pratinjau">
        <h2>Kegiatan Terbaru</h2>
        <div className="kegiatan-cards">
          <div className="card">
            <h3>Seminar Nasional</h3>
            <p>Deskripsi singkat tentang seminar nasional yang telah diadakan.</p>
          </div>
          <div className="card">
            <h3>Workshop IoT</h3>
            <p>Deskripsi singkat tentang workshop Internet of Things untuk anggota.</p>
          </div>
          <div className="card">
            <h3>Bakti Sosial</h3>
            <p>Deskripsi singkat tentang kegiatan bakti sosial tahunan.</p>
          </div>
        </div>
        <Link to="/kegiatan" className="text-link">Lihat semua kegiatan...</Link>
      </section>

    </div>
  );
};

export default Beranda;