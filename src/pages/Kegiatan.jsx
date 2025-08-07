import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';
import './Kegiatan.css';

const Kegiatan = () => {
  const [kegiatanList, setKegiatanList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKegiatan = async () => {
      setLoading(true);
      const db = getFirestore();
      const kegiatanCol = collection(db, 'kegiatan');
      // Mengurutkan berdasarkan tanggal kegiatan, yang terbaru di atas
      const q = query(kegiatanCol, orderBy('activityDate', 'desc'));
      const kegiatanSnapshot = await getDocs(q);
      const fetchedKegiatan = kegiatanSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setKegiatanList(fetchedKegiatan);
      setLoading(false);
    };

    fetchKegiatan().catch(error => {
      console.error("Gagal mengambil data kegiatan:", error);
      setLoading(false);
    });
  }, []);

  return (
    <div className="page-content">
      <h1 className="page-title">Kegiatan Himpunan</h1>
      <p className="page-intro">Berikut adalah beberapa kegiatan yang kami adakan untuk mengembangkan potensi mahasiswa.</p>
      
      {loading ? (
        <p>Loading kegiatan...</p>
      ) : kegiatanList.length === 0 ? (
        <p>Belum ada data kegiatan yang tersedia.</p>
      ) : (
        <div className="kegiatan-grid">
          {kegiatanList.map(kegiatan => (
            <div key={kegiatan.id} className="kegiatan-card">
              <img src={kegiatan.imageUrl} alt="Kegiatan" className="kegiatan-gambar" />
              <div className="kegiatan-info">
                <h3>{kegiatan.title}</h3>
                <span className="kegiatan-date">{new Date(kegiatan.activityDate).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <p>{kegiatan.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Kegiatan;
