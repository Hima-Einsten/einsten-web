import React, { useState } from 'react';
import './Alumni.css';

// CONTOH DATA ALUMNI: Nantinya, ini akan datang dari database (Firebase Firestore)
const dataAlumni = [
  { id: 1, nama: "Budi Santoso", angkatan: 2018, perusahaan: "PT. Teknologi Maju", posisi: "Software Engineer" },
  { id: 2, nama: "Citra Lestari", angkatan: 2019, perusahaan: "Startup Inovasi", posisi: "Product Manager" },
  { id: 3, nama: "Agus Wijaya", angkatan: 2018, perusahaan: "BUMN Karya", posisi: "Electrical Engineer" },
  { id: 4, nama: "Dewi Anggraini", angkatan: 2020, perusahaan: "PT. Teknologi Maju", posisi: "Data Analyst" },
  { id: 5, nama: "Eko Prasetyo", angkatan: 2019, perusahaan: "Konsultan Digital", posisi: "IT Consultant" },
];

const Alumni = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter alumni berdasarkan nama, perusahaan, atau posisi
  const filteredAlumni = dataAlumni.filter(alumni =>
    alumni.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.perusahaan.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.posisi.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-content">
      <h1 className="page-title">Jejak Alumni</h1>
      <p className="page-intro">Temukan dan lihat jejak karir para alumni HIMA EINSTEN.COM.</p>

      <div className="search-container">
        <input
          type="text"
          placeholder="Cari nama, perusahaan, atau posisi..."
          className="search-bar"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="alumni-list">
        {filteredAlumni.map(alumni => (
          <div key={alumni.id} className="alumni-card">
            <h3>{alumni.nama}</h3>
            <p className="angkatan">Angkatan {alumni.angkatan}</p>
            <div className="pekerjaan-info">
              <p><strong>Perusahaan:</strong> {alumni.perusahaan}</p>
              <p><strong>Posisi:</strong> {alumni.posisi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alumni;
