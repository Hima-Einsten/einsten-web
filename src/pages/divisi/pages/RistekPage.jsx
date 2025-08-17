import React from 'react';
import DivisiLayout from '../layout/DivisiLayout';

//import gambar divisi
//import ristek1 from '../../../assets/divisi/ristek/gambar.jpg';


const pageData = {
  title: 'Riset dan Teknologi (Ristek)',
  description: 'Divisi Riset dan Teknologi (Ristek) adalah wadah bagi mahasiswa untuk mengembangkan minat dan bakat di bidang penelitian dan teknologi. Ristek mengadakan pelatihan, workshop, dan proyek-proyek inovatif untuk meningkatkan kompetensi akademik anggota.',
  images: [
    '/assets/divisi/ristek/gallery-1.jpg',
    '/assets/divisi/ristek/gallery-2.jpg',
    '/assets/divisi/ristek/gallery-3.jpg',
    '/assets/divisi/ristek/gallery-4.jpg',
  ]
};

const RistekPage = () => {
  return (
    <DivisiLayout images={pageData.images}>
      <h1>{pageData.title}</h1>
      <p>{pageData.description}</p>
    </DivisiLayout>
  );
};

export default RistekPage;
