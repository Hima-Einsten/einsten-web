import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/'); // Arahkan ke beranda setelah logout
    } catch (error) {
      console.error("Gagal logout:", error);
    }
  };

  return (
    <div className="page-content">
      <div className="dashboard-header">
        <h1 className="page-title">Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
      <p>Selamat datang, <strong>{currentUser?.email}</strong>!</p>
      <p>Ini adalah pusat kendali untuk website HIMA EINSTEN.COM. Dari sini Anda bisa mengelola konten website.</p>
      
      <div className="management-links">
        {/* Placeholder untuk link manajemen */}
        <div className="manage-card">
          <h3>Manage Alumni</h3>
          <p>Tambah, edit, atau hapus data alumni.</p>
        </div>
        <div className="manage-card">
          <h3>Manage Kegiatan</h3>
          <p>Perbarui daftar kegiatan dan galeri.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
