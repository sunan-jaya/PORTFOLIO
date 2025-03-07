import React, { useState, useMemo } from 'react';
import { Github, Monitor } from 'lucide-react';
import Navbar_Layout from "./Navbar_Layout";
import Contact_Layout from "./Contact_Layout";

// DATA TRANSLATE
const translations = {
  id: {
    overview: {
      paragraph1: '"Screensurf" Movie App adalah aplikasi yang dirancang untuk menonton film dari berbagai genre. Dibangun dengan Kotlin, aplikasi ini terintegrasi dengan database film untuk mengambil data real-time tentang film, termasuk sinopsis dan pemeran.',
      paragraph2: "Aplikasi ini menyediakan antarmuka intuitif bagi pengguna untuk menjelajahi berbagai film yang dilengkapi fitur personalisasi seperti daftar tonton atau ulasan.",
    },
    features: [
      {
        title: "Berbagai Jenis Film",
        description: "Telusuri film atau series berdasarkan genre (aksi, drama, horor).",
      },
      {
        title: "Fitur Pencarian",
        description: "Cari film berdasarkan judul, aktor, atau kata kunci dengan saran otomatis.",
      },
      {
        title: "Detail Film",
        description: "Tampilkan informasi lengkap seperti trailer, daftar pemeran, dan sinopsis film.",
      },
      {
        title: "Fitur Unduh",
        description: "Mengakses film secara offline dengan mengunduh film atau series yang diinginkan.",
      },
    ],
  },
  en: {
    overview: {
      paragraph1: '"Screensurf" Movie App is an application designed for watching films across various genres. Built with Kotlin, it integrates with a movie database to fetch real-time data about films, including synopses and cast details.',
      paragraph2: "The app provides an intuitive interface for users to explore diverse films, equipped with personalized features such as watchlists or reviews.",
    },
    features: [
      {
        title: "Diverse Film Genres",
        description: "Browse movies or series by genre (action, drama, horror).",
      },
      {
        title: "Search Feature",
        description: "Search for films by title, actor, or keyword with auto-suggestions.",
      },
      {
        title: "Film Details",
        description: "Display comprehensive information such as trailers, cast lists, and film synopses.",
      },
      {
        title: "Download Feature",
        description: "Access films offline by downloading desired movies or series.",
      },
    ],
  },
};

const Project_2 = () => {
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
          <h1 className="project-title tracking-wide">Movie Streaming Apps</h1>
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
              <ul className="space-y-3 project-paragraph text-zinc-300">
                {currentTranslations.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 text-orange-400">●</span>
                    <div>
                      <span className="font-semibold">{feature.title}</span>
                      : {feature.description}
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* BUTTON */}
            <div className="flex space-x-4 project-paragraph whitespace-nowrap max-sm:justify-center">
              <a
                href="https://github.com/sunan-jaya/Movie-Apps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1ZGYd4nnEaQg2yjK3hY6KtAMlBdU4fPQo/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
              >
                <Monitor size={20} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>

          {/* BAGIAN KANAN - GAMBAR PROJECT */}
          <div className="space-y-5 w-5/12 justify-self-end bg-zinc-900 p-5 rounded-2xl">
            <div className="space-y-5">
              <div className="group relative">
                <iframe
                  src="https://drive.google.com/file/d/1ZGYd4nnEaQg2yjK3hY6KtAMlBdU4fPQo/preview"
                  className="w-[260px] h-[430px] rounded-lg shadow-lg justify-self-center"
                  allow="autoplay"
                />
                <p className="mt-2 project-picture-title">
                  Demonstration video
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact_Layout />
    </section>
  );
};

export default Project_2;