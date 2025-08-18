import React, { useState, useEffect } from 'react';
import DivisiLayout from '../layout/DivisiLayout';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

//import gambar divisi
import ph1 from '../../../assets/divisi/pengurus-harian/sertijab.JPG';

const staticData = {
  description: 'Pengurus Harian (PH) adalah badan eksekutif utama himpunan yang bertanggung jawab atas koordinasi, pengawasan, dan pelaksanaan seluruh program kerja. PH memastikan semua divisi berjalan sinergis untuk mencapai visi dan misi himpunan.',
  images: [ph1]
};

const PengurusHarianPage = () => {
  const [divisionData, setDivisionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDivisionData = async () => {
      setLoading(true);
      const db = getFirestore();
      const docRef = doc(db, "divisi", "pengurus-harian");
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

  const findMember = (position) => divisionData?.members.find(m => m.position === position);

  if (loading) {
    return <p>Memuat data divisi...</p>;
  }

  if (!divisionData) {
    return <p>Data divisi tidak ditemukan.</p>;
  }

  return (
    <DivisiLayout images={staticData.images}>
      <h1>{divisionData.name || 'Pengurus Harian'}</h1>
      <p>{staticData.description}</p>

      <div className="divisi-section">
        <h2>Struktur Divisi</h2>
        <div className="struktur-ph-grid">
          <div className="ketua-himpunan-container">
            <div className="member-card">
              <h4>Ketua Himpunan</h4>
              <p>{findMember('Ketua HIMA')?.name}<span className="member-nim">{findMember('Ketua HIMA')?.nim}</span></p>
            </div>
            {findMember('Wakil Ketua HIMA') && (
              <div className="member-card">
                <h4>Wakil Ketua Himpunan</h4>
                <p>{findMember('Wakil Ketua HIMA')?.name}<span className="member-nim">{findMember('Wakil Ketua HIMA')?.nim}</span></p>
              </div>
            )}
          </div>

          <div className="sekretaris-container">
            <h3>Sekretaris</h3>
            <div className="member-card">
              <h4>Sekretaris Umum</h4>
              <p>{findMember('Sekretaris Umum')?.name}<span className="member-nim">{findMember('Sekretaris Umum')?.nim}</span></p>
            </div>
            <div className="member-card">
              <h4>Sekretaris 2</h4>
              <p>{findMember('Sekretaris 2')?.name}<span className="member-nim">{findMember('Sekretaris 2')?.nim}</span></p>
            </div>
            <div className="member-card">
              <h4>Kesekretariatan</h4>
              <p>{findMember('Kesekretariatan')?.name}<span className="member-nim">{findMember('Kesekretariatan')?.nim}</span></p>
            </div>
          </div>

          <div className="bendahara-container">
            <h3>Bendahara</h3>
            <div className="member-card">
              <h4>Bendahara Umum</h4>
              <p>{findMember('Bendahara Umum')?.name}<span className="member-nim">{findMember('Bendahara Umum')?.nim}</span></p>
            </div>
            <div className="member-card">
              <h4>Bendahara 2</h4>
              <p>{findMember('Bendahara 2')?.name}<span className="member-nim">{findMember('Bendahara 2')?.nim}</span></p>
            </div>
            <div className="member-card">
              <h4>Bendahara 3</h4>
              <p>{findMember('Bendahara 3')?.name}<span className="member-nim">{findMember('Bendahara 3')?.nim}</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="divisi-section">
        <h2>Program Kerja Utama</h2>
        <ul className="proker-list">
          {divisionData.proker.map((proker, index) => (
            <li key={index}>{proker}</li>
          ))}
        </ul>
      </div>
    </DivisiLayout>
  );
};

export default PengurusHarianPage;

