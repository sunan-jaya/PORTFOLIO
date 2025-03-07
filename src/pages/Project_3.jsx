import React, { useState, useMemo } from 'react';
import { Github, Monitor, FileText } from 'lucide-react';
import Navbar_Layout from "./Navbar_Layout";
import Contact_Layout from "./Contact_Layout";

// DATA TRANSLATE
const translations = {
  id: {
    overview: {
      paragraph1: "Proyek ini merupakan pengembangan sistem informasi manajemen karyawan yang dirancang untuk memudahkan pengelolaan data karyawan.",
      paragraph2: "Sistem ini memungkinkan pengguna untuk melakukan operasi dasar seperti menambah, melihat, memperbarui, dan menghapus data karyawan melalui antarmuka yang user-friendly.",
    },
    systemFlow: [
      {
        title: "Antarmuka Pengguna",
        description: "Splash screen, halaman login, dan halaman utama dengan menu tambah, lihat, perbarui, dan hapus data.",
        subItems: [],
      },
      {
        title: "Database",
        description: "Database 'ManajemenKaryawan' dengan dua tabel utama:",
        subItems: [
          "Tabel login: Menyimpan informasi autentikasi pengguna (misal: username dan password).",
          "Tabel karyawan: Menyimpan data karyawan seperti nama, ID, dan informasi lainnya.",
        ],
      },
      {
        title: "Fungsi Utama",
        description: "",
        subItems: [
          "Menambah data: Memungkinkan input data karyawan baru dengan pesan konfirmasi saat berhasil.",
          "Melihat data: Menampilkan data karyawan yang tersimpan.",
          "Memperbarui data: Memperbarui data karyawan dengan notifikasi perubahan berhasil.",
          "Menghapus data: Menghapus data karyawan dan menampilkan konfirmasi penghapusan.",
        ],
      },
      {
        title: "Alur Sistem",
        description: "Pengguna berinteraksi melalui antarmuka, sistem terhubung ke database untuk memproses operasi, dan memberikan feedback visual (pesan sukses/gagal).",
        subItems: [],
      },
    ],
  },
  en: {
    overview: {
      paragraph1: "This project involves the development of an Employee Management Information System, designed to streamline employee data management.",
      paragraph2: "The system allows users to perform basic operations such as adding, viewing, updating, and deleting employee data through a user-friendly interface.",
    },
    systemFlow: [
      {
        title: "User Interface",
        description: "Splash screen, login page, and a main page with menus for adding, viewing, updating, and deleting data.",
        subItems: [],
      },
      {
        title: "Database",
        description: "A 'ManajemenKaryawan' database with two primary tables:",
        subItems: [
          "Login table: Stores user authentication details (e.g., username and password).",
          "Employee table: Stores employee data such as name, ID, and other relevant information.",
        ],
      },
      {
        title: "Core Features",
        description: "",
        subItems: [
          "Add data: Allows input of new employee data with success confirmation messages.",
          "View data: Displays stored employee records.",
          "Update data: Edits existing employee data with update success notifications.",
          "Delete data: Removes employee records and confirms deletion.",
        ],
      },
      {
        title: "System Flow",
        description: "Users interact via the interface, the system processes operations through the database, and provides visual feedback (success/error messages).",
        subItems: [],
      },
    ],
  },
};

const Project_3 = () => {
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
      <div className="container bg-zinc-800/50 p-7 max-sm:rounded-none rounded-2xl md:p-12 text-justify">
        <div className="flex justify-between items-center mb-8">
          <h1 className="project-title tracking-wide">Employee Management System Program</h1>
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

            {/* PROJECT FLOW */}
            <section>
              <h2 className="project-sub-title mb-4 border-b border-zinc-700 pb-2">
                Project Flow
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
            <div className="flex space-x-4 project-paragraph whitespace-nowrap max-sm:justify-center">
              <a
                href="https://github.com/sunan-jaya/Employee-Management-System-JAVA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1lrQw1dej_C6fBxB6_qkXyoOKnI9IpjQM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
              >
                <Monitor size={20} />
                <span>Live Demo</span>
              </a>
              <a
                href="https://drive.google.com/drive/u/0/folders/1hV8CIS0EfxGC_oPCxK2V-K6hb8fS7y64"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
              >
                <FileText size={20} />
                <span>Documentation</span>
              </a>
            </div>
          </div>

          {/* BAGIAN KANAN - GAMBAR PROJECT */}
          <div className="space-y-5 w-auto justify-self-end self-start bg-zinc-900 p-5 rounded-2xl">
            <div className="space-y-5">
              <div className="group relative">
                <iframe
                  src="https://drive.google.com/file/d/1lrQw1dej_C6fBxB6_qkXyoOKnI9IpjQM/preview"
                  className="project-video shadow-lg h-64"
                  allow="autoplay"
                />
                <p className="mt-2 text-center text-zinc-400 italic">
                  Demonstration video
                </p>
              </div>
              {[
                { src: "/project_card_pages/project_3/gambar-2.png", label: "User interface" },
                { src: "/project_card_pages/project_3/gambar-3.png", label: "Add data feature" },
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

export default Project_3;