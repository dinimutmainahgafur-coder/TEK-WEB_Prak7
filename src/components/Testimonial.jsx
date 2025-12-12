import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  { quote: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain", name: "Budi Santoso", role: "Mahasiswa Sistem Informasi", avatarColor: 'bg-blue-500' },
  { quote: "Program mentoringnya sangat membantu, ide saya langsung bisa diwujudkan menjadi project nyata.", name: "Siti Aminah", role: "Mahasiswa Desain Komunikasi Visual", avatarColor: 'bg-green-500' },
  { quote: "Saya mendapatkan akses ke tools premium yang tidak tersedia di kampus, sangat bermanfaat untuk skill development.", name: "Adi Nugroho", role: "Mahasiswa Teknik Informatika", avatarColor: 'bg-yellow-500' },
  { quote: "Lingkungan yang sangat suportif. Saya merasa lebih termotivasi untuk mencoba hal baru dan berinovasi.", name: "Rina Dewi", role: "Mahasiswa Ilmu Komunikasi", avatarColor: 'bg-red-500' },
  { quote: "Career talks dengan praktisi membuat saya paham betul kebutuhan industri saat ini.", name: "Fajar Setiawan", role: "Mahasiswa Akuntansi", avatarColor: 'bg-indigo-500' },
  { quote: "Proyek kolaborasi di Ruang Ekspresi adalah portofolio terbaik yang saya punya saat ini.", name: "Maya Sari", role: "Mahasiswa Manajemen", avatarColor: 'bg-pink-500' },
];

const Testimonial = () => {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-3xl font-extrabold text-blue-800 mb-12">Kata Mereka</h2>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200"
            >
              <p className="text-gray-700 mb-6 text-left">"{t.quote}"</p>
              
              <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                
                <div className={`w-12 h-12 rounded-full mr-4 ${t.avatarColor} text-white font-bold text-xl flex items-center justify-center`}>
                    {t.name.charAt(0)}
                </div>
                <div className='text-left'>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-blue-600">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;