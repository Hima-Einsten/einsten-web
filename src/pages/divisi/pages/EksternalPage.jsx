import React from 'react';
import DivisiLayout from '../layout/DivisiLayout';

//import gambar divisi
//import eksternal1 from '../../../assets/divisi/eksternal/gambar.jpg';


const pageData = {
  title: 'Eksternal',
  description: 'Divisi Eksternal menjadi jembatan penghubung antara himpunan dengan pihak luar, seperti himpunan lain, alumni, perusahaan, dan masyarakat. Divisi ini bertanggung jawab membangun citra positif dan menjalin kerja sama yang strategis.',
  images: [
    '/assets/divisi/eksternal/gallery-1.jpg',
    '/assets/divisi/eksternal/gallery-2.jpg',
    '/assets/divisi/eksternal/gallery-3.jpg',
  ]
};

const EksternalPage = () => {
  return (
    <DivisiLayout images={pageData.images}>
      <h1>{pageData.title}</h1>
      <p>{pageData.description}</p>
    </DivisiLayout>
  );
};

export default EksternalPage;
