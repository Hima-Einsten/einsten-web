import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import './ManageAlumni.css';

const ManageAlumni = () => {
  const [alumniList, setAlumniList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAlumni = async () => {
    setLoading(true);
    const db = getFirestore();
    const alumniCol = collection(db, 'alumni');
    const alumniSnapshot = await getDocs(alumniCol);
    const fetchedAlumni = alumniSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setAlumniList(fetchedAlumni);
    setLoading(false);
  };

  useEffect(() => {
    fetchAlumni();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data alumni ini?")) {
      try {
        const db = getFirestore();
        await deleteDoc(doc(db, "alumni", id));
        // Refresh data setelah menghapus
        fetchAlumni();
      } catch (error) {
        console.error("Error removing document: ", error);
        alert("Gagal menghapus data.");
      }
    }
  };

  if (loading) {
    return <div className="page-content"><p>Loading...</p></div>;
  }

  return (
    <div className="manage-container">
      <div className="manage-header">
        <h2>Manajemen Data Alumni</h2>
        <button className="add-button">Tambah Alumni Baru</button>
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
                  <button className="edit-button">Edit</button>
                  <button onClick={() => handleDelete(alumni.id)} className="delete-button">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAlumni;
