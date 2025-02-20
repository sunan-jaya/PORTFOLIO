import Navbar_Layout from "./Navbar_Layout";
import Contact_Layout from "./Contact_Layout";
import { useState } from "react";

const Project_2 = () => {

  const [language, setLanguage] = useState('en'); // KONTEN AWAL ID ATAU EN

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const translations = {
    // BAHASA INDONESIA
    id: {
      // ISI KONTEN SUB-TITLE 1
      subTitle1_Paragraph1 : '"Screensurf"' + " Movie App adalah aplikasi yang dirancang untuk menonton film dari berbagai genre. Dibangun dengan Flutter, aplikasi ini terintegrasi dengan database film untuk mengambil data real-time tentang film, termasuk sinopsis dan pemeran.",
      subTitle1_Paragraph2 : "Aplikasi ini menyediakan antarmuka intuitif bagi pengguna untuk menjelajahi berbagai film yang dilengkapi fitur personalisasi seperti daftar tonton atau ulasan.",

      // ISI KONTEN SUB-TITLE 2
      li1_Title : "Berbagai Jenis Film",
      li1 : ": Telusuri film atau series berdasarkan genre (aksi, drama, horor).",

      li2_Title : "Fitur Pencarian",
      li2 : ": Cari film berdasarkan judul, aktor, atau kata kunci dengan saran otomatis.",

      li3_Title : "Detail Film",
      li3 : ": Tampilkan informasi lengkap seperti trailer, daftar pemeran, dan sinopsis film.",

      li4_Title : "Fitur Unduh",
      li4 : ": Mengakses film secara offline dengan mengunduh film atau series yang diinginkan.",
    },

    // BAHASA INGGRIS
    en: {
      // ISI KONTEN SUB-TITLE 1
      subTitle1_Paragraph1 : '"Screensurf" Movie App is an application designed for watching films across various genres. Built with Flutter, it integrates with a movie database to fetch real-time data about films, including synopses and cast details.',  
      subTitle1_Paragraph2 : 'The app provides an intuitive interface for users to explore diverse films, equipped with personalized features such as watchlists or reviews.',  

      // ISI KONTEN SUB-TITLE 2
      li1_Title : 'Diverse Film Genres',  
      li1 : ': Browse movies or series by genre (action, drama, horror).',  

      li2_Title : 'Search Feature',  
      li2 : ': Search for films by title, actor, or keyword with auto-suggestions.',  

      li3_Title : 'Film Details',  
      li3 : ': Display comprehensive information such as trailers, cast lists, and film synopses.',  

      li4_Title : 'Download Feature',  
      li4 : ': Access films offline by downloading desired movies or series.'  
    }
  };


  return (
    <section className="section">
        <Navbar_Layout onLanguageChange={handleLanguageChange} />
      
        <div className="container bg-zinc-800/50 p-7 max-sm:rounded-none rounded-2xl md:p-12">
            
            {/* JUDUL KONTEN */}
            <h1 className="project-title">Movie Streaming Apps</h1>

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
                          
                          <ol className="list-decimal list-inside space-y-3 project-paragraph">
                              <li>
                                <span className="text-orange-300 font-extrabold">{translations[language].li1_Title}</span>
                                <span>{translations[language].li1}</span>
                              </li>

                              <li>
                                <span className="text-orange-300 font-extrabold">{translations[language].li2_Title}</span>
                                <span>{translations[language].li2}</span>
                              </li>

                              <li>
                                <span className="text-orange-300 font-extrabold">{translations[language].li3_Title}</span>
                                <span>{translations[language].li3}</span>
                              </li>

                              <li>
                                <span className="text-orange-300 font-extrabold">{translations[language].li4_Title}</span>
                                <span>{translations[language].li4}</span>
                              </li>
                          </ol>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-5 mb-8 flex-wrap max-sm:justify-center">
                          <a href="https://github.com/sunan-jaya/Movie-Apps" className="btn project-button-1 whitespace-nowrap" target="_blank">Link Project</a>     
                          <a href="https://drive.google.com/file/d/1ZGYd4nnEaQg2yjK3hY6KtAMlBdU4fPQo/view?usp=sharing" className="btn project-button-1 whitespace-nowrap" target="_blank">Live Demo</a>
                          {/* <a href="#" className="btn project-button-2 whitespace-nowrap max-sm:hidden" target="_blank">Documentation</a> */}
                    </div>
                </div>

                {/* GAMBAR PROJECT */}
                <figure className="p-5 bg-zinc-900 rounded-2xl">
                    <div className="space-y-5">
                        <p className="project-picture-title italic">
                          <iframe src="https://drive.google.com/file/d/1ZGYd4nnEaQg2yjK3hY6KtAMlBdU4fPQo/preview" allow="autoplay" width="320" height="550" ></iframe>
                          Demonstration video.
                        </p>
                    </div>
                </figure>
                
            </div>
        
        </div>
        
        <Contact_Layout />
    </section>
  );
};
  
  export default Project_2;