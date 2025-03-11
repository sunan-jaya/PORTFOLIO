import React, { useState, useMemo } from 'react';
import { Github, Monitor, FileText } from 'lucide-react';
import Navbar_Layout from "./Navbar_Layout";
import Contact_Layout from "./Contact_Layout";

// DATA TRANSLATE
const translations = {
  id: {
    overview: {
      paragraph1: "Sistem berbasis web ini untuk mendiagnosis kerusakan komputer/laptop menggunakan metode Naïve Bayes. Sistem ini bertujuan membantu pengguna awam mengidentifikasi masalah perangkat mereka secara mandiri dan mendapatkan solusi berdasarkan gejala yang dialami.",
      paragraph2: "Sistem ini menggabungkan metode Naïve Bayes dengan antarmuka web menggunakan framework Laravel untuk menyediakan solusi diagnosa kerusakan komputer yang cepat dan akurat. Implementasi basis pengetahuan dan perhitungan statistik memungkinkan sistem bekerja layaknya seorang ahli teknis."
    },
    method: {
      content: "Metode Naïve Bayes merupakan salah satu metode sistem pakar yang dapat digunakan untuk mengklasifikasikan data, atau lebih jelasnya merupakan klasifikasi statistic yang digunakan untuk memprediksi probabilitas keanggotan umum dari suatu class. Berikut ini merupakan persamaan teorema Bayes:",
      items: [
        { symbol: "X", description: "Data dengan class yang belum teridentifikasi." },
        { symbol: "H", description: "Hipotesis data yang merupakan suatu class spesifik." },
        { symbol: "P (H|X)", description: "Probabilitas hipotesis H berdasar dari kondisi X." },
        { symbol: "P (X|H)", description: "Probabilitas X berdasar dari kondisi hipotesis H." },
        { symbol: "P(H)", description: "Probabilitas hipotesis H." },
        { symbol: "P(X)", description: "Probabilitas X." }
      ]
    }
  },
  en: {
    overview: {
      title: "Project Overview",
      paragraph1: "This web-based system is designed to diagnose computer/laptop issues using the Naïve Bayes method. The system aims to help novice users independently identify problems with their devices and obtain solutions based on experienced symptoms.",
      paragraph2: "The system combines the Naïve Bayes method with a web interface using the Laravel framework to provide fast and accurate computer diagnostic solutions. The implementation of knowledge bases and statistical calculations allows the system to work like a technical expert."
    },
    method: {
      title: "Method",
      content: "The Naïve Bayes method is an expert system method that can be used to classify data, or more specifically, a statistical classification used to predict the probability of general membership in a class. The following is Bayes' theorem equation:",
      items: [
        { symbol: "X", description: "Data with unidentified class." },
        { symbol: "H", description: "Hypothesis data that is a specific class." },
        { symbol: "P (H|X)", description: "Probability of hypothesis H based on condition X." },
        { symbol: "P (X|H)", description: "Probability of X based on hypothesis H condition." },
        { symbol: "P(H)", description: "Probability of hypothesis H." },
        { symbol: "P(X)", description: "Probability of X." }
      ]
    }
  }
};

const Project_5 = () => {
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
            <h1 className="project-title tracking-wide">Computer Repair Solution</h1>
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
                <p className="project-paragraph text-zinc-300 mb-4">
                  {currentTranslations.method.content}
                </p>
                <img 
                  src="/project_card_pages/project_5/gambar-0.png" 
                  alt="Bayes Theorem" 
                  className="mx-auto mb-4 w-80"
                />
                <ul className="space-y-3 project-paragraph text-zinc-300">
                  {currentTranslations.method.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 font-semibold text-orange-300">{item.symbol}</span>
                      <span>{item.description}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* BUTTON */}
              <div className="flex space-x-4 project-paragraph whitespace-nowrap max-sm:justify-center">
                <a 
                  href="https://github.com/sunan-jaya/Computer-Repair-System" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="http://computer-repair-system.infinityfreeapp.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                >
                  <Monitor size={20} />
                  <span>Live Demo</span>
                </a>
                <a 
                  href="https://drive.google.com/drive/folders/1c0Zzr3cL3dNKtc0YsXaMmYV6welUUPOJ?usp=drive_link" 
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
                {[
                  { src: "/project_card_pages/project_5/gambar-1.png", label: "Project homepage" },
                  { src: "/project_card_pages/project_5/gambar-2.png", label: "Diagnose page" },
                  { src: "/project_card_pages/project_5/gambar-3.png", label: "Diagnose result page" }
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

export default Project_5;