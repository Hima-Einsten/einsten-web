import React from 'react';
import './Kegiatan.css';

// Anda bisa membuat data ini dinamis dari API atau file JSON nantinya
const daftarKegiatan = [
  {
    id: 1,
    nama: "Seminar Teknologi Terbaru",
    deskripsi: "Seminar tahunan yang membahas perkembangan teknologi terkini di dunia industri.",
    gambar: "https://via.placeholder.com/300x200.png?text=Seminar" // Ganti dengan URL gambar Anda
  },
  {
    id: 2,
    nama: "Workshop Mikrokontroler",
    deskripsi: "Pelatihan praktis untuk anggota dalam memprogram dan merakit perangkat berbasis mikrokontroler.",
    gambar: "https://via.placeholder.com/300x200.png?text=Workshop" // Ganti dengan URL gambar Anda
  },
  {
    id: 3,
    nama: "Bakti Sosial",
    deskripsi: "Kegiatan pengabdian masyarakat sebagai bentuk kontribusi sosial dari himpunan.",
    gambar: "https://via.placeholder.com/300x200.png?text=Bakti+Sosial" // Ganti dengan URL gambar Anda
  },
  {
    id: 4,
    nama: "Kompetisi Robotik",
    deskripsi: "Ajang kompetisi internal untuk mengasah kreativitas dan kemampuan problem-solving.",
    gambar: "https://via.placeholder.com/300x200.png?text=Robotik" // Ganti dengan URL gambar Anda
  }
];

const Kegiatan = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">Kegiatan Himpunan</h1>
      <p className="page-intro">Berikut adalah beberapa kegiatan yang kami adakan untuk mengembangkan potensi mahasiswa.</p>
      
      <div className="kegiatan-grid">
        {daftarKegiatan.map(kegiatan => (
          <div key={kegiatan.id} className="kegiatan-card">
            <img src={kegiatan.gambar} alt={kegiatan.nama} className="kegiatan-gambar" />
            <div className="kegiatan-info">
              <h3>{kegiatan.nama}</h3>
              <p>{kegiatan.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kegiatan;