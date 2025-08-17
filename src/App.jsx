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
import PengurusHarianPage from './pages/divisi/pages/PengurusHarianPage.jsx';
import InternalPage from './pages/divisi/pages/InternalPage.jsx';
import EksternalPage from './pages/divisi/pages/EksternalPage.jsx';
import RistekPage from './pages/divisi/pages/RistekPage.jsx';
import PemaPage from './pages/divisi/pages/PemaPage.jsx';
import KominfoPage from './pages/divisi/pages/KominfoPage.jsx';
import DanusPage from './pages/divisi/pages/DanusPage.jsx';
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
              
              {/* Rute Divisi */}
              <Route path="/divisi/pengurus-harian" element={<PengurusHarianPage />} />
              <Route path="/divisi/internal" element={<InternalPage />} />
              <Route path="/divisi/eksternal" element={<EksternalPage />} />
              <Route path="/divisi/ristek" element={<RistekPage />} />
              <Route path="/divisi/pema" element={<PemaPage />} />
              <Route path="/divisi/kominfo" element={<KominfoPage />} />
              <Route path="/divisi/danus" element={<DanusPage />} />

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
