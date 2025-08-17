import React from 'react';
import BackgroundSlideshow from '../../../components/BackgroundSlideshow';
import './DivisiLayout.css';

const DivisiLayout = ({ images, children }) => {
  return (
    <>
      <BackgroundSlideshow images={images} />
      <div className="divisi-content-main">
        {children}
      </div>
    </>
  );
};

export default DivisiLayout;
