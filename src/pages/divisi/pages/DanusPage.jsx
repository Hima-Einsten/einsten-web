import React from 'react';
import DivisiLayout from '../layout/DivisiLayout';

//import gambar divisi
//import danus1 from '../../../assets/divisi/danus/gambar.jpg';

const pageData = {
  title: 'Dana Usaha (Danus)',
  description: 'Divisi Dana Usaha (Danus) memiliki peran penting dalam menjaga stabilitas keuangan himpunan. Divisi ini secara kreatif mencari sumber pendanaan melalui kegiatan wirausaha, penjualan merchandise, dan sponsorship untuk mendukung program kerja himpunan.',
  kepalaDivisi: { nama: 'Theresa Angreeni', nim: '10600001' },
  anggota: [
    { nama: 'Anggota Danus 1', nim: '10600002' },
    { nama: 'Anggota Danus 2', nim: '10600003' },
    { nama: 'Anggota Danus 3', nim: '10600004' },
    { nama: 'Anggota Danus 4', nim: '10600005' },
    { nama: 'Anggota Danus 5', nim: '10600006' },
    { nama: 'Anggota Danus 6', nim: '10600007' },
    { nama: 'Anggota Danus 7', nim: '10600008' },
    { nama: 'Anggota Danus 8', nim: '10600009' },
    { nama: 'Anggota Danus 9', nim: '10600010' },
  ],
  programKerja: [
    'Penjualan Merchandise Himpunan (Jaket, Kaos, Gantungan Kunci)',
    'Membuka Stand Makanan dan Minuman di Acara Kampus',
    'Pencarian dan Pengelolaan Sponsorship untuk Kegiatan',
    'Membuat Katalog Produk Usaha',
  ],
  images: [
    '/assets/divisi/danus/gallery-1.jpg',
  ]
};

const DanusPage = () => {
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

export default DanusPage;
