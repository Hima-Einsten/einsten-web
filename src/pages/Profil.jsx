import React from 'react';
import './Profil.css';

const Profil = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">Profil HIMA EINSTEN.COM</h1>

      <section className="profil-section">
        <h2>Deskripsi Himpunan</h2>
        <p>
          {/* GANTI DENGAN DESKRIPSI LENGKAP HIMPUNAN ANDA */}
          Ini adalah tempat untuk deskripsi lengkap mengenai Himpunan Mahasiswa Elektronika dan Instrumentasi. Jelaskan sejarah singkat, tujuan, dan apa yang membuat himpunan ini spesial.
        </p>
      </section>

      <section className="profil-section visi-misi">
        <div className="visi">
          <h2>Visi</h2>
          <p>
            {/* GANTI DENGAN VISI HIMPUNAN ANDA */}
            Menjadi wadah aspirasi dan pengembangan diri bagi mahasiswa Elektronika dan Instrumentasi untuk menciptakan insan yang unggul dan berdaya saing global.
          </p>
        </div>
        <div className="misi">
          <h2>Misi</h2>
          {/* GANTI DENGAN MISI HIMPUNAN ANDA */}
          <ul>
            <li>Menyelenggarakan kegiatan yang meningkatkan kompetensi akademik dan non-akademik.</li>
            <li>Membangun relasi yang kuat antara mahasiswa, alumni, dan industri.</li>
            <li>Mengoptimalkan potensi mahasiswa untuk berkontribusi kepada masyarakat.</li>
            <li>Menciptakan lingkungan organisasi yang suportif dan profesional.</li>
          </ul>
        </div>
      </section>

      <section className="profil-section">
        <h2>Struktur Organisasi</h2>
        <div className="struktur-placeholder">
          {/* GANTI DENGAN GAMBAR STRUKTUR ORGANISASI ATAU DAFTAR PENGURUS */}
          <p>Di sini Anda bisa menempatkan gambar bagan struktur organisasi.</p>
          <p>Atau, Anda bisa membuat daftar nama pengurus inti beserta jabatannya.</p>
        </div>
      </section>
    </div>
  );
};

export default Profil;