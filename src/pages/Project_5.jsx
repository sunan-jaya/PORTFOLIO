import Navbar_Layout from "./Navbar_Layout";
import Contact_Layout from "./Contact_Layout";
import { useState } from "react";

const Project_5 = () => {

  const [language, setLanguage] = useState('en'); // KONTEN AWAL ID ATAU EN

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const translations = {
    // BAHASA INDONESIA
    id: {
      subTitle1 : "Project Overview",
      subTitle1_Paragraph1 : "Sistem berbasis web ini untuk mendiagnosis kerusakan komputer/laptop menggunakan metode Naïve Bayes. Sistem ini bertujuan membantu pengguna awam mengidentifikasi masalah perangkat mereka secara mandiri dan mendapatkan solusi berdasarkan gejala yang dialami.",
      subTitle1_Paragraph2 : "Sistem ini menggabungkan metode Naïve Bayes dengan antarmuka web menggunakan framework Laravel untuk menyediakan solusi diagnosa kerusakan komputer yang cepat dan akurat. Implementasi basis pengetahuan dan perhitungan statistik memungkinkan sistem bekerja layaknya seorang ahli teknis.",

      subTitle2 : "Method",
      subTitle2_Paragraph1 : "Metode Naïve Bayes merupakan salah satu metode sistem pakar yang dapat digunakan untuk mengklasifikasikan data, atau lebih jelasnya merupakan klasifikasi statistic yang digunakan untuk memprediksi probabilitas keanggotan umum dari suatu class. Berikut ini merupakan persamaan teorema Bayes:",
      tableX: ": Data dengan class yang belum teridentifikasi.",
      tableH: ": Hipotesis data yang merupakan suatu class spesifik.",
      tablePHX: ": Probabilitas hipotesis H berdasar dari kondisi X.",
      tablePXH: ": Probabilitas X berdasar dari kondisi hipotesis H.",
      tablePH: ": Probabilitas hipotesis H.",
      tablePX: ": Probabilitas X.",
    },

    // BAHASA INGGRIS
    en: {
      subTitle1 : "Project Overview",
      subTitle1_Paragraph1 : "This web-based system is designed to diagnose computer/laptop issues using the Naïve Bayes method. The system aims to help novice users independently identify problems with their devices and obtain solutions based on experienced symptoms.",
      subTitle1_Paragraph2 : "The system combines the Naïve Bayes method with a web interface using the Laravel framework to provide fast and accurate computer diagnostic solutions. The implementation of knowledge bases and statistical calculations allows the system to work like a technical expert.",

      subTitle2 : "Method",
      subTitle2_Paragraph1 : "The Naïve Bayes method is an expert system method that can be used to classify data, or more specifically, a statistical classification used to predict the probability of general membership in a class. The following is Bayes' theorem equation:",
      tableX: ": Data with unidentified class.",
      tableH: ": Hypothesis data that is a specific class.",
      tablePHX: ": Probability of hypothesis H based on condition X.",
      tablePXH: ": Probability of X based on hypothesis H condition.",
      tablePH: ": Probability of hypothesis H.",
      tablePX: ": Probability of X.",
    }
  };


  return (
    <section className="section">
        <Navbar_Layout onLanguageChange={handleLanguageChange} />
      
        <div className="container bg-zinc-800/50 p-7 max-sm:rounded-none rounded-2xl md:p-12">
            
            {/* JUDUL KONTENT */}
            <h1 className="project-title">Computer Repair Solution</h1>

            {/* BUNGKUSAN KONTEN */}
            <div className="lg:flex lg:items-start gap-8">

                {/* ISI KONTEN */}
                <div className="flex-1">                 
                    <div className="space-y-6 text-justify">
                        <div>
                          <h2 className="project-sub-title">{translations[language].subTitle1}</h2>
                          <p className="project-paragraph">{translations[language].subTitle1_Paragraph1}</p>
                          <p className="project-paragraph">{translations[language].subTitle1_Paragraph2}</p>
                        </div>

                        <div>
                          <h2 className="project-sub-title">{translations[language].subTitle2}</h2>
                          
                          <p className="project-paragraph">{translations[language].subTitle2_Paragraph1}
                          </p>
                          
                          <img src="/project_card_pages/project_5/Gambar-0.png" alt="" className="w-80 justify-self-center" />
                          
                          <table className="project-paragraph max-sm:text-[10px]" >
                              <tr>
                                <td width="53"><strong>X</strong></td>
                                <td>{translations[language].tableX}</td>
                              </tr>

                              <tr>
                                <td><strong>H</strong></td>
                                <td>{translations[language].tableH}</td>
                              </tr>

                              <tr>
                                <td><strong>P (H|X)</strong></td>
                                <td>{translations[language].tablePHX}</td>
                              </tr>

                              <tr>
                                <td><strong>P (X|H)</strong></td>
                                <td>{translations[language].tablePXH}</td>
                              </tr>

                              <tr>
                                <td><strong>P(H)</strong></td>
                                <td>{translations[language].tablePH}</td>
                              </tr>

                              <tr>
                                <td><strong>P(X)</strong></td>
                                <td>{translations[language].tablePX}</td>
                              </tr>
                          </table>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-5 mb-8 flex-wrap max-sm:justify-center">
                          <a href="https://github.com/sunan-jaya/Computer-Repair-System" className="btn project-button-1 whitespace-nowrap" target="_blank">Link Project</a>     
                          <a href="http://computer-repair-system.infinityfreeapp.com" className="btn project-button-1 whitespace-nowrap" target="_blank">Live Demo</a>
                          <a href="https://drive.google.com/drive/folders/1c0Zzr3cL3dNKtc0YsXaMmYV6welUUPOJ?usp=drive_link" className="btn project-button-2 whitespace-nowrap max-sm:hidden" target="_blank">Documentation</a>
                    </div>
                </div>

                {/* GAMBAR PROJECT */}
                <figure className="p-5 bg-zinc-900 rounded-2xl">
                    <div className="space-y-5">
                        <p className="project-picture-title italic">
                          <img src="/project_card_pages/project_5/gambar-1.png" alt="" className="project-picture" />
                          Project homepage.
                        </p>

                        <p className="project-picture-title italic">
                          <img src="/project_card_pages/project_5/gambar-2.png" alt="" className="project-picture" />
                          Diagnose page.
                        </p>

                        <p className="project-picture-title italic">
                          <img src="/project_card_pages/project_5/gambar-3.png" alt="" className="project-picture" />
                          Diagnose result page.
                        </p>
                    </div>
                </figure>
                
            </div>
        
        </div>
        
        <Contact_Layout />
    </section>
  );
};
  
  export default Project_5;