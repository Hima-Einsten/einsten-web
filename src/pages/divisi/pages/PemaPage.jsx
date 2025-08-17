import React from 'react';
import DivisiLayout from '../layout/DivisiLayout';

//import gambar
import pema1 from '../../../assets/divisi/pema/ngonten1.JPG';

const pageData = {
  title: 'Pengembangan Mahasiswa (Pema)',
  description: 'Divisi Pengembangan Mahasiswa (Pema) berfokus pada peningkatan soft skills dan hard skills anggota di luar bidang akademik. Pema menyelenggarakan seminar, pelatihan kepemimpinan, dan program pengembangan diri lainnya untuk menyiapkan mahasiswa menghadapi dunia kerja.',
  kepalaDivisi: { nama: 'Syahru Zaky Fadila Rahman', nim: '10700001' },
  anggota: [
    { nama: 'Anggota Pema 1', nim: '10700002' },
    { nama: 'Anggota Pema 2', nim: '10700003' },
    { nama: 'Anggota Pema 3', nim: '10700004' },
    { nama: 'Anggota Pema 4', nim: '10700005' },
    { nama: 'Anggota Pema 5', nim: '10700006' },
    { nama: 'Anggota Pema 6', nim: '10700007' },
    { nama: 'Anggota Pema 7', nim: '10700008' },
    { nama: 'Anggota Pema 8', nim: '10700009' },
    { nama: 'Anggota Pema 9', nim: '10700010' },
    { nama: 'Anggota Pema 10', nim: '10700011' },
    { nama: 'Anggota Pema 11', nim: '10700012' },
    { nama: 'Anggota Pema 12', nim: '10700013' },
  ],
  programKerja: [
    'Latihan Keterampilan Manajemen Mahasiswa (LKMM)',
    'Seminar Karir dan Dunia Kerja',
    'Pelatihan Public Speaking',
    'Program Mentoring Akademik',
  ],
  images: [
    pema1,
    
  ]
};

const PemaPage = () => {
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

export default PemaPage;
