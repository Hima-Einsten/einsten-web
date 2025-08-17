import React from 'react';
import DivisiLayout from '../layout/DivisiLayout';

//import gambar divisi
//import ph1 from '../../../assets/divisi/pengurus-harian/gambar.jpg';


// Data sekarang didefinisikan langsung di dalam komponen halaman
const pageData = {
  title: 'Pengurus Harian',
  description: 'Pengurus Harian (PH) adalah badan eksekutif utama himpunan yang bertanggung jawab atas koordinasi, pengawasan, dan pelaksanaan seluruh program kerja. PH memastikan semua divisi berjalan sinergis untuk mencapai visi dan misi himpunan.',
  images: [
    '/assets/divisi/pengurus-harian/gallery-1.jpg',
    '/assets/divisi/pengurus-harian/gallery-2.jpg',
    '/assets/divisi/pengurus-harian/gallery-3.jpg',
  ]
};

const PengurusHarianPage = () => {
  return (
    <DivisiLayout images={pageData.images}>
      <h1>{pageData.title}</h1>
      <p>{pageData.description}</p>
      {/* Anda bisa menambahkan JSX atau komponen lain di sini untuk variasi */}
    </DivisiLayout>
  );
};

export default PengurusHarianPage;

