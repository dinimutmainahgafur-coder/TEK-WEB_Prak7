import React from 'react';
import { Clock, Calendar, MessageSquare, BookOpen, Code, UserCheck } from 'lucide-react';

const programDetails = [
  { title: 'Career Talks', icon: MessageSquare, iconColor: 'text-orange-600', bgColor: 'bg-yellow-100', desc: 'Sesi sharing dari praktisi industri dan alumni sukses' },
  { title: 'Extra Classes', icon: BookOpen, iconColor: 'text-green-600', bgColor: 'bg-green-100', desc: 'Kelas tambahan skill development dan workshop teknis' },
  { title: 'Project Work', icon: Code, iconColor: 'text-blue-600', bgColor: 'bg-blue-100', desc: 'Mengerjakan project nyata dengan bimbingan mentor' },
  { title: 'Mentoring', icon: UserCheck, iconColor: 'text-pink-600', bgColor: 'bg-pink-100', desc: 'Sesi konsultasi personal dengan mentor berpengalaman' },
];

const Schedule = () => {
  return (
    <section className="py-20 bg-white" id="program">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-blue-800 mb-4">Jadwal & Program Kegiatan</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Program terstruktur yang dirancang untuk mengoptimalkan pembelajaran dan pengembangan skill Setiap Sabtu
        </p>

       
        <div className="flex items-center justify-center text-blue-600 font-semibold mb-8">
            <Calendar className="w-5 h-5 mr-2" />
            <span>Setiap Sabtu</span>
        </div>
        
       
        <div className="flex justify-center mb-16 shadow-xl rounded-2xl p-6 bg-white border border-gray-100">
            
           
            <div className="flex items-center p-6 rounded-xl w-full max-w-md mr-4 bg-gradient-to-r from-yellow-50 to-green-50">
              <Clock className="w-6 h-6 text-blue-600 mr-4" />
              <div className="text-left">
                <h4 className="font-bold text-lg text-gray-800">Sesi Pagi</h4>
                <p className="text-sm font-semibold text-gray-700">09.00 - 12.00 WIB</p>
                <p className="text-xs text-gray-600 mt-1">Workshop, Career Talks, dan Extra Classes Intensif</p>
              </div>
            </div>

           
            <div className="flex items-center p-6 rounded-xl w-full max-w-md ml-4 bg-gradient-to-r from-green-50 to-blue-50">
              <Clock className="w-6 h-6 text-blue-600 mr-4" />
              <div className="text-left">
                <h4 className="font-bold text-lg text-gray-800">Sesi Sore</h4>
                <p className="text-sm font-semibold text-gray-700">16.00 - 19.00 WIB</p>
                <p className="text-xs text-gray-600 mt-1">Project Work, Mentoring, dan Collaboration Session</p>
              </div>
            </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {programDetails.map((program) => (
            <div 
              key={program.title} 
              className={`relative p-8 rounded-xl shadow-lg text-left transition duration-300 hover:shadow-xl ${program.bgColor}`}
              style={{ minHeight: '180px' }} 
            >
              
              <program.icon className={`w-8 h-8 mb-4 ${program.iconColor} absolute top-4 left-4`} />
              
              <h4 className="font-bold mb-2 text-gray-800 mt-8">{program.title}</h4>
              <p className="text-sm text-gray-700">{program.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;