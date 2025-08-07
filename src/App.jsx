import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Beranda from './pages/Beranda.jsx';
import Profil from './pages/Profil.jsx';
import Kegiatan from './pages/Kegiatan.jsx';
import Informasi from './pages/Informasi.jsx';
import Alumni from './pages/Alumni.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import ManageAlumni from './pages/admin/ManageAlumni.jsx';
import ManageKegiatan from './pages/admin/ManageKegiatan.jsx';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <div className="content-wrap">
            <Routes>
              {/* Rute Publik */}
              <Route path="/" element={<Beranda />} />
              <Route path="/profil" element={<Profil />} />
              <Route path="/kegiatan" element={<Kegiatan />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/informasi" element={<Informasi />} />
              <Route path="/login" element={<Login />} />

              {/* Rute Admin yang Dilindungi */}
              <Route 
                path="/admin/dashboard" 
                element={<ProtectedRoute><Dashboard /></ProtectedRoute>} 
              />
              <Route 
                path="/admin/manage-alumni" 
                element={<ProtectedRoute><ManageAlumni /></ProtectedRoute>} 
              />
              <Route 
                path="/admin/manage-kegiatan" 
                element={<ProtectedRoute><ManageKegiatan /></ProtectedRoute>} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
