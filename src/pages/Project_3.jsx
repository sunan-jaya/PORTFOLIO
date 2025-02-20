import Navbar_Layout from "./Navbar_Layout";
import Contact_Layout from "./Contact_Layout";
import { useState } from "react";

const Project_3 = () => {

  const [language, setLanguage] = useState('en'); // KONTEN AWAL ID ATAU EN

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const translations = {
    // BAHASA INDONESIA
    id: {
      // ISI KONTEN SUB-TITLE 1 INDONESIA
      subTitle1_Paragraph1 : "Proyek ini merupakan pengembangan sistem informasi manajemen karyawan yang dirancang untuk memudahkan pengelolaan data karyawan.",
      subTitle1_Paragraph2 : "Sistem ini memungkinkan pengguna untuk melakukan operasi dasar seperti menambah, melihat, memperbarui, dan menghapus data karyawan melalui antarmuka yang user-friendly.",

      // ISI KONTEN SUB-TITLE 2 INDONESIA
      td_userInterface : "Antarmuka Pengguna: ",
      td_userInterface_desc : "Splash screen, halaman login, dan halaman utama dengan menu tambah, lihat, perbarui, dan hapus data.",

      td_database : "Database: ",
      td_database_desc : "Database 'ManajemenKaryawan' dengan dua tabel utama:", 
      td_database_li_1 : "Tabel login: ",
      td_database_li_1_desc : "Menyimpan informasi autentikasi pengguna (misal: username dan password).",
      td_database_li_2 : "Tabel karyawan:",
      td_database_li_2_desc : "Menyimpan data karyawan seperti nama, ID, dan informasi lainnya.",
      
      td_coreFeatures : "Fungsi Utama: ",
      td_coreFeatures_li_1 : "Menambah data: ",
      td_coreFeatures_li_1_desc : "Memungkinkan input data karyawan baru dengan pesan konfirmasi saat berhasil.",
      td_coreFeatures_li_2 : "Melihat data: ",
      td_coreFeatures_li_2_desc : "Menampilkan data karyawan yang tersimpan.",
      td_coreFeatures_li_3 : "Memperbarui data: ",
      td_coreFeatures_li_3_desc : "Memperbarui data karyawan dengan notifikasi perubahan berhasil.",
      td_coreFeatures_li_4 : "Menghapus data: ",
      td_coreFeatures_li_4_desc : "Menghapus data karyawan dan menampilkan konfirmasi penghapusan.",

      td_systemFlow : "Alur Sistem: ",
      td_systemFlow_desc : "Pengguna berinteraksi melalui antarmuka, sistem terhubung ke database untuk memproses operasi, dan memberikan feedback visual (pesan sukses/gagal).",
    },

    // ENGLISH LANGUAGE
    en: {
      // ISI KONTEN SUB-TITLE 1 ENGLISH
      subTitle1_Paragraph1 : "This project involves the development of an Employee Management Information System for PT. Persuasian Manufacture, designed to streamline employee data management.",
      subTitle1_Paragraph2 : "The system allows users to perform basic operations such as adding, viewing, updating, and deleting employee data through a user-friendly interface.",

      // ISI KONTEN SUB-TITLE 2 ENGLISH
      td_userInterface : "User Interface: ",
      td_userInterface_desc : "Splash screen, login page, and a main page with menus for adding, viewing, updating, and deleting data.",

      td_database : "Database: ",
      td_database_desc : "A 'ManajemenKaryawan' database with two primary tables:", 
      td_database_li_1 : "Login table: ",
      td_database_li_1_desc : "Stores user authentication details (e.g., username and password).",
      td_database_li_2 : "Employee table: ",
      td_database_li_2_desc : "Stores employee data such as name, ID, and other relevant information.",
      
      td_coreFeatures : "Core Features: ",
      td_coreFeatures_li_1 : "Add data: ",
      td_coreFeatures_li_1_desc : "Allows input of new employee data with success confirmation messages.",
      td_coreFeatures_li_2 : "View data: ",
      td_coreFeatures_li_2_desc : "Displays stored employee records.",
      td_coreFeatures_li_3 : "Update data: ",
      td_coreFeatures_li_3_desc : "Edits existing employee data with update success notifications.",
      td_coreFeatures_li_4 : "Delete data: ",
      td_coreFeatures_li_4_desc : "Removes employee records and confirms deletion.",

      td_systemFlow : "System Flow: ",
      td_systemFlow_desc : "Users interact via the interface, the system processes operations through the database, and provides visual feedback (success/error messages).",

    }
  };


  return (
    <section className="section">
        <Navbar_Layout onLanguageChange={handleLanguageChange} />
      
        <div className="container bg-zinc-800/50 p-7 max-sm:rounded-none rounded-2xl md:p-12">
            
            {/* JUDUL KONTENT */}
            <h1 className="project-title">Employee Management System Program</h1>

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
                          <h2 className="project-sub-title">Project Flow</h2>

                          <ol className="list-decimal list-inside space-y-3 project-paragraph">
                            <li>
                              <strong>{translations[language].td_userInterface}</strong>
                              {translations[language].td_userInterface_desc}
                            </li>
                            <li>
                              <strong>{translations[language].td_database}</strong>
                              {translations[language].td_database_desc}
                              <ul className="list-disc list-inside ml-5">
                                <li>
                                  <strong>{translations[language].td_database_li_1}</strong>
                                  {translations[language].td_database_li_1_desc}
                                </li>
                                <li>
                                  <strong>{translations[language].td_database_li_2}</strong>
                                  {translations[language].td_database_li_2_desc}
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>{translations[language].td_coreFeatures}</strong>
                              <ul className="list-disc list-inside ml-5">
                                <li>
                                  <strong>{translations[language].td_coreFeatures_li_1}</strong>
                                  {translations[language].td_coreFeatures_li_1_desc}
                                </li>
                                <li>
                                  <strong>{translations[language].td_coreFeatures_li_2}</strong>
                                  {translations[language].td_coreFeatures_li_2_desc}
                                </li>
                                <li>
                                  <strong>{translations[language].td_coreFeatures_li_3}</strong>
                                  {translations[language].td_coreFeatures_li_3_desc}
                                </li>
                                <li>
                                  <strong>{translations[language].td_coreFeatures_li_4}</strong>
                                  {translations[language].td_coreFeatures_li_4_desc}
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>{translations[language].td_systemFlow}</strong>
                              {translations[language].td_systemFlow_desc}
                            </li>
                          </ol>

                        </div>
                    </div>

                    <div className="flex gap-3 mt-5 mb-8 flex-wrap max-sm:justify-center">
                          <a href="https://github.com/sunan-jaya/Employee-Management-System-JAVA" className="btn project-button-1 whitespace-nowrap" target="_blank">Link Project</a>     
                          <a href="https://drive.google.com/file/d/1lrQw1dej_C6fBxB6_qkXyoOKnI9IpjQM/view?usp=sharing" className="btn project-button-1 whitespace-nowrap" target="_blank">Live Demo</a>
                          <a href="https://drive.google.com/drive/u/0/folders/1hV8CIS0EfxGC_oPCxK2V-K6hb8fS7y64" className="btn project-button-2 whitespace-nowrap max-sm:hidden" target="_blank">Documentation</a>
                    </div>
                </div>

                {/* GAMBAR PROJECT */}
                <figure className="p-5 bg-zinc-900 rounded-2xl">
                    <div className="space-y-5">
                        <p className="project-picture-title italic">
                          <iframe src="https://drive.google.com/file/d/1lrQw1dej_C6fBxB6_qkXyoOKnI9IpjQM/preview" allow="autoplay" className="project-video"></iframe>
                          Demonstration video.
                        </p>

                        <p className="project-picture-title italic">
                          <img src="/project_card_pages/project_3/gambar-2.png" alt="" className="project-picture" />
                          User interface.
                        </p>

                        <p className="project-picture-title italic">
                          <img src="/project_card_pages/project_3/gambar-3.png" alt="" className="project-picture" />
                          Add data feature.
                        </p>
                    </div>
                </figure>
                
            </div>
        
        </div>
        
        <Contact_Layout />
    </section>
  );
};
  
export default Project_3;