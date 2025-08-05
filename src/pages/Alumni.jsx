import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import './Alumni.css';

const Alumni = () => {
  const [alumniList, setAlumniList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const db = getFirestore();
        const alumniCol = collection(db, 'alumni');
        const alumniSnapshot = await getDocs(alumniCol);
        const fetchedAlumni = alumniSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setAlumniList(fetchedAlumni);
        setFilteredList(fetchedAlumni);
      } catch (err) {
        setError("Gagal mengambil data alumni. Silakan coba lagi nanti.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAlumni();
  }, []); // Array dependensi kosong, sehingga hanya berjalan sekali saat mount

  useEffect(() => {
    const results = alumniList.filter(alumni =>
      (alumni.nama?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      (alumni.perusahaan?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      (alumni.posisi?.toLowerCase() || '').includes(searchTerm.toLowerCase())
    );
    setFilteredList(results);
  }, [searchTerm, alumniList]);

  if (loading) {
    return <div className="page-content"><p>Loading data alumni...</p></div>;
  }

  if (error) {
    return <div className="page-content"><p className="error-message">{error}</p></div>;
  }

  return (
    <div className="page-content">
      <h1 className="page-title">Jejak Alumni</h1>
      <p className="page-intro">Temukan dan lihat jejak karir para alumni HIMA EINSTEN.COM.</p>

      <div className="search-container">
        <input
          type="text"
          placeholder="Cari nama, perusahaan, atau posisi..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="alumni-list">
        {filteredList.length > 0 ? (
          filteredList.map(alumni => (
            <div key={alumni.id} className="alumni-card">
              <h3>{alumni.nama}</h3>
              <p className="angkatan">Angkatan {alumni.angkatan}</p>
              <div className="pekerjaan-info">
                <p><strong>Perusahaan:</strong> {alumni.perusahaan}</p>
                <p><strong>Posisi:</strong> {alumni.posisi}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Tidak ada data alumni yang cocok dengan pencarian Anda.</p>
        )}
      </div>
    </div>
  );
};

export default Alumni;