import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Code, User } from 'lucide-react';


import ProjectImage from '../assets/hero.png'; 

const projectsData = [
  {
    id: 1,
    category: 'UI/UX Design',
    title: 'Creative Portfolio Platform',
    desc: 'Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas.',
    team: [{name: 'Budi Santoso', role: 'Frontend Developer'}, {name: 'Siti Aminah', role: 'UI/UX Designer'}, {name: 'Adi Nugroho', role: 'Backend Developer'}],
    image: ProjectImage,
    link: '#',
    color: 'bg-blue-200'
  },
 
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projectsData[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-3xl font-extrabold text-blue-800 mb-2">Showcase Student Projects</h2>
        <p className="text-gray-600 mb-12">
          Karya-karya inovatif yang telah dihasilkan oleh mahasiswa dalam program Ruang Ekspresi
        </p>

        <div className="relative flex items-center bg-pink-50 rounded-3xl p-10 shadow-xl border border-pink-100"> 
          
          <button 
            onClick={prevProject} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-6 bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:bg-gray-100 transition"
          >
            <ArrowLeft className="w-6 h-6 text-blue-600" />
          </button>

         
          <div className="flex w-full items-center justify-between">
            
            <div className="w-5/12 text-left p-6">
              <span className={`px-4 py-1 rounded-full text-blue-700 text-sm font-semibold mb-4 inline-block ${currentProject.color}`}>
                {currentProject.category}
              </span>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">{currentProject.title}</h3>
              <p className="text-gray-600 mb-6">{currentProject.desc}</p>
              
              <p className="font-semibold text-gray-800 mb-3">Tim Pembuat:</p>
              <div className="space-y-3 mb-8">
                {currentProject.team.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3">

                    <div className="w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center text-white font-bold">
                        <User className='w-5 h-5'/>
                    </div>
                    <div>
                        <p className="font-medium text-sm text-gray-800">{member.name}</p>
                        <p className="text-xs text-blue-600">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a 
                href={currentProject.link} 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </div>

            
            <div className="w-6/12 p-4 flex justify-center items-center rounded-2xl border-4 border-pink-500 shadow-2xl bg-white">
              <img 
                src={currentProject.image} 
                alt={currentProject.title} 
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </div>

          
          <button 
            onClick={nextProject} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-6 bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:bg-gray-100 transition"
          >
            <ArrowRight className="w-6 h-6 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;