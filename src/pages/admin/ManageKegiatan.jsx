import React, { useState, useEffect, useCallback } from 'react';
import { getFirestore, collection, getDocs, doc, deleteDoc, addDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import './ManageKegiatan.css';
import KegiatanFormModal from './KegiatanFormModal'; // Kita akan buat komponen ini

const ManageKegiatan = () => {
  const [kegiatanList, setKegiatanList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingKegiatan, setEditingKegiatan] = useState(null);

  const db = getFirestore();

  const fetchKegiatan = useCallback(async () => {
    setLoading(true);
    const kegiatanCol = collection(db, 'kegiatan');
    const kegiatanSnapshot = await getDocs(kegiatanCol);
    const fetchedKegiatan = kegiatanSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    // Urutkan berdasarkan tanggal kegiatan terbaru
    fetchedKegiatan.sort((a, b) => (b.activityDate > a.activityDate) ? 1 : -1);
    setKegiatanList(fetchedKegiatan);
    setLoading(false);
  }, [db]);

  useEffect(() => {
    fetchKegiatan();
  }, [fetchKegiatan]);

  const handleAddNew = () => {
    setEditingKegiatan(null);
    setIsModalOpen(true);
  };

  const handleEdit = (kegiatan) => {
    setEditingKegiatan(kegiatan);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data kegiatan ini?")) {
      try {
        await deleteDoc(doc(db, "kegiatan", id));
        fetchKegiatan();
      } catch (error) {
        alert("Gagal menghapus data: " + error.message);
      }
    }
  };

  const handleSave = async (formData) => {
    try {
      const dataToSave = {
        ...formData,
        createdAt: serverTimestamp()
      };

      if (editingKegiatan) {
        const docRef = doc(db, "kegiatan", editingKegiatan.id);
        await setDoc(docRef, dataToSave, { merge: true });
      } else {
        await addDoc(collection(db, "kegiatan"), dataToSave);
      }
      setIsModalOpen(false);
      fetchKegiatan();
    } catch (error) {
      alert("Gagal menyimpan data: " + error.message);
      console.error(error);
    }
  };

  if (loading) {
    return <div className="page-content"><p>Loading...</p></div>;
  }

  return (
    <>
      <KegiatanFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        kegiatan={editingKegiatan}
      />
      <div className="manage-container">
        <div className="manage-header">
          <h2>Manajemen Data Kegiatan</h2>
          <button onClick={handleAddNew} className="add-button">Tambah Kegiatan Baru</button>
        </div>
        <div className="table-responsive">
          <table className="kegiatan-table">
            <thead>
              <tr>
                <th>Gambar</th>
                <th>Judul</th>
                <th>Deskripsi</th>
                <th>Tanggal Kegiatan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {kegiatanList.map(kegiatan => (
                <tr key={kegiatan.id}>
                  <td>
                    {kegiatan.imageUrl && <img src={kegiatan.imageUrl} alt="Preview" className="kegiatan-preview-img"/>}
                  </td>
                  <td>{kegiatan.title}</td>
                  <td className="deskripsi-cell">{kegiatan.description}</td>
                  <td>{kegiatan.activityDate}</td>
                  <td>
                    <button onClick={() => handleEdit(kegiatan)} className="edit-button">Edit</button>
                    <button onClick={() => handleDelete(kegiatan.id)} className="delete-button">Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageKegiatan;
