import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Beranda.css';

const Beranda = () => {
  const [kegiatanList, setKegiatanList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKegiatan = async () => {
      setLoading(true);
      const db = getFirestore();
      const kegiatanCol = collection(db, 'kegiatan');
      const q = query(kegiatanCol, orderBy('activityDate', 'desc'), limit(3));
      try {
        const kegiatanSnapshot = await getDocs(q);
        const fetchedKegiatan = kegiatanSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setKegiatanList(fetchedKegiatan);
      } catch (error) {
        console.error("Gagal mengambil data kegiatan: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchKegiatan();
  }, []);

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false
  };

  const testimonials = [
    {
      quote: "Selamat datang di HIMA EINSTEN.COM! Mari bersama-sama kita ciptakan inovasi dan prestasi yang membanggakan di bidang elektronika dan instrumentasi.",
      author: "Ketua HIMA EINSTEN.COM 2025"
    },
    {
      quote: "Kami mendukung penuh setiap kegiatan yang bertujuan untuk mengembangkan potensi akademik dan non-akademik mahasiswa. Teruslah berkarya dan jangan pernah berhenti belajar.",
      author: "Pembina HIMA EINSTEN.COM"
    },
    {
      quote: "Bergabung dengan HIMA adalah pengalaman yang luar biasa. Saya belajar banyak tentang kerja tim, kepemimpinan, dan tentu saja, memperdalam ilmu instrumentasi.",
      author: "Anggota HIMA Angkatan 2023"
    }
  ];

  return (
    <div className="beranda-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Selamat Datang di HIMA EINSTEN.COM</h1>
        <p>Himpunan Mahasiswa Elektronika Instrumentasi Politeknik Teknologi Nuklir</p>
        <Link to="/profil" className="cta-button">Pelajari Lebih Lanjut</Link>
      </section>

      {/* About Summary Section */}
      <section className="summary-section">
        <h2>Tentang Kami</h2>
        <p>
          HIMA EINSTEN.COM adalah wadah bagi para mahasiswa untuk berkembang, berkolaborasi, dan berinovasi di bidang elektronika dan instrumentasi.
        </p>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <h2>Apa Kata Teman - Teman Einsten.com??</h2>
        <Slider {...testimonialSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <p className="testimonial-author">- {testimonial.author} -</p>
            </div>
          ))}
        </Slider>
      </section>

      {/* Kegiatan Pratinjau Section */}
      <section className="kegiatan-pratinjau">
        <h2>Kegiatan Terbaru</h2>
        <div className="kegiatan-cards">
          {loading ? (
            <p>Memuat kegiatan...</p>
          ) : kegiatanList.length > 0 ? (
            kegiatanList.map(kegiatan => (
              <div className="card" key={kegiatan.id}>
                <div className="card-image">
                  <img src={kegiatan.imageUrl} alt="Kegiatan" />
                </div>
                <div className="card-content">
                  <h4>{kegiatan.title}</h4>
                  <p>{kegiatan.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Belum ada kegiatan yang ditampilkan.</p>
          )}
        </div>
        <Link to="/kegiatan" className="text-link">Lihat semua kegiatan...</Link>
      </section>

    </div>
  );
};

export default Beranda;
