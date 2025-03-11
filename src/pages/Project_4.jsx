import React, { useState, useMemo } from 'react';
import { Github, Monitor, FileText } from 'lucide-react';
import Navbar_Layout from "./Navbar_Layout";
import Contact_Layout from "./Contact_Layout";

// DATA TRANSLATE
const translations = {
  id: {
    overview: {
      paragraph1: "Employee Management System adalah aplikasi berbasis web yang dibangun menggunakan PHP, dirancang untuk menyederhanakan operasi HR dan manajemen data karyawan. Sistem ini menyediakan platform terpusat bagi administrator untuk menyimpan, memperbarui, dan memantau informasi karyawan, kehadiran, serta detail departemen.",
      paragraph2: "Tujuan sistem ini adalah untuk menggantikan proses pencatatan manual dengan alur kerja otomatis, mengurangi kesalahan, dan meningkatkan efisiensi organisasi. Dengan antarmuka yang intuitif, sistem ini cocok untuk bisnis yang mencari solusi hemat biaya untuk mengelola tenaga kerja secara efisien.",
    },
    systemFlow: [
      {
        title: "Manajemen Data Karyawan",
        description: "Tambah, edit, hapus, dan lihat profil karyawan dengan detail seperti nama, jabatan, dan informasi kontak.",
        subItems: [],
      },
      {
        title: "Tracking Absensi Karyawan",
        description: "Catat dan pantau kehadiran karyawan melalui timesheet atau log check-in/check-out.",
        subItems: [],
      },
      {
        title: "Manajemen Departemen",
        description: "Kelola karyawan berdasarkan departemen (contoh: HR, IT Programmer) untuk pelaporan yang terstruktur.",
        subItems: [],
      },
      {
        title: "Role Pengguna",
        description: "Level akses (Super Admin, HR Admin, Employee) untuk menjaga keamanan data.",
        subItems: [],
      },
    ],
  },
  en: {
    overview: {
      paragraph1: "The Employee Management System is a web-based application built using PHP, designed to simplify HR operations and employee data management. It provides a centralized platform for administrators to store, update, and monitor employee information, attendance, and departmental details.",
      paragraph2: "The system aims to replace manual record-keeping processes with automated workflows, reducing errors and improving organizational efficiency. With an intuitive interface, it caters to businesses seeking a cost-effective solution to manage their workforce seamlessly.",
    },
    systemFlow: [
      {
        title: "Employee Data Management",
        description: "Add, edit, delete, and view employee profiles with details like name, position, and contact information.",
        subItems: [],
      },
      {
        title: "Attendance Tracking",
        description: "Record and monitor employee attendance through timesheets or check-in/check-out logs.",
        subItems: [],
      },
      {
        title: "Department Management",
        description: "Organize employees into departments (e.g., HR, Information Technology) for streamlined reporting.",
        subItems: [],
      },
      {
        title: "User Roles & Permissions",
        description: "Define access levels (Super Admin, HR Admin, Employee) to ensure data security.",
        subItems: [],
      },
    ],
  },
};

const Project_4 = () => {
  // STATE UNTUK LANGUAGE
  const [language, setLanguage] = useState('en'); //LANGUAGE ORIGINAL ENGLISH

  // MEMO UNTUK TERJEMAHAN SAAT INI
  const currentTranslations = useMemo(() => translations[language], [language]);

  // FUNGSI UNTUK MENGUBAH LANGUAGE
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <section className="section">
      <Navbar_Layout onLanguageChange={handleLanguageChange} />

      {/* KONTEN UTAMA */}
      <div className="container bg-zinc-800/50 p-7 max-sm:rounded-none rounded-2xl md:p-12 max-sm:text-justify">
        <div className="flex justify-between items-center mb-8">
          <h1 className="project-title tracking-wide">HR Management System</h1>
        </div>

        <div className="lg:flex lg:items-start gap-8 ">
          {/* BAGIAN KIRI - DESKRIPSI PROJECT */}
          <div className="flex-1">
            {/* PROJECT OVERVIEW */}
            <section>
              <h2 className="project-sub-title mb-4 border-b border-zinc-700 pb-2">
                Project Overview
              </h2>
              <p className="project-paragraph text-zinc-300 mb-4">
                {currentTranslations.overview.paragraph1}
              </p>
              <p className="project-paragraph text-zinc-300">
                {currentTranslations.overview.paragraph2}
              </p>
            </section>

            {/* CORE FEATURES */}
            <section>
              <h2 className="project-sub-title mb-4 border-b border-zinc-700 pb-2">
                Core Features
              </h2>
              <ol className="list-none space-y-4 project-paragraph text-zinc-300">
                {currentTranslations.systemFlow.map((flow, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 text-zinc-300 font-semibold">{index + 1}.</div>
                    <div className="flex-1">
                      <div className="font-semibold text-orange-300">{flow.title}</div>
                      {flow.description && (
                        <p className="mt-1 text-zinc-300">{flow.description}</p>
                      )}
                      {flow.subItems.length > 0 && (
                        <ul className="list-disc list-inside ml-1 mt-2 space-y-2">
                          {flow.subItems.map((item, subIndex) => (
                            <li key={subIndex} className="text-zinc-400">{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* BUTTON */}
            <div className="flex flex-wrap gap-4 project-paragraph whitespace-nowrap max-sm:justify-center">
              <a
                href="https://github.com/sunan-jaya/Employee-Management-System-PHP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors max-sm:flex-1 max-sm:justify-center"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="http://employee-management-system.infinityfreeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors max-sm:flex-1 max-sm:justify-center"
              >
                <Monitor size={20} />
                <span>Live Demo</span>
              </a>
              <a
                href="https://drive.google.com/drive/folders/1JsEbJG4PV5LPTVM8t9swoLVgwejN6lv_?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors max-sm:flex-1 max-sm:justify-center"
              >
                <FileText size={20} />
                <span>Documentation</span>
              </a>
            </div>
          </div>

          {/* BAGIAN KANAN - GAMBAR PROJECT */}
          <div className="space-y-5 w-auto justify-self-end self-start bg-zinc-900 p-5 rounded-2xl">
            <div className="space-y-5">
              {[
                { src: "/project_card_pages/project_4/gambar-1.png", label: "Project homepage" },
                { src: "/project_card_pages/project_4/gambar-2.png", label: "Dashboard pages" },
              ].map((image, index) => (
                <div key={index} className="group relative">
                  <img
                    src={image.src}
                    alt={image.label}
                    className="project-picture shadow-lg transition-transform group-hover:scale-105"
                  />
                  <p className="mt-2 project-picture-title">
                    {image.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Contact_Layout />
    </section>
  );
};

export default Project_4;