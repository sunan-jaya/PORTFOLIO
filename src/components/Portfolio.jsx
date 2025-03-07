import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Portfolio_Card_Square from "./Portfolio_Card_Square";
import Portfolio_Card_Wide from "./Portfolio_Card_Wide";

// DATA PROJECT PORTFOLIO
const project = [
  {
    imgSrc: '/project_card/project_5_wide.png', //SISA MENGGANTI GAMBAR PROJECT CARD (SQUARE/WIDE) LALU TAUTKAN DENGAN Portfolio_Card_XXX
    title: 'Computer Repair System',
    category: 'website',
    tags: ['Website', 'PHP'],
    projectLink: '/Computer-Repair-System',
    description: 'Comprehensive web application for managing computer repair using Naïve Baiyes method.',
  },
  {
    imgSrc: '/project_card/project_4_wide.png',
    title: 'HR Management System',
    category: 'website',
    tags: ['Website', 'PHP'],
    projectLink: '/HR-Management-System',
    description: 'Streamlined human resources management platform.',
  },
  {
    imgSrc: '/project_card/project_3_wide.png',
    title: 'Employee Management CRUD',
    category: 'other',
    tags: ['Java Program'],
    projectLink: 'Employee-Management-CRUD',
    description: 'Simple project with CRUD operations.',
  },
  {
    imgSrc: '/project_card/project_2_wide.png',
    title: 'Movie Streaming Apps',
    category: 'apps',
    tags: ['Mobile Apps', 'Kotlin'],
    projectLink: '/Movie-Streaming-Apps',
    description: 'Intuitive mobile application for seamless movie streaming.',
  },
  {
    imgSrc: '/project_card/project_1_wide.png',
    title: 'Movie Streaming Web',
    category: 'website',
    tags: ['Responsive Design'],
    projectLink: '/Movie-Streaming-Website',
    description: 'Responsive web design for movie streaming.',
  },
];

const Portfolio = () => {
  // STATE UNTUK FILTER SUPAYA AKTIF
  const [activeFilter, setActiveFilter] = useState('all'); //SET FILTER DI AWAL MENJADI ALL
  const categories = ['all', 'website', 'apps', 'other'];

  // LOGIKA FILTER PROJECT
  const filteredProject = project.filter(work =>
    activeFilter === 'all' || work.category === activeFilter
  );

  return (
    <section id="portfolio" className="section">
      <div className="container mx-auto px-4">
        {/* BAGIAN HEADER */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio Highlights
          </motion.h2>

          {/* TOMBOL FILTER */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {categories.map(category => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? 'bg-orange-400/10 text-orange-400 border-2 border-orange-400/20'
                    : 'bg-zinc-800/20 text-zinc-400 hover:bg-zinc-800/30 border-2 border-transparent'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* GRID PROYEK */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredProject.map((project) => (
              <motion.div
                key={project.projectLink}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Portfolio_Card_Wide //TINGGAL GANTI KE SQUARE/WIDE
                  imgSrc={project.imgSrc}
                  title={project.title}
                  tags={project.tags}
                  projectLink={project.projectLink}
                  category={project.category}
                  description={project.description}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;