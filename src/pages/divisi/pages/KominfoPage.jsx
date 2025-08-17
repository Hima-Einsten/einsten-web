import React from 'react';
import DivisiLayout from '../layout/DivisiLayout';

// Import gambar secara langsung. React akan menangani path yang benar.
import kominfoImage1 from '../../../assets/divisi/kominfo/F-13.jpg';
import kominfoImage2 from '../../../assets/divisi/kominfo/Linux_Penguin.jpg';

const pageData = {
  title: 'Komunikasi dan Informasi (Kominfo)',
  description: 'Divisi Komunikasi dan Informasi (Kominfo) bertanggung jawab atas penyebaran informasi dan publikasi seluruh kegiatan himpunan. Kominfo mengelola media sosial, website, dan mading untuk memastikan informasi tersampaikan secara efektif kepada seluruh anggota dan pihak luar.',
  kepalaDivisi: { nama :'Gilas Gethar Prawoto', nim : '10100001'},
  anggota: [
    { nama: 'Anggota Kominfo 1', nim: '10100001' },
    { nama: 'Anggota Kominfo 2', nim: '10100002' },
    { nama: 'Anggota Kominfo 3', nim: '10100003' },
    { nama: 'Anggota Kominfo 4', nim: '10100004' },
    { nama: 'Anggota Kominfo 5', nim: '10100005' },
    { nama: 'Anggota Kominfo 6', nim: '10100006' },
    { nama: 'Anggota Kominfo 7', nim: '10100007' },
    { nama: 'Anggota Kominfo 8', nim: '10100008' },
    { nama: 'Anggota Kominfo 9', nim: '10100009' },
    { nama: 'Anggota Kominfo 10', nim: '10100010' },
  ],
  programKerja: [
    'Mengelola dan Memperbarui Website Himpunan',
    'Publikasi Konten di Media Sosial (Instagram, etc)',
    'Membuat Desain untuk Publikasi Kegiatan',
    'Dokumentasi (Foto & Video) Setiap Acara',
    'Mengelola Majalah Dinding (Mading)',
  ],
  // Gunakan variabel hasil import, bukan string path
  images: [
    kominfoImage1,
    kominfoImage2,
  ]
};

const KominfoPage = () => {
  return (
    <DivisiLayout images={pageData.images}>
      <h1>{pageData.title}</h1>
      <p>{pageData.description}</p>

      <div className="divisi-section">
        <h2>Struktur Divisi</h2>
        <div className='kadiv-section'>
        <h4>Kepala Divisi</h4>
        <p>
          {pageData.kepalaDivisi.nama}
          <span className="member-nim">{pageData.kepalaDivisi.nim}</span>
        </p>
        </div>
        <h4>Anggota Divisi</h4>
        <ul className="member-list">
          {pageData.anggota.map((anggota, index) => (
            <li key={index}>
              {anggota.nama}
              <span className="member-nim">{anggota.nim}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="divisi-section">
        <h2>Program Kerja</h2>
        <ul className="proker-list">
          {pageData.programKerja.map((proker, index) => (
            <li key={index}>{proker}</li>
          ))}
        </ul>
      </div>
    </DivisiLayout>
  );
};

export default KominfoPage;
