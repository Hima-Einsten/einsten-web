import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Beranda.css';

// Import images for divisions
import imgPengurusHarian from '../assets/divisi/pengurus-harian/sertijab.JPG';
import imgInternal from '../assets/divisi/internal/makrab24.JPG';
import imgEksternal from '../assets/divisi/eksternal/egs.JPG';
import imgRistek from '../assets/divisi/ristek/seminar24.JPG';
import imgPema from '../assets/divisi/pema/ngonten1.JPG';
import imgKominfo from '../assets/divisi/kominfo/F-13.jpg';

// Data untuk pratinjau divisi di Beranda
const divisiPreviewData = [
  { 
    id: 'pengurus-harian', 
    name: 'Pengurus Harian', 
    description: 'Sebagai inti dari organisasi, Pengurus Harian bertanggung jawab penuh atas arah strategis dan koordinasi seluruh program kerja. Divisi ini memastikan semua kegiatan berjalan sinergis dan sesuai dengan visi misi HIMA.', 
    imageUrl: imgPengurusHarian,
    link: '/divisi/pengurus-harian'
  },
  { 
    id: 'internal', 
    name: 'Internal', 
    description: 'Divisi Internal berfokus pada penguatan rasa kekeluargaan dan solidaritas di antara seluruh anggota HIMA. Mereka merancang berbagai kegiatan yang bertujuan untuk meningkatkan interaksi dan keakraban internal.', 
    imageUrl: imgInternal,
    link: '/divisi/internal'
  },
  { 
    id: 'eksternal', 
    name: 'Eksternal', 
    description: 'Menjadi wajah HIMA di luar kampus, Divisi Eksternal bertugas membangun dan memelihara hubungan strategis dengan himpunan mahasiswa lain, alumni, institusi pendidikan, dan mitra industri untuk membuka peluang kolaborasi.', 
    imageUrl: imgEksternal,
    link: '/divisi/eksternal'
  },
  { 
    id: 'ristek', 
    name: 'Riset dan Teknologi', 
    description: 'Sebagai pusat inovasi, Ristek menjadi wadah bagi mahasiswa untuk mengeksplorasi, belajar, dan mengembangkan potensi di bidang riset dan teknologi. Divisi ini aktif menyelenggarakan workshop, seminar, dan proyek-proyek kreatif.', 
    imageUrl: imgRistek,
    link: '/divisi/ristek'
  },
  { 
    id: 'pema', 
    name: 'Pengembangan Mahasiswa', 
    description: 'Divisi Pema berdedikasi untuk meningkatkan kualitas sumber daya mahasiswa, baik dari segi akademis maupun non-akademis. Mereka merancang program pelatihan untuk mengasah soft skill dan hard skill yang relevan.', 
    imageUrl: imgPema,
    link: '/divisi/pema'
  },
  { 
    id: 'kominfo', 
    name: 'Komunikasi dan Informasi', 
    description: 'Kominfo adalah garda terdepan dalam penyebaran informasi dan manajemen citra HIMA. Divisi ini mengelola semua kanal media sosial, website, dan bertanggung jawab untuk memastikan semua informasi penting tersampaikan dengan baik.', 
    imageUrl: imgKominfo,
    link: '/divisi/kominfo'
  },
  { 
    id: 'danus', 
    name: 'Dana Usaha', 
    description: 'Menjadi tulang punggung finansial organisasi, Divisi Dana Usaha secara kreatif mencari dan mengelola sumber pendanaan. Mereka menjalankan berbagai inisiatif kewirausahaan untuk mendukung keberlangsungan seluruh program kerja HIMA.', 
    imageUrl: 'https://via.placeholder.com/400x225.png?text=Divisi+Danus',
    link: '/divisi/danus'
  },
];


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

      {/* Divisi Pratinjau Section */}
      <section className="divisi-pratinjau">
        <h2>Kenali Divisi Kami</h2>
        <div className="divisi-feature-list">
          {divisiPreviewData.map((divisi, index) => (
            <div className={`feature-row ${index % 2 === 0 ? 'feature-row-even' : 'feature-row-odd'}`} key={divisi.id}>
              <div className="feature-image">
                <img src={divisi.imageUrl} alt={divisi.name} />
              </div>
              <div className="feature-content">
                <h3>{divisi.name}</h3>
                <p>{divisi.description}</p>
                <Link to={divisi.link} className="text-link">Pelajari lebih lanjut...</Link>
              </div>
            </div>
          ))}
        </div>
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
