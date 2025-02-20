// MODUL
import {ReactLenis} from 'lenis/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//GSAP PLUGIN
gsap.registerPlugin(useGSAP, ScrollTrigger);

// IMPOR KOMPONEN KESINI
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from './components/Experience';
import Skill from "./components/Skill";
import Skill_2 from "./components/Skill_2";
import Work from "./components/Work";
import Contact from "./components/Contact";

// IMPOR PAGES KESINI
import Project_1 from "./pages/Project_1";
import Project_2 from "./pages/Project_2";
import Project_3 from "./pages/Project_3";
import Project_4 from "./pages/Project_4";
import Project_5 from "./pages/Project_5";

const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');
    
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: { trigger: element, start: '-200 bottom', end: 'bottom 80%', scrub: true }, y: 0, opacity: 1, duration: 1, ease: 'power2.out'
      })
    });
  });

  return (
    <Router>
      <ReactLenis root>
        
        <main>

          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <Hero />
                <About />
                <Skill_2 />
                <Experience />
                <Work />
                <Contact />
              </>
            } />

            {/* ROUTE KE FOLDER PAGES */}
            <Route path="/project_1" element={<Project_1 />} />
            <Route path="/project_2" element={<Project_2 />} />
            <Route path="/project_3" element={<Project_3 />} />
            <Route path="/project_4" element={<Project_4 />} />
            <Route path="/project_5" element={<Project_5 />} />

          </Routes>

          

        </main>
      </ReactLenis>
    </Router>
  );
};

export default App;
