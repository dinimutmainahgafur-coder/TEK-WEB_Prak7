import React from 'react';
import { Lightbulb, Wrench, Users, GraduationCap } from 'lucide-react';

const pillarsData = [
  { 
    title: 'Ideation', 
    icon: Lightbulb, 
    bg: 'bg-yellow-50',
    iconBg: 'bg-yellow-200',
    iconColor: 'text-yellow-700',
    desc: 'Mengembangkan ide kreatif dan inovatif melalui brainstorming dan workshop ideation terarah.'
  },
  { 
    title: 'Creation', 
    icon: Wrench, 
    bg: 'bg-green-50',
    iconBg: 'bg-green-200',
    iconColor: 'text-green-700',
    desc: 'Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.'
  },
  { 
    title: 'Collaboration', 
    icon: Users, 
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-200',
    iconColor: 'text-blue-700',
    desc: 'Kolaborasi tim multidisiplin untuk menciptakan solusi yang berdampak.'
  },
  { 
    title: 'Guidance & Support', 
    icon: GraduationCap, 
    bg: 'bg-pink-50',
    iconBg: 'bg-pink-200',
    iconColor: 'text-pink-700',
    desc: 'Pendampingan mentor dan akses sumber belajar untuk pengembangan berkelanjutan.'
  },
];

const Pillars = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-white via-gray-50 to-blue-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Empat Pilar <span className="text-blue-600">Ruang Ekspresi</span>
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Pendekatan komprehensif untuk mengembangkan potensi kreatif mahasiswa
          melalui ekosistem kolaboratif dan berkelanjutan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {pillarsData.map((pillar) => (
            <div
              key={pillar.title}
              className={`group p-8 rounded-3xl ${pillar.bg} shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div
                className={`mx-auto mb-6 w-14 h-14 flex items-center justify-center rounded-2xl ${pillar.iconBg} group-hover:scale-110 transition`}
              >
                <pillar.icon className={`w-7 h-7 ${pillar.iconColor}`} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {pillar.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pillars;
