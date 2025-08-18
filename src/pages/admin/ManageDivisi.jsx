import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, doc, setDoc } from 'firebase/firestore';
import './ManageDivisi.css';

// Definisikan pilihan jabatan untuk setiap divisi
const positionOptions = {
  'pengurus-harian': ['Ketua HIMA', 'Wakil Ketua HIMA', 'Sekretaris Umum', 'Sekretaris 2', 'Kesekretariatan', 'Bendahara Umum', 'Bendahara 2', 'Bendahara 3'],
  'internal': ['Kepala Divisi', 'Anggota'],
  'eksternal': ['Kepala Divisi', 'Anggota'],
  'ristek': ['Kepala Divisi', 'Anggota'],
  'pema': ['Kepala Divisi', 'Anggota'],
  'kominfo': ['Kepala Divisi', 'Anggota'],
  'danus': ['Kepala Divisi', 'Anggota'],
};

const ManageDivisi = () => {
  const [allDivisions, setAllDivisions] = useState([]);
  const [selectedDivisionId, setSelectedDivisionId] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchDivisions = async () => {
      setLoading(true);
      try {
        const db = getFirestore();
        const divisionsCol = collection(db, 'divisi');
        const divisionsSnapshot = await getDocs(divisionsCol);
        const divisionsList = divisionsSnapshot.docs.map(d => ({ 
          id: d.id, 
          ...d.data(),
          proker: Array.isArray(d.data().proker) ? d.data().proker : [] 
        }));
        divisionsList.sort((a, b) => (a.order || 99) - (b.order || 99));
        setAllDivisions(divisionsList);
        if (divisionsList.length > 0) {
          setSelectedDivisionId(divisionsList[0].id);
        }
        setError(null);
      } catch (err) {
        console.error("Error fetching divisions:", err);
        setError("Gagal memuat data divisi.");
      } finally {
        setLoading(false);
      }
    };

    fetchDivisions();
  }, []);

  const getDivisionIndex = () => allDivisions.findIndex(d => d.id === selectedDivisionId);

  const handleMemberChange = (memberIndex, field, value) => {
    const newDivisions = [...allDivisions];
    newDivisions[getDivisionIndex()].members[memberIndex][field] = value;
    setAllDivisions(newDivisions);
  };

  const addMember = () => {
    const newDivisions = [...allDivisions];
    const defaultPosition = positionOptions[selectedDivisionId]?.[1] || 'Anggota';
    newDivisions[getDivisionIndex()].members.push({ name: '', nim: '', position: defaultPosition });
    setAllDivisions(newDivisions);
  };

  const removeMember = (memberIndex) => {
    const newDivisions = [...allDivisions];
    newDivisions[getDivisionIndex()].members.splice(memberIndex, 1);
    setAllDivisions(newDivisions);
  };

  const handleProkerChange = (prokerIndex, value) => {
    const newDivisions = [...allDivisions];
    newDivisions[getDivisionIndex()].proker[prokerIndex] = value;
    setAllDivisions(newDivisions);
  };

  const addProker = () => {
    const newDivisions = [...allDivisions];
    newDivisions[getDivisionIndex()].proker.push('');
    setAllDivisions(newDivisions);
  };

  const removeProker = (prokerIndex) => {
    const newDivisions = [...allDivisions];
    newDivisions[getDivisionIndex()].proker.splice(prokerIndex, 1);
    setAllDivisions(newDivisions);
  };

  const handleSave = async () => {
    if (!selectedDivisionId) {
      alert("Pilih divisi terlebih dahulu!");
      return;
    }
    setSaving(true);
    setError(null);
    const db = getFirestore();
    const divisionToSave = allDivisions.find(d => d.id === selectedDivisionId);
    const { id, ...divisionData } = divisionToSave;
    const divisionRef = doc(db, 'divisi', id);

    try {
      await setDoc(divisionRef, divisionData);
      alert(`Data untuk divisi ${divisionToSave.name} berhasil disimpan!`);
    } catch (err) {
      console.error("Error saving data:", err);
      setError("Gagal menyimpan data. Silakan coba lagi.");
      alert('Gagal menyimpan data!');
    } finally {
      setSaving(false);
    }
  };

  const selectedDivision = allDivisions.find(d => d.id === selectedDivisionId);

  if (loading) return <p className="loading-message">Memuat data divisi...</p>;

  return (
    <div className="manage-divisi-container">
      <div className="manage-header">
        <h2>Manajemen Divisi</h2>
        <button onClick={handleSave} disabled={saving || !selectedDivisionId} className="save-button">
          {saving ? 'Menyimpan...' : `Simpan Divisi ${selectedDivision?.name || ''}`}
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      <div className="division-card-selector">
        {allDivisions.map(division => (
          <div 
            key={division.id} 
            className={`division-select-card ${selectedDivisionId === division.id ? 'active' : ''}`}
            onClick={() => setSelectedDivisionId(division.id)}
          >
            {division.name}
          </div>
        ))}
      </div>

      {selectedDivision && (
        <div className="card-container">
          {/* Card untuk Anggota */}
          <div className="division-card">
            <h3>Anggota Divisi</h3>
            <div className="members-table">
              {selectedDivision.members.map((member, memIndex) => (
                <div key={memIndex} className="member-row">
                  <input type="text" placeholder="Nama Anggota" value={member.name} onChange={(e) => handleMemberChange(memIndex, 'name', e.target.value)} />
                  <input type="text" placeholder="NIM" value={member.nim} onChange={(e) => handleMemberChange(memIndex, 'nim', e.target.value)} />
                  <select value={member.position} onChange={(e) => handleMemberChange(memIndex, 'position', e.target.value)}>
                    {(positionOptions[selectedDivision.id] || ['Anggota']).map(pos => (<option key={pos} value={pos}>{pos}</option>))}
                  </select>
                  <button onClick={() => removeMember(memIndex)} className="remove-member-btn">Hapus</button>
                </div>
              ))}
            </div>
            <button onClick={addMember} className="add-member-btn">+ Tambah Anggota</button>
          </div>

          {/* Card untuk Program Kerja */}
          <div className="division-card">
            <h3>Program Kerja</h3>
            <div className="proker-list-edit">
              {selectedDivision.proker.map((proker, prokerIndex) => (
                <div key={prokerIndex} className="proker-row">
                  <input type="text" placeholder="Nama Program Kerja" value={proker} onChange={(e) => handleProkerChange(prokerIndex, e.target.value)} />
                  <button onClick={() => removeProker(prokerIndex)} className="remove-member-btn">Hapus</button>
                </div>
              ))}
            </div>
            <button onClick={addProker} className="add-member-btn">+ Tambah Proker</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageDivisi;
