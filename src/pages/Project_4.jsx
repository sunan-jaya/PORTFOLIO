import Navbar_Layout from "./Navbar_Layout";
import Contact_Layout from "./Contact_Layout";
import { useState } from "react";

const Project_4 = () => {

  const [language, setLanguage] = useState('en'); // KONTEN AWAL ID ATAU EN

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const translations = {
    // BAHASA INDONESIA
    id: {
      // ISI KONTEN SUB-TITLE 1
      subTitle1_Paragraph1 : "Employee Management System adalah aplikasi berbasis web yang dibangun menggunakan PHP, dirancang untuk menyederhanakan operasi HR dan manajemen data karyawan. Sistem ini menyediakan platform terpusat bagi administrator untuk menyimpan, memperbarui, dan memantau informasi karyawan, kehadiran, serta detail departemen.",
      subTitle1_Paragraph2 : "Tujuan sistem ini adalah untuk menggantikan proses pencatatan manual dengan alur kerja otomatis, mengurangi kesalahan, dan meningkatkan efisiensi organisasi. Dengan antarmuka yang intuitif, sistem ini cocok untuk bisnis yang mencari solusi hemat biaya untuk mengelola tenaga kerja secara efisien.",

      // ISI KONTEN SUB-TITLE 1
      li1_Title : "Manajemen Data Karyawan",
      li1 : ": Tambah, edit, hapus, dan lihat profil karyawan dengan detail seperti nama, jabatan, dan informasi kontak.",

      li2_Title : "Tracking Absensi Karyawan",
      li2 : ": Catat dan pantau kehadiran karyawan melalui timesheet atau log check-in/check-out.",

      li3_Title : "Manajemen Departemen",
      li3 : ": Kelola karyawan berdasarkan departemen (contoh: HR, IT Programmer) untuk pelaporan yang terstruktur.",

      li4_Title : "Role Pengguna",
      li4 : ": Level akses (Super Admin, HR Admin, Employee) untuk menjaga keamanan data.",

      li5 : "Dan masih banyak fitur lainnya...",
    },

    // BAHASA INGGRIS
    en: {
      // ISI KONTEN SUB-TITLE 1
      subTitle1_Paragraph1 : "The Employee Management System is a web-based application built using PHP, designed to simplify HR operations and employee data management. It provides a centralized platform for administrators to store, update, and monitor employee information, attendance, and departmental details.",
      subTitle1_Paragraph2 : "The system aims to replace manual record-keeping processes with automated workflows, reducing errors and improving organizational efficiency. With an intuitive interface, it caters to businesses seeking a cost-effective solution to manage their workforce seamlessly.",

      // ISI KONTEN SUB-TITLE 2
      li1_Title : "Employee Data Management",
      li1 : ": Add, edit, delete, and view employee profiles with details like name, position, and contact information.",

      li2_Title : "Attendance Tracking",
      li2 : ": Record and monitor employee attendance through timesheets or check-in/check-out logs.",

      li3_Title : "Department Management",
      li3 : ": Organize employees into departments (e.g., HR, Information Technology) for streamlined reporting.",

      li4_Title : "User Roles & Permissions",
      li4 : ": Define access levels (Super Admin, HR Admin, Employee) to ensure data security.",

      li5 : "And many more...",
    }
  };


  return (
    <section className="section">
        <Navbar_Layout onLanguageChange={handleLanguageChange} />
      
        <div className="container bg-zinc-800/50 p-7 max-sm:rounded-none rounded-2xl md:p-12">
            
            {/* JUDUL KONTENT */}
            <h1 className="project-title">HR Management System</h1>

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
                          <a href="https://github.com/sunan-jaya/Employee-Management-System-PHP" className="btn project-button-1 whitespace-nowrap" target="_blank">Link Project</a>     
                          <a href="http://employee-management-system.infinityfreeapp.com/" className="btn project-button-1 whitespace-nowrap" target="_blank">Live Demo</a>
                          <a href="https://drive.google.com/drive/folders/1JsEbJG4PV5LPTVM8t9swoLVgwejN6lv_?usp=drive_link" className="btn project-button-2 whitespace-nowrap max-sm:hidden" target="_blank">Documentation</a>
                    </div>
                </div>

                {/* GAMBAR PROJECT */}
                <figure className="p-5 bg-zinc-900 rounded-2xl">
                    <div className="space-y-5">
                        <p className="project-picture-title italic">
                          <img src="/project_card_pages/project_4/gambar-1.png" alt="" className="project-picture" />
                          Project homepage.
                        </p>

                        <p className="project-picture-title italic">
                          <img src="/project_card_pages/project_4/gambar-2.png" alt="" className="project-picture" />
                          Dashboard pages.
                        </p>
                    </div>
                </figure>
                
            </div>
        
        </div>
        
        <Contact_Layout />
    </section>
  );
};
  
  export default Project_4;