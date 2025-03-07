import Navbar_Layout from "./Navbar_Layout";
import Contact_Layout from "./Contact_Layout";
import { useState } from "react";

const project_null = () => {

  const [language, setLanguage] = useState('en'); // KONTEN AWAL ID ATAU EN

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const translations = {
    // BAHASA INDONESIA
    id: {
      // ISI KONTEN SUB-TITLE 1
      subTitle1_Paragraph1 : "Awan adalah kumpulan tetesan air atau kristal es yang terlihat dan melayang di atmosfer. Mereka terbentuk ketika udara hangat naik, mendingin, dan mencapai titik embun, menyebabkan uap air mengembun di sekitar partikel kecil seperti debu.",
      subTitle1_Paragraph2 : "Awan memiliki peran penting dalam sistem cuaca Bumi, memengaruhi presipitasi, suhu, dan pantulan sinar matahari. Mereka hadir dalam berbagai bentuk dan ukuran, seperti cumulus, stratus, dan cirrus, masing-masing menunjukkan kondisi atmosfer yang berbeda.",

      // ISI KONTEN SUB-TITLE 2
      subTitle2_Paragraph1 : "Bunga adalah struktur reproduksi pada tumbuhan berbunga (angiospermae). Biasanya terdiri dari kelopak (petal), sepal, benang sari, dan putik. Bunga memiliki peran penting dalam reproduksi tumbuhan dengan memfasilitasi penyerbukan, sering kali dibantu oleh serangga, burung, atau angin. Mereka hadir dalam berbagai warna, bentuk, dan ukuran, menjadikannya tidak hanya penting secara biologis tetapi juga indah secara estetika. Bunga sering digunakan dalam praktik budaya, perayaan, dan sebagai simbol keindahan serta emosi.",
    },

    // BAHASA INGGRIS
    en: {
      // ISI KONTEN SUB-TITLE 1
      subTitle1_Paragraph1 : "Clouds are visible masses of water droplets or ice crystals suspended in the atmosphere. They form when warm air rises, cools, and reaches its dew point, causing water vapor to condense around tiny particles like dust.",
      subTitle1_Paragraph2 : "Clouds play a crucial role in Earth's weather systems, influencing precipitation, temperature, and sunlight reflection. They come in various shapes and sizes, such as cumulus, stratus, and cirrus, each indicating different atmospheric conditions.",

      // ISI KONTEN SUB-TITLE 2
      subTitle2_Paragraph1 : "A flower is the reproductive structure of flowering plants (angiosperms). It is typically composed of petals, sepals, stamens, and a pistil. Flowers play a vital role in plant reproduction by facilitating pollination, often with the help of insects, birds, or wind. They come in a wide variety of colors, shapes, and sizes, making them not only biologically significant but also aesthetically pleasing. Flowers are often used in cultural practices, celebrations, and as symbols of beauty and emotion.",
    }
  };


  return (
    <section className="section">
        <Navbar_Layout onLanguageChange={handleLanguageChange} />
      
        <div className="container bg-zinc-800/50 p-7 max-sm:rounded-none rounded-2xl md:p-12">
            
            {/* JUDUL KONTENT */}
            <h1 className="project-title">JUDUL</h1>

            {/* BUNGKUSAN KONTEN */}
            <div className="lg:flex lg:items-start gap-8">

                {/* ISI KONTEN */}
                <div className="flex-1">                 
                    <div className="space-y-6 text-justify">
                        <div>
                          <h2 className="project-sub-title">SUB-TITLE 1</h2>
                          <p className="project-paragraph">{translations[language].subTitle1_Paragraph1}</p>
                          <p className="project-paragraph">{translations[language].subTitle1_Paragraph2}</p>
                        </div>

                        <div>
                          <h2 className="project-sub-title">SUB-TITLE 2</h2>
                          
                          <p className="project-paragraph">{translations[language].subTitle2_Paragraph1}
                          </p>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-5 mb-8 flex-wrap max-sm:justify-center">
                          <a href="#" className="btn project-button-1 whitespace-nowrap" target="_blank">Link Project</a>     
                          <a href="#" className="btn project-button-1 whitespace-nowrap" target="_blank">Live Demo</a>
                          <a href="#" className="btn project-button-2 whitespace-nowrap max-sm:hidden" target="_blank">Documentation</a>
                    </div>
                </div>

                {/* GAMBAR PROJECT */}
                <figure className="p-5 bg-zinc-900 rounded-2xl">
                    <div className="space-y-5">
                        <p className="project-picture-title italic">
                          <img src="/project_card_pages/DEMO_PICTURE.png" alt="" className="project-picture" />
                          description
                        </p>

                        <p className="project-picture-title italic">
                          <img src="/project_card_pages/DEMO_PICTURE.png" alt="" className="project-picture" />
                          description
                        </p>
                    </div>
                </figure>
                
            </div>
        
        </div>
        
        <Contact_Layout />
    </section>
  );
};
  
  export default project_null;