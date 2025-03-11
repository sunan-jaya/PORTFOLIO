import { ReactLenis } from 'lenis/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';

// PLUGIN GSAP
gsap.registerPlugin(useGSAP, ScrollTrigger);

// IMPOR COMPONENTS
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

// IMPOR PAGES
import Project_1 from "./pages/Project_1";
import Project_2 from "./pages/Project_2";
import Project_3 from "./pages/Project_3";
import Project_4 from "./pages/Project_4";
import Project_5 from "./pages/Project_5";

const App = () => {
  // ANIMASI GSAP
  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      });
    });
  });

  return (
    <Router>
      <ReactLenis root>
        <main>
          {/* ROUTE */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Hero />
                  <About />
                  <Service />
                  <Portfolio />
                  <Contact />
                </>
              }
            />

            {/* ROUTE KE HALAMAN PROYEK */}
            <Route path="/Movie-Streaming-Website" element={<Project_1 />} />
            <Route path="/Movie-Streaming-Apps" element={<Project_2 />} />
            <Route path="/Employee-Management-CRUD" element={<Project_3 />} />
            <Route path="/HR-Management-System" element={<Project_4 />} />
            <Route path="/Computer-Repair-System" element={<Project_5 />} />
          </Routes>
        </main>
      </ReactLenis>
    </Router>
  );
};

export default App;