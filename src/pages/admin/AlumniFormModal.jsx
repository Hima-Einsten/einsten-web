import React, { useState, useEffect } from 'react';
import './AlumniFormModal.css';

const AlumniFormModal = ({ isOpen, onClose, onSave, alumnus }) => {
  const [formData, setFormData] = useState({
    nama: '',
    angkatan: '',
    perusahaan: '',
    posisi: ''
  });

  useEffect(() => {
    // Jika ada data alumnus (mode edit), isi form dengan data tersebut
    if (alumnus) {
      setFormData({
        nama: alumnus.nama || '',
        angkatan: alumnus.angkatan || '',
        perusahaan: alumnus.perusahaan || '',
        posisi: alumnus.posisi || ''
      });
    } else {
      // Jika tidak (mode tambah), kosongkan form
      setFormData({ nama: '', angkatan: '', perusahaan: '', posisi: '' });
    }
  }, [alumnus, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim data kembali ke parent untuk disimpan ke Firestore
    onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{alumnus ? 'Edit Data Alumni' : 'Tambah Alumni Baru'}</h2>
        <form onSubmit={handleSubmit}>
          <input name="nama" value={formData.nama} onChange={handleChange} placeholder="Nama Lengkap" required />
          <input name="angkatan" type="number" value={formData.angkatan} onChange={handleChange} placeholder="Tahun Angkatan" required />
          <input name="perusahaan" value={formData.perusahaan} onChange={handleChange} placeholder="Nama Perusahaan" />
          <input name="posisi" value={formData.posisi} onChange={handleChange} placeholder="Posisi/Jabatan" />
          <div className="modal-actions">
            <button type="button" onClick={onClose} className="cancel-button">Batal</button>
            <button type="submit" className="save-button">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AlumniFormModal;
