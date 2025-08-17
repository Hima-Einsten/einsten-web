import React from 'react';
import DivisiLayout from '../layout/DivisiLayout';

//import gambar divisi
import ph1 from '../../../assets/divisi/pengurus-harian/sertijab.JPG';


// Data sekarang didefinisikan langsung di dalam komponen halaman
const pageData = {
  title: 'Pengurus Harian',
  description: 'Pengurus Harian (PH) adalah badan eksekutif utama himpunan yang bertanggung jawab atas koordinasi, pengawasan, dan pelaksanaan seluruh program kerja. PH memastikan semua divisi berjalan sinergis untuk mencapai visi dan misi himpunan.',
  ketuaHimpunan: { nama: 'Haidar Umar', nim: '10200001' },
  //wakilKetuaHimpunan: { nama: 'Nama Wakil Ketua Himpunan', nim: '10200002' },
  sekretaris1: { nama: 'Ni Mas aqila Najwan', nim: '10200003' },
  sekretaris2: { nama: 'Naila Qarirah', nim: '10200004' },
  Kesekretariatan: { nama: 'Rakan Ibrahim Widjisasono', nim: '10200005' },
  bendahara1: { nama: 'Fara Ulvia', nim: '10200004' },
  bendahara2: { nama: 'Relvina', nim: '10200006' },
  bendahara3: { nama: 'Muhammad Dzaki Mumtazi', nim: '10200007' },
  programKerja: [
    'Rapat Kerja dan Musyawarah Besar',
    'Mengawasi dan Mengevaluasi Kinerja Seluruh Divisi',
    'Menjalin Hubungan dengan Pihak Jurusan dan Fakultas',
    'Laporan Pertanggungjawaban Akhir Periode',
  ],
  images: [
    ph1,
  ]
};

const PengurusHarianPage = () => {
  return (
    <DivisiLayout images={pageData.images}>
      <h1>{pageData.title}</h1>
      <p>{pageData.description}</p>

      <div className="divisi-section">
        <h2>Struktur Divisi</h2>
        <h4>Ketua Himpunan</h4>
        <p>
          {pageData.ketuaHimpunan.nama}
          <span className="member-nim">{pageData.ketuaHimpunan.nim}</span>
        </p>
        {/* Hapus komen ini jika ingin menambahkan data wakil ketua himpunan
        <h4>Wakil Ketua Himpunan</h4>
        <p>
          {pageData.wakilKetuaHimpunan.nama}
          <span className="member-nim">{pageData.wakilKetuaHimpunan.nim}</span>
        </p> 
        */}
        <h4>Sekretaris Umum</h4>
        <p>
          {pageData.sekretaris1.nama}
          <span className="member-nim">{pageData.sekretaris1.nim}</span>
        </p>
        <h4>Sekretaris 2</h4>
        <p>
          {pageData.sekretaris2 ? pageData.sekretaris2.nama : 'Belum ada data'}
          <span className="member-nim">{pageData.sekretaris2 ? pageData.sekretaris2.nim : 'Belum ada data'}</span>
        </p>
        <h4>Kesekretariatan</h4>
        <p>
          {pageData.Kesekretariatan.nama}
          <span className="member-nim">{pageData.Kesekretariatan.nim}</span>
        </p>
        <h4>Bendahara Umum</h4>
        <p>
          {pageData.bendahara1.nama}
          <span className="member-nim">{pageData.bendahara1.nim}</span>
        </p>
        <h4>Bendahara 2</h4>
        <p>
          {pageData.bendahara2.nama}
          <span className="member-nim">{pageData.bendahara2.nim}</span>
        </p>
        <h4>Bendahara 3</h4>
        <p>
          {pageData.bendahara3.nama}
          <span className="member-nim">{pageData.bendahara3.nim}</span>
        </p>
      </div>

      <div className="divisi-section">
        <h2>Program Kerja Utama</h2>
        <ul className="proker-list">
          {pageData.programKerja.map((proker, index) => (
            <li key={index}>{proker}</li>
          ))}
        </ul>
      </div>
    </DivisiLayout>
  );
};

export default PengurusHarianPage;

