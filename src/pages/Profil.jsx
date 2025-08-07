import React from 'react';
import './Profil.css';

const Profil = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">Profil HIMA EINSTEN.COM</h1>

      <section className="profil-section">
        <h2>Deskripsi Himpunan</h2>
        <p>
          Himpunan Mahasiswa Elektronika Instrumentasi (Hima Einsten.com) adalah organisasi kemahasiswaan yang menaungi mahasiswa Program Studi Elektonika 
          Instrumentasi di Politeknik Teknologi Nuklir Indonesia. Hima Einsten.com bertujuan untuk menjadi wadak komunikasi, pengembangan potensi, dan penghubung mahasiswa
          Elektronika Instrumentasi.
        </p>
      </section>

      <section className="profil-section visi-misi">
        <div className="visi">
          <h2>Visi</h2>
          <p>
            Menjadikan Hima Einsten.com sebagai wadah Mahasiswa Elektronika Instrumentasi untuk berkembang secara
            Progresif, Inovatif, dan Berdaya Saing Tinggi dengan Menjunjung Asas Kekeluargaan dan Mengedepankan Profesionalitas.
          </p>
        </div>
        <div className="misi">
          <h2>Misi</h2>
          <ul>
            <li>Memperkuat koordinasi, kerjasama, dan kolaborasi yang terjalin di Hima Einsten.com baik antar internal maupun dengan eksternal organisasi.</li>
            <li>Melaksanakan dan mengoptimalkan program kerja yang sudah terlaksanan dan menciptakan inovasi baru yang adaktif untuk memajukan Hima EInsten.com.</li>
            <li>Mengembangkan potensi akademik dan non-akademik yang dimiliki mahasiswa Elektronika Instrumentasi.</li>
            <li>Menerapkan prinsip kerja yang mengedepankan profesionalitas namun tetap menjunjung asas kekeluargaan.</li>
            <li>Menciptakan anggota Hima Einsten.com yang memiliki karakter yang bertanggung jawab dan konsisten dalam berorganisasi.</li>
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