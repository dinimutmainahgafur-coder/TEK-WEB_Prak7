import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaUserCircle,
} from "react-icons/fa";

import projectImage from "../assets/hero.png";

/* =======================
   DATA STATIS PROJECT
======================= */
const projectData = {
  category: "UI/UX Design",
  title: "Creative Portfolio Platform",
  description:
    "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas.",
  team: [
    { name: "Budi Santoso", role: "Frontend Developer", photo: null },
    { name: "Budi Santoso", role: "Frontend Developer", photo: null },
    { name: "Budi Santoso", role: "Frontend Developer", photo: null },
  ],
};

const Projects = () => {
  return (
    <section className="py-16 px-4 bg-pink-50">
      {/* ================= TITLE ================= */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-700">
          Showcase Student Projects
        </h2>
        <p className="text-gray-600 mt-2">
          Karya-karya inovatif yang telah dihasilkan oleh mahasiswa dalam program
          Ruang Ekspresi
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto flex items-center relative">
        {/* Arrow Left */}
        <button className="absolute -left-10 bg-white p-3 rounded-full shadow-lg hidden md:block border">
          <FaArrowLeft className="text-gray-600 text-lg" />
        </button>

        {/* Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white p-6 md:p-10 rounded-2xl shadow-md w-full">
          {/* ===== LEFT CONTENT ===== */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
              {projectData.category}
            </span>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {projectData.title}
            </h3>

            <p className="text-gray-600 mb-6">
              {projectData.description}
            </p>

            <h4 className="font-semibold text-gray-800 mb-3">
              Tim Pembuat :
            </h4>

            <div className="space-y-3 mb-8">
              {projectData.team.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3"
                >
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <FaUserCircle className="w-8 h-8 text-gray-400" />
                  )}

                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {member.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition">
              <FaExternalLinkAlt className="mr-2" />
              Live Demo
            </button>
          </div>

          {/* ===== RIGHT IMAGE ===== */}
          <div className="flex justify-center">
            <div className="p-2 border-4 border-pink-300 rounded-2xl shadow-xl">
              <img
                src={projectImage}
                alt="Project Showcase"
                className="rounded-xl max-h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Arrow Right */}
        <button className="absolute -right-10 bg-white p-3 rounded-full shadow-lg hidden md:block border">
          <FaArrowRight className="text-gray-600 text-lg" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
