import React from 'react';
import { Lightbulb, Wrench, Users, GraduationCap } from 'lucide-react'; 


const pillarsData = [
  { 
    title: 'Ideation', 
    icon: Lightbulb, 
    bgColor: 'bg-yellow-100', 
    iconColor: 'text-orange-500', 
    desc: 'Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terarah.'
  },
  { 
    title: 'Creation', 
    icon: Wrench, 
    bgColor: 'bg-green-100', 
    iconColor: 'text-green-500', 
    desc: 'Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.'
  },
  { 
    title: 'Collaboration', 
    icon: Users, 
    bgColor: 'bg-blue-100', 
    iconColor: 'text-blue-500', 
    desc: 'Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif.'
  },
  { 
    title: 'Guidance & Support', 
    icon: GraduationCap, 
    bgColor: 'bg-pink-100', 
    iconColor: 'text-pink-500', 
    desc: 'Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.'
  },
];

const Pillars = () => {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-3xl font-extrabold text-blue-800 mb-4">Empat Pilar Ruang Ekspresi</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          komprehensif yang dirancang untuk mengembangkan potensi kreatif mahasiswa melalui pendekatan holistik
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {pillarsData.map((pillar) => (
            <div 
              key={pillar.title} 
              className={`p-8 rounded-2xl shadow-md transition duration-300 hover:shadow-lg ${pillar.bgColor} flex flex-col items-center justify-start`} 
              style={{ minHeight: '320px' }} 
            >
             
              <div className={`p-3 rounded-full mb-6 ${pillar.iconColor.replace('text', 'bg').replace('-500', '-200')}`}>
                 <pillar.icon className={`w-6 h-6 ${pillar.iconColor}`} />
              </div>
              
              <h3 className="text-lg font-bold mb-3 text-gray-800">{pillar.title}</h3>
              <p className="text-sm text-gray-700">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;