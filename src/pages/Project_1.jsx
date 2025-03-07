import React, { useState, useMemo } from 'react';
import { Github, Monitor } from 'lucide-react';
import Navbar_Layout from "./Navbar_Layout";
import Contact_Layout from "./Contact_Layout";

// DATA TRANSLATE
const translations = {
  id: {
    overview: {
      paragraph1: "Website ini adalah website menonton film sederhana yang dibangun menggunakan HTML dan CSS. Project ini adalah project pertama yang saya buat.",
      paragraph2: "Pengguna juga dapat melihat detail lengkap dengan menekan film yang ingin ditonton. Dengan desain yang minimalis dan responsif, sehingga tampilan menyesuaikan layar perangkat yang digunakan.",
    },
    features: [
      "Tampilan Kartu Film: Menampilkan poster, judul, tahun, dan tipe film (movie/series) dalam bentuk kartu responsif.",
      "Detail Film: Pop-up yang menampilkan informasi lengkap film (teaser, screenshot film).",
      "Desain Responsif: Layout menyesuaikan ukuran layar (desktop, tablet, mobile).",
    ],
  },
  en: {
    overview: {
      paragraph1: "This website is a simple movie-watching platform built using HTML and CSS. This project is the first project I have created.",
      paragraph2: "User can also view full details by clicking on the movie they want to watch. With a minimalist and responsive design, the display adapts to the screen of the device being used.",
    },
    features: [
      "Movie Card Display: Shows the poster, title, year, and type of film (movie/series) in a responsive card format.",
      "Movie Details: A pop-up that displays complete movie information (teaser, movie screenshots).",
      "Responsive Design: The layout adjusts to the screen size (desktop, tablet, mobile).",
    ],
  },
};

const Project_1 = () => {
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
          <h1 className="project-title tracking-wide">Movie Streaming Website</h1>
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
              <ul className="project-paragraph space-y-3 text-zinc-300">
                {currentTranslations.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 text-orange-400">●</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* BUTTON */}
            <div className="project-paragraph flex space-x-4 whitespace-nowrap max-sm:justify-center">
              <a
                href="https://github.com/sunan-jaya/Movie-Website"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://sunan-jaya.github.io/Movie-Website/"
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
          <div className="space-y-5 w-auto justify-self-end self-start bg-zinc-900 p-5 rounded-2xl">
            <div className="space-y-5">
              {[
                { src: "/project_card_pages/project_1/gambar-1.png", label: "Homepage" },
                { src: "/project_card_pages/project_1/gambar-2.png", label: "Movie pages" },
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

export default Project_1;