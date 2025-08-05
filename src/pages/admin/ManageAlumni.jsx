import React, { useState, useEffect, useCallback } from 'react'; // Import useCallback
import { getFirestore, collection, getDocs, doc, deleteDoc, addDoc, setDoc } from 'firebase/firestore';
import AlumniFormModal from './AlumniFormModal';
import './ManageAlumni.css';

const ManageAlumni = () => {
  const [alumniList, setAlumniList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAlumnus, setEditingAlumnus] = useState(null);

  const db = getFirestore();

  // Bungkus fetchAlumni dengan useCallback
  const fetchAlumni = useCallback(async () => {
    setLoading(true);
    const alumniCol = collection(db, 'alumni');
    const alumniSnapshot = await getDocs(alumniCol);
    const fetchedAlumni = alumniSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setAlumniList(fetchedAlumni);
    setLoading(false);
  }, [db]); // db dari getFirestore() stabil dan tidak akan menyebabkan re-render

  useEffect(() => {
    fetchAlumni();
  }, [fetchAlumni]); // Tambahkan fetchAlumni ke dependency array

  const handleAddNew = () => {
    setEditingAlumnus(null);
    setIsModalOpen(true);
  };

  const handleEdit = (alumnus) => {
    setEditingAlumnus(alumnus);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data alumni ini?")) {
      try {
        await deleteDoc(doc(db, "alumni", id));
        fetchAlumni();
      } catch (error) {
        alert("Gagal menghapus data.");
      }
    }
  };

  const handleSave = async (formData) => {
    try {
      if (editingAlumnus) {
        const docRef = doc(db, "alumni", editingAlumnus.id);
        await setDoc(docRef, formData, { merge: true });
      } else {
        await addDoc(collection(db, "alumni"), formData);
      }
      setIsModalOpen(false);
      fetchAlumni();
    } catch (error) {
      alert("Gagal menyimpan data.");
      console.error(error);
    }
  };

  if (loading) {
    return <div className="page-content"><p>Loading...</p></div>;
  }

  return (
    <>
      <AlumniFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        alumnus={editingAlumnus}
      />
      <div className="manage-container">
        <div className="manage-header">
          <h2>Manajemen Data Alumni</h2>
          <button onClick={handleAddNew} className="add-button">Tambah Alumni Baru</button>
        </div>
        <div className="table-responsive">
          <table className="alumni-table">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Angkatan</th>
                <th>Perusahaan</th>
                <th>Posisi</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {alumniList.map(alumni => (
                <tr key={alumni.id}>
                  <td>{alumni.nama}</td>
                  <td>{alumni.angkatan}</td>
                  <td>{alumni.perusahaan}</td>
                  <td>{alumni.posisi}</td>
                  <td>
                    <button onClick={() => handleEdit(alumni)} className="edit-button">Edit</button>
                    <button onClick={() => handleDelete(alumni.id)} className="delete-button">Hapus</button>
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

export default ManageAlumni;
