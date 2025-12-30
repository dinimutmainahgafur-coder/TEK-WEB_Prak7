import React from 'react';
import Schedule from '../components/Schedule';

const Program = () => {
  return (
    <div>
      <section className="pt-32 pb-16 text-center">
        <h1 className="text-4xl font-bold text-blue-main">
          Program & Jadwal Kegiatan
        </h1>
        <p className="text-gray-600 mt-4">
          Rangkaian kegiatan terstruktur untuk pengembangan skill mahasiswa
        </p>
      </section>

      <Schedule />
    </div>
  );
};

export default Program;
