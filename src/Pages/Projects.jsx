import React from 'react';
import Projects from '../components/Projects'; 

const ProjectsPage = () => {
  return (
    <div className="ProjectsPage">
      <h1 className="text-4xl font-bold text-center py-12 text-blue-main">Galeri Proyek Mahasiswa</h1>
      
      {/* Bagian Filter (UI/UX, Web Dev, Mobile Dev) dapat ditambahkan di sini */}
      
      <div className="container mx-auto max-w-7xl py-8 space-y-12">
        {/* Menampilkan komponen Projects berkali-kali untuk mengisi galeri */}
        <Projects /> 
        {/* Proyek lain dapat ditambahkan di sini */}
      </div>
    </div>
  );
};

export default ProjectsPage;