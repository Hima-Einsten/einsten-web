import React from 'react';
import DivisiLayout from '../layout/DivisiLayout';


//import gambar divisi
//import internal1 from '../../../assets/divisi/internal/gambar.jpg';


const pageData = {
  title: 'Internal',
  description: 'Divisi Internal berfokus pada pengembangan dan kesejahteraan anggota himpunan. Tugas utamanya adalah mempererat hubungan antar anggota, mengelola kaderisasi, serta mengadakan kegiatan yang meningkatkan rasa kekeluargaan dan solidaritas.',
  images: [
    '/assets/divisi/internal/gallery-1.jpg',
    '/assets/divisi/internal/gallery-2.jpg',
  ]
};

const InternalPage = () => {
  return (
    <DivisiLayout images={pageData.images}>
      <h1>{pageData.title}</h1>
      <p>{pageData.description}</p>
    </DivisiLayout>
  );
};

export default InternalPage;
