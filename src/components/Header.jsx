import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {

    const [navOpen, setnavOpen] = useState(false);

    return (
      <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
        
        <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
          
          {/* LOGO */}
          <h1>
            <a href="/" className="logo">
              <img src="/icon/logo-orange-400-gradient.svg" width={40} height={40} alt="Sunan Jaya" />
            </a>
          </h1>
  
          <div className="flex items-center gap-3 md:justify-self-center">
            {/* TOMBOL BLOG (TAMPIL DI MOBILE)*/}
            {/* <a href="https://linkedin.com/in/sunan-jaya-irmawan" className="btn btn-secondary md:hidden">Blog</a> */}

            {/* MENU HAMBURGER (HILANG DI DESKTOP [MD:HIDDEN]) */}
            <button className="menu-btn md:hidden" onClick={() => setnavOpen((prev) => !prev)}>
              <span className="material-symbols-rounded">
                {navOpen ? 'close' : 'menu'}
              </span>
            </button>

            {/* NAVBAR (TAMPIL DI DESKTOP, HILANG DI MOBILE) */}
            <Navbar navOpen={navOpen} className="hidden md:flex" />
          </div>

          {/* TOMBOL BLOG + CONTACT (DESKROP) */}
          <div className="hidden md:flex md:justify-self-end items-center gap-3">
            {/* <a href="https://linkedin.com/in/sunan-jaya-irmawan" className="btn btn-secondary">Blog</a> */}
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        
        </div>
      
      </header>
    );
  };
  
  export default Header;
  