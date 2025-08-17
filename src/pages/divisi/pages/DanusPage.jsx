import React from 'react';
import DivisiLayout from '../layout/DivisiLayout';

//import gambar divisi
//import danus1 from '../../../assets/divisi/danus/gambar.jpg';

const pageData = {
  title: 'Dana Usaha (Danus)',
  description: 'Divisi Dana Usaha (Danus) memiliki peran penting dalam menjaga stabilitas keuangan himpunan. Divisi ini secara kreatif mencari sumber pendanaan melalui kegiatan wirausaha, penjualan merchandise, dan sponsorship untuk mendukung program kerja himpunan.',
  images: [
    '/assets/divisi/danus/gallery-1.jpg',
  ]
};

const DanusPage = () => {
  return (
    <DivisiLayout images={pageData.images}>
      <h1>{pageData.title}</h1>
      <p>{pageData.description}</p>
    </DivisiLayout>
  );
};

export default DanusPage;
