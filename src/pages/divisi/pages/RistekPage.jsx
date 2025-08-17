import React from 'react';
import DivisiLayout from '../layout/DivisiLayout';

//import gambar divisi
import ristek1 from '../../../assets/divisi/ristek/seminar24.JPG';
import ristek2 from '../../../assets/divisi/ristek/seminar1.JPG';


const pageData = {
  title: 'Riset dan Teknologi (Ristek)',
  description: 'Divisi Riset dan Teknologi (Ristek) adalah wadah bagi mahasiswa untuk mengembangkan minat dan bakat di bidang penelitian dan teknologi. Ristek mengadakan pelatihan, workshop, dan proyek-proyek inovatif untuk meningkatkan kompetensi akademik anggota.',
  kepalaDivisi: { nama: 'Nur Ihsanudin', nim: '022300013' },
  anggota: [
    { nama: 'Muhammad Izzatul Islam', nim: '10300002' },
    { nama: 'Muhammad Elwas Yusuf', nim: '10300003' },
    { nama: 'Evita Rahmadani', nim: '10300004' },
    { nama: 'Alfina Khairani', nim: '10300005' },
    { nama: 'Mirza Maulana Rusdi', nim: '10300006' },
    { nama: 'Anggota Ristek 6', nim: '10300007' },
    { nama: 'Anggota Ristek 7', nim: '10300008' },
    { nama: 'Anggota Ristek 8', nim: '10300009' },
    { nama: 'Anggota Ristek 9', nim: '10300010' },
    { nama: 'Anggota Ristek 10', nim: '10300011' },
    { nama: 'Anggota Ristek 11', nim: '10300012' },
  ],
  programKerja: [
    'Pelatihan Software Development (Web/Mobile)',
    'Workshop Internet of Things (IoT)',
    'Kelompok Studi Robotika',
    'Mengadakan Kompetisi Internal Coding',
    'Kunjungan Industri ke Perusahaan Teknologi',
  ],
  images: [
    ristek1,
    ristek2,
  ]
};

const RistekPage = () => {
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

export default RistekPage;
