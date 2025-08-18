import React, { useState, useEffect } from 'react';
import DivisiLayout from '../layout/DivisiLayout';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

//import gambar divisi
import internal1 from '../../../assets/divisi/internal/makrab24.JPG';
import internal2 from '../../../assets/divisi/internal/ngusik23.JPG';

const staticData = {
  description: 'Divisi Internal berfokus pada pengembangan dan kesejahteraan anggota himpunan. Tugas utamanya adalah mempererat hubungan antar anggota, mengelola kaderisasi, serta mengadakan kegiatan yang meningkatkan rasa kekeluargaan dan solidaritas.',
  images: [internal1, internal2]
};

const InternalPage = () => {
  const [divisionData, setDivisionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDivisionData = async () => {
      setLoading(true);
      const db = getFirestore();
      const docRef = doc(db, "divisi", "internal");
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDivisionData({
            ...docSnap.data(),
            members: docSnap.data().members || [],
            proker: docSnap.data().proker || [],
          });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDivisionData();
  }, []);

  const kepalaDivisi = divisionData?.members.find(m => m.position === 'Kepala Divisi');
  const anggotaBiasa = divisionData?.members.filter(m => m.position !== 'Kepala Divisi');

  if (loading) {
    return <p>Memuat data divisi...</p>;
  }

  if (!divisionData) {
    return <p>Data divisi tidak ditemukan.</p>;
  }

  return (
    <DivisiLayout images={staticData.images}>
      <h1>{divisionData.name || 'Internal'}</h1>
      <p>{staticData.description}</p>

      <div className="divisi-section">
        <h2>Struktur Divisi</h2>
        {kepalaDivisi && (
          <div className='kadiv-section'>
            <h4>Kepala Divisi</h4>
            <p>
              {kepalaDivisi.name}
              <span className="member-nim">{kepalaDivisi.nim}</span>
            </p>
          </div>
        )}
        <h4>Anggota Divisi</h4>
        <ul className="member-list">
          {anggotaBiasa.map((anggota, index) => (
            <li key={index}>
              {anggota.name}
              <span className="member-nim">{anggota.nim}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="divisi-section">
        <h2>Program Kerja</h2>
        <ul className="proker-list">
          {divisionData.proker.map((proker, index) => (
            <li key={index}>{proker}</li>
          ))}
        </ul>
      </div>
    </DivisiLayout>
  );
};

export default InternalPage;
