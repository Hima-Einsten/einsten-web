import React, { useState, useEffect } from 'react';
import './BackgroundSlideshow.css';

const BackgroundSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) {
      return; // Tidak perlu slideshow jika hanya ada 1 atau 0 gambar
    }

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Ganti gambar setiap 5 detik

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) {
    // Fallback jika tidak ada gambar
    return <div className="slideshow-container fallback-bg"></div>;
  }

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
};

export default BackgroundSlideshow;
