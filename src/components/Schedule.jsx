import React from 'react';
import { FaClock, FaCommentDots, FaBookOpen, FaCode, FaUserTie } from 'react-icons/fa';

const programDetails = [
  { title: 'Career Talks', description: 'Sesi sharing dari praktisi industri dan alumni sukses', bgColor: 'bg-career-talks-bg', icon: <FaCommentDots /> },
  { title: 'Extra Classes', description: 'Kelas tambahan skill development dan workshop teknis', bgColor: 'bg-extra-classes-bg', icon: <FaBookOpen /> },
  { title: 'Project Work', description: 'Mengerjakan project nyata dengan bimbingan mentor', bgColor: 'bg-project-work-bg', icon: <FaCode /> },
  { title: 'Mentoring', description: 'Sesi konsultasi personal dengan mentor berpengalaman', bgColor: 'bg-mentoring-bg', icon: <FaUserTie /> },
];

const Schedule = () => {
  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-main">Jadwal & Program Kegiatan</h2>
        <p className="text-gray-600 mt-2">
          Program terstruktur yang dirancang untuk mengoptimalkan pembelajaran dan pengembangan skill Setiap Sabtu
        </p>
        <div className="inline-flex items-center mt-6 text-lg font-semibold text-blue-main border-b-2 border-blue-main/50">
          <FaClock className="mr-2" /> Setiap Sabtu
        </div>
      </div>

      {/* Sesi Pagi & Sore */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 p-8 shadow-2xl rounded-2xl bg-white">
        <div className="p-6 rounded-xl bg-gradient-to-r from-yellow-50 to-green-50 border border-yellow-pilar">
          <h3 className="text-xl font-bold mb-3 flex items-center">
            <FaClock className="mr-2 text-blue-main" /> Sesi Pagi
          </h3>
          <p className="font-semibold text-gray-800 mb-2">09.00 - 12.00 WIB</p>
          <p className="text-gray-700 text-sm">
            Workshop, Career Talks, dan Extra Classes Intensif
          </p>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-r from-green-50 to-yellow-50 border border-green-pilar">
          <h3 className="text-xl font-bold mb-3 flex items-center">
            <FaClock className="mr-2 text-blue-main" /> Sesi Sore
          </h3>
          <p className="font-semibold text-gray-800 mb-2">16.00 - 19.00 WIB</p>
          <p className="text-gray-700 text-sm">
            Project Work, Mentoring, dan Collaboration Session
          </p>
        </div>
      </div>
      
      {/* Detail Program */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {programDetails.map((program) => (
          <div key={program.title} className={`${program.bgColor} p-6 rounded-2xl shadow-md min-h-[180px]`}>
            <div className="text-4xl mb-3 text-blue-main">{program.icon}</div>
            <h4 className="font-bold text-gray-900 mb-1">{program.title}</h4>
            <p className="text-sm text-gray-700">{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;