import Navbar_Layout from "./Navbar_Layout";
import Contact_Layout from "./Contact_Layout";
import { useState } from "react";

const Project_1 = () => {

  const [language, setLanguage] = useState('en'); // KONTEN AWAL ID ATAU EN

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const translations = {
    // BAHASA INDONESIA
    id: {
      // ISI KONTEN SUB-TITLE 1
      subTitle1_Paragraph1 : "Website ini adalah website menonton film sederhana yang dibangun menggunakan HTML dan CSS. Project ini adalah project pertama yang saya buat.",
      subTitle1_Paragraph2 : "Pengguna juga dapat melihat detail lengkap dengan menekan film yang ingin ditonton. Dengan desain yang minimalis dan responsif, sehingga tampilan menyesuaikan layar perangkat yang digunakan.",

      // ISI KONTEN SUB-TITLE 2
      li1 : "Tampilan Kartu Film: Menampilkan poster, judul, tahun, dan tipe film (movie/series) dalam bentuk kartu responsif.",

      li2 : "Detail Film: Pop-up yang menampilkan informasi lengkap film (teaser, screenshot film).",

      li3 : "Desain Responsif: Layout menyesuaikan ukuran layar (desktop, tablet, mobile).",
    },

    // BAHASA INGGRIS
    en: {
      // ISI KONTEN SUB-TITLE 1
      subTitle1_Paragraph1 : "This website is a simple movie-watching platform built using HTML and CSS. This project is the first project I have created.",
      subTitle1_Paragraph2 : "User can also view full details by clicking on the movie they want to watch. With a minimalist and responsive design, the display adapts to the screen of the device being used.",

      // ISI KONTEN SUB-TITLE 2
      li1: "Movie Card Display: Shows the poster, title, year, and type of film (movie/series) in a responsive card format.",

      li2: "Movie Details: A pop-up that displays complete movie information (teaser, movie screenshots).",

      li3: "Responsive Design: The layout adjusts to the screen size (desktop, tablet, mobile).",
    }
  };


  return (
    <section className="section">
        <Navbar_Layout onLanguageChange={handleLanguageChange} />
      
        <div className="container bg-zinc-800/50 p-7 max-sm:rounded-none rounded-2xl md:p-12">
            
            {/* JUDUL KONTENT */}
            <h1 className="project-title">Movie Streaming Website</h1>

            {/* BUNGKUSAN KONTEN */}
            <div className="lg:flex lg:items-start gap-8">

                {/* ISI KONTEN */}
                <div className="flex-1">                 
                    <div className="space-y-6 text-justify">
                        <div>
                          <h2 className="project-sub-title">Project Overview</h2>
                          <p className="project-paragraph">{translations[language].subTitle1_Paragraph1}</p>
                          <p className="project-paragraph">{translations[language].subTitle1_Paragraph2}</p>
                        </div>

                        <div>
                          <h2 className="project-sub-title">Core Features</h2>

                          <ol class="list-decimal list-inside space-y-3 project-paragraph">
                              <li>{translations[language].li1}</li>
                              <li>{translations[language].li2}</li>
                              <li>{translations[language].li3}</li>                   
                          </ol>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-5 mb-8 flex-wrap max-sm:justify-center">
                          <a href="https://github.com/sunan-jaya/Movie-Website" className="btn project-button-1 whitespace-nowrap" target="_blank">Link Project</a>     
                          <a href="https://sunan-jaya.github.io/Movie-Website/" className="btn project-button-1 whitespace-nowrap" target="_blank">Live Demo</a>
                    </div>
                </div>

                {/* GAMBAR PROJECT */}
                <figure className="p-5 bg-zinc-900 rounded-2xl">
                    <div className="space-y-5">
                        <p className="project-picture-title italic">
                          <img src="/project_card_pages/project_1/gambar-1.png" alt="" className="project-picture" />
                          Homepage
                        </p>

                        <p className="project-picture-title italic">
                          <img src="/project_card_pages/project_1/gambar-2.png" alt="" className="project-picture" />
                          Movie pages
                        </p>
                    </div>
                </figure>
                
            </div>
        
        </div>
        
        <Contact_Layout />
    </section>
  );
};
  
  export default Project_1;