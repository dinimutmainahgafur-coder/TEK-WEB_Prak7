import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
const Testimonial = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 min-h-[250px] flex flex-col justify-between">
      <div className="flex items-center space-x-4 mb-4">
        <FaUserCircle
          className="w-16 h-16 text-gray-400 object-cover ring-2 ring-blue-main" 
        />
        <div>
          <h4 className="font-bold text-lg text-gray-900">Budi Santoso</h4>
          <p className="text-sm text-blue-main">Mahasiswa Sistem Informasi</p>
        </div>
      </div>
      <p className="text-gray-600 italic">
        "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain."
      </p>
    </div>
  );
};

export default Testimonial;