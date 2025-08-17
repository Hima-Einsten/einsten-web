import React from 'react';
import DivisiLayout from '../layout/DivisiLayout';

// Import gambar secara langsung. React akan menangani path yang benar.
import kominfoImage1 from '../../../assets/divisi/kominfo/F-13.jpg';
import kominfoImage2 from '../../../assets/divisi/kominfo/Linux_Penguin.jpg';

const pageData = {
  title: 'Komunikasi dan Informasi (Kominfo)',
  description: 'Divisi Komunikasi dan Informasi (Kominfo) bertanggung jawab atas penyebaran informasi dan publikasi seluruh kegiatan himpunan. Kominfo mengelola media sosial, website, dan mading untuk memastikan informasi tersampaikan secara efektif kepada seluruh anggota dan pihak luar.',
  // Gunakan variabel hasil import, bukan string path
  images: [
    kominfoImage1,
    kominfoImage2,
  ]
};

const KominfoPage = () => {
  return (
    <DivisiLayout images={pageData.images}>
      <h1>{pageData.title}</h1>
      <p>{pageData.description}</p>
    </DivisiLayout>
  );
};

export default KominfoPage;
