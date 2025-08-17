import React from 'react';
import DivisiLayout from '../layout/DivisiLayout';

//import gambar
import pema1 from '../../../assets/divisi/pema/ngonten1.JPG';

const pageData = {
  title: 'Pengembangan Mahasiswa (Pema)',
  description: 'Divisi Pengembangan Mahasiswa (Pema) berfokus pada peningkatan soft skills dan hard skills anggota di luar bidang akademik. Pema menyelenggarakan seminar, pelatihan kepemimpinan, dan program pengembangan diri lainnya untuk menyiapkan mahasiswa menghadapi dunia kerja.',
  images: [
    pema1,
    
  ]
};

const PemaPage = () => {
  return (
    <DivisiLayout images={pageData.images}>
      <h1>{pageData.title}</h1>
      <p>{pageData.description}</p>
    </DivisiLayout>
  );
};

export default PemaPage;
