import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0 ">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* LOGO */}
          <a 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <img 
              src="/icon/logo-orange-400-gradient.svg" 
              className="w-11 h-11 transition-transform group-hover:scale-110" 
              alt="Logo"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            <Navbar hideMobileItems={true} />
            <a 
              href="#contact" 
              className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-300 text-base text-zinc-900 font-semibold 
              hover:from-amber-300 hover:to-orange-400 transition-all shadow-lg hover:shadow-orange-400/20"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setNavOpen(!navOpen)}
            className="menu-btn md:hidden duration-700"
            aria-label="Toggle navigation"
          >
            <span className="material-symbols-rounded">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {navOpen && (
        <div className="md:hidden absolute top-16 right-4 rounded-xl overflow-hidden bg-zinc-800/90 backdrop-blur-md shadow-lg border border-zinc-700/30 transition-all duration-300">
          <Navbar 
            mobile={true}
            onClose={closeNav}
            className="p-2"
          />
        </div>
      )}
    </header>
  );
};

export default Header;