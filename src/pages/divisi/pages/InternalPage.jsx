import React from 'react';
import DivisiLayout from '../layout/DivisiLayout';


//import gambar divisi
import internal1 from '../../../assets/divisi/internal/makrab24.JPG';
import internal2 from '../../../assets/divisi/internal/ngusik23.JPG';


const pageData = {
  title: 'Internal',
  description: 'Divisi Internal berfokus pada pengembangan dan kesejahteraan anggota himpunan. Tugas utamanya adalah mempererat hubungan antar anggota, mengelola kaderisasi, serta mengadakan kegiatan yang meningkatkan rasa kekeluargaan dan solidaritas.',
  kepalaDivisi: { nama: 'Muhammad Hafidz Karisma Putra', nim: '10400001' },
  anggota: [
    { nama: 'Anggota Internal 1', nim: '10400002' },
    { nama: 'Anggota Internal 2', nim: '10400003' },
    { nama: 'Anggota Internal 3', nim: '10400004' },
    { nama: 'Anggota Internal 4', nim: '10400005' },
    { nama: 'Anggota Internal 5', nim: '10400006' },
    { nama: 'Anggota Internal 6', nim: '10400007' },
    { nama: 'Anggota Internal 7', nim: '10400008' },
    { nama: 'Anggota Internal 8', nim: '10400009' },
    { nama: 'Anggota Internal 9', nim: '10400010' },
    { nama: 'Anggota Internal 10', nim: '10400011' },
  ],
  programKerja: [
    'Malam Keakraban (Makrab) Anggota',
    'Penyambutan Mahasiswa Baru',
    'Kegiatan Olahraga Bersama (Futsal, Badminton)',
    'Manajemen Database Anggota',
    'Perayaan Ulang Tahun Anggota',
  ],
  images: [
    internal1,
    internal2,
  ]
};

const InternalPage = () => {
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

export default InternalPage;
