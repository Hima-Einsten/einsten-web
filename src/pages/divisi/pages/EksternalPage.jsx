import React from 'react';
import DivisiLayout from '../layout/DivisiLayout';

//import gambar divisi
import eksternal1 from '../../../assets/divisi/eksternal/egs.JPG';


const pageData = {
  title: 'Eksternal',
  description: 'Divisi Eksternal menjadi jembatan penghubung antara himpunan dengan pihak luar, seperti himpunan lain, alumni, perusahaan, dan masyarakat. Divisi ini bertanggung jawab membangun citra positif dan menjalin kerja sama yang strategis.',
  kepalaDivisi: { nama: 'Muhammad Meisandi Baihaqi', nim: '10500001' },
  anggota: [
    { nama: 'Anggota Eksternal 1', nim: '10500002' },
    { nama: 'Anggota Eksternal 2', nim: '10500003' },
    { nama: 'Anggota Eksternal 3', nim: '10500004' },
    { nama: 'Anggota Eksternal 4', nim: '10500005' },
    { nama: 'Anggota Eksternal 5', nim: '10500006' },
    { nama: 'Anggota Eksternal 6', nim: '10500007' },
    { nama: 'Anggota Eksternal 7', nim: '10500008' },
    { nama: 'Anggota Eksternal 8', nim: '10500009' },
    { nama: 'Anggota Eksternal 9', nim: '10500010' },
  ],
  programKerja: [
    'Studi Banding ke Himpunan Universitas Lain',
    'Menjalin Kontak dengan Perusahaan untuk Sponsorship',
    'Mengelola Database Alumni',
    'Pengabdian Masyarakat',
    'Menjadi Delegasi dalam Forum Mahasiswa',
  ],
  images: [
    eksternal1,
  ]
};

const EksternalPage = () => {
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

export default EksternalPage;
