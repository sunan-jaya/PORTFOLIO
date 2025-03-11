import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, ExternalLink } from 'lucide-react';

const Portfolio_Card_Wide = ({ imgSrc, title, tags, projectLink, category, description }) => {
  return (
    // DESIGN PROJECT CARD
    <motion.div
      className="flex flex-col h-full group relative overflow-hidden rounded-2xl bg-zinc-800/50 border border-zinc-700/30 hover:border-orange-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
    >
      {/* BAGIAN GAMBAR */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500"
          loading="lazy"
        />

        {/* BAYANGAN GRADIENT GAMBAR (GAMBAR AKAN TERLIHAT GELAP/TERANG TERGANTUNG WARNA GRADIENT) */}
        <div className="inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-900/30 to-transparent" />

        {/* CATEGORY */}
        <span className="absolute top-2 right-4 px-3 py-1 rounded-full bg-zinc-800/50 text-orange-400 text-xs font-medium uppercase tracking-wider">
          {category}
        </span>
      </div>

      {/* INFORMASI PROJECT */}
      <div className="p-6 space-y-4 relative flex flex-grow flex-col">
        {/* ISI KONTEN */}
        <div className="space-y-3 flex-grow">
          
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <Code className="text-zinc-400 group-hover:text-orange-400 transition-colors" size={24} />
          </div>

          <p className="text-zinc-400 text-sm line-clamp-2">{description}</p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-xs rounded-full bg-zinc-700/50 text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
          
        </div>
      </div>

      {/* LINK KE PROJECT */}
      <Link
        to={projectLink}
        className="absolute inset-0 z-10"
        target="_top"
        aria-label={`View ${title} project`}
      >
        <div className="absolute bottom-4 right-4 bg-orange-500/20 text-orange-400 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ExternalLink size={20} />
        </div>
      </Link>
    </motion.div>
  );
};

Portfolio_Card_Wide.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Portfolio_Card_Wide;