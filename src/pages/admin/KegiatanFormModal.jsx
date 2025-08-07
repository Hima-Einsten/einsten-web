import React, { useState, useEffect, useRef } from 'react';
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import './KegiatanFormModal.css';

// Fungsi untuk mendapatkan gambar yang sudah di-crop dalam format Base64
function getCroppedImg(image, crop) {
  const canvas = document.createElement('canvas');
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  );

  return new Promise((resolve) => {
    resolve(canvas.toDataURL('image/jpeg'));
  });
}


const KegiatanFormModal = ({ isOpen, onClose, onSave, kegiatan }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    activityDate: '',
  });
  const [imgSrc, setImgSrc] = useState('');
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState(null);
  const [error, setError] = useState('');
  const imgRef = useRef(null);

  const aspect = 16 / 9;

  useEffect(() => {
    if (isOpen) {
      if (kegiatan) {
        setFormData({
          title: kegiatan.title || '',
          description: kegiatan.description || '',
          activityDate: kegiatan.activityDate || '',
        });
        // Jika sedang edit, kita tidak memaksa crop ulang, tapi user bisa upload baru
        setImgSrc(kegiatan.imageUrl || '');
      } else {
        // Reset form saat menambah baru
        setFormData({ title: '', description: '', activityDate: '' });
        setImgSrc('');
        setCrop(undefined);
        setCompletedCrop(null);
      }
      setError('');
    }
  }, [kegiatan, isOpen]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Reset crop saat gambar baru dipilih
      const reader = new FileReader();
      reader.addEventListener('load', () => setImgSrc(reader.result.toString() || ''));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onImageLoad = (e) => {
    imgRef.current = e.currentTarget;
    const { width, height } = e.currentTarget;
    const newCrop = centerCrop(
      makeAspectCrop({ unit: '%', width: 90 }, aspect, width, height),
      width,
      height
    );
    setCrop(newCrop);
    setCompletedCrop(newCrop); // Set initial crop
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let finalImageUrl = kegiatan ? kegiatan.imageUrl : '';

    if (completedCrop && imgSrc && imgRef.current) {
        // Jika ada gambar baru yang di-crop, generate Base64 baru
        try {
            const base64Cropped = await getCroppedImg(imgRef.current, completedCrop);
            finalImageUrl = base64Cropped;
        } catch (err) {
            setError('Gagal memotong gambar. Silakan coba lagi.');
            return;
        }
    }

    if (!formData.title || !formData.description || !formData.activityDate || !finalImageUrl) {
      setError('Semua field harus diisi, termasuk gambar.');
      return;
    }
    
    // Validasi ukuran setelah di-crop
    const sizeInBytes = 4 * Math.ceil((finalImageUrl.length / 3)) * 0.5624896334383812;
    if (sizeInBytes > 750 * 1024) {
        setError('Ukuran gambar setelah dipotong terlalu besar (Maks ~750KB). Coba potong area yang lebih kecil.');
        return;
    }

    onSave({ ...formData, imageUrl: finalImageUrl });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{kegiatan ? 'Edit Kegiatan' : 'Tambah Kegiatan Baru'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Judul Kegiatan</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Deskripsi Kegiatan</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="5" required />
          </div>
          <div className="form-group">
            <label htmlFor="activityDate">Tanggal Kegiatan</label>
            <input type="date" id="activityDate" name="activityDate" value={formData.activityDate} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="image">Gambar Kegiatan (Rasio 16:9)</label>
            <input type="file" id="image" name="image" accept="image/png, image/jpeg" onChange={handleImageChange} />
          </div>

          {imgSrc && (
            <div className="crop-container">
              <ReactCrop
                crop={crop}
                onChange={c => setCrop(c)}
                onComplete={c => setCompletedCrop(c)}
                aspect={aspect}
              >
                <img ref={imgRef} src={imgSrc} onLoad={onImageLoad} alt="Crop me" />
              </ReactCrop>
            </div>
          )}
          
          {error && <p className="error-message">{error}</p>}

          <div className="modal-actions">
            <button type="submit" className="save-button">Simpan</button>
            <button type="button" onClick={onClose} className="cancel-button">Batal</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KegiatanFormModal;