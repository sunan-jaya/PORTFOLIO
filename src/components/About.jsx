import { motion } from 'framer-motion';

// DATA LABEL & LOGO
const aboutItems = [
  { label: 'Project done', number: 5 },
  { label: 'Years of experience', number: 1 },
];

// DATA EXPERIENCE
const experienceData = [
  {
    id: 4,
    position: 'IT Business Analyst Intern',
    company: 'PT. Malewa Intermedia Indonesia',
    period: '2024',
    responsibilities: [
      'I take both position as a Business Analyst and Quality Assurance for 6 months. I manage to complete 2 projects during my internships period.',
    ],
  },
  {
    id: 3,
    position: 'Journalist',
    company: 'LPM Profesi UNM',
    period: '2023-2024',
    responsibilities: [
      'I am a part of Journalism organization for a year and a half. I take position as News Reporter for 9 months, Photojournalist for 3 months, and Social Media Admin for 5 months.',
    ],
  },
  {
    id: 2,
    position: 'Elementary School Educator',
    company: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbud)',
    period: '2023',
    responsibilities: [
      'I take a part as a Team Leader of 5 people in Kampus Mengajar - Batch 6 programs where I was assigned to an elementary school for 5 months to address literacy and numeracy needs.',
    ],
  },
  {
    id: 1,
    position: 'Lecture Assistant',
    company: 'Universitas Negeri Makassar',
    period: '2023',
    responsibilities: [
      'Assisted the Computer Networking Course with the Lecturer to develop course materials and instructional content.',
    ],
  },
];

// DATA TECH SKILLS
const skillItems = [
  { imgSrc: '/icon/icon-html.svg', label: 'HTML' },
  { imgSrc: '/icon/icon-css3.svg', label: 'CSS' },
  { imgSrc: '/icon/icon-react.svg', label: 'React' },
  { imgSrc: '/icon/icon-tailwindcss.svg', label: 'TailwindCSS' },
  { imgSrc: '/icon/icon-canva.svg', label: 'Canva' },
  { imgSrc: '/icon/icon-filmora.svg', label: 'Filmora' },
];

// CONSTANT ANIMASI
const animationConfig = {
  duration: 0.6,
  staggerDelay: 0.1,
};

const About = () => {
  const { duration, staggerDelay } = animationConfig;

  return (
    <section id="about" className="section">
      <div className="container cursor-default">
        {/* FLEX BAGIAN ATAS (BIOGRAFI & GAMBAR PROFIL) */}
        <div className="lg:flex gap-5">          
          {/* BAGIAN KIRI ATAS - BIOGRAFI */}
          <motion.div
            className="flex-1 bg-zinc-800/50 p-8 md:p-12 rounded-3xl shadow-xl border border-zinc-700/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration }}
            whileHover={{ boxShadow: '0 0 25px rgba(251, 146, 60, 0.3)' }}
          >
            {/* BIOGRAFI */}
            <h3 className="headline-3 text-orange-400 mb-4">About Me</h3>
            <p className="text-zinc-300 mb-4 md:mb-1 lg:text-[16px] text-justify leading-relaxed">
              Hi! I'm Sunan Jaya, person with a strong enthusiasm in Project Management roles. I have managed various
              projects, driven by my passion for project management field.
              <br />
              <br />
              I'm always eager for new opportunities where my leadership and quality management skills can contribute to
              innovative and dynamic projects.
            </p>

            {/* LABEL & LOGO */}
            <div className="flex flex-wrap items-center gap-4 md:gap-7 lg:mt-20">
              {/* LABEL */}
              {aboutItems.map(({ label, number }, index) => (
                <motion.div
                  key={label}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: duration * (index + 1) }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl md:text-4xl font-semibold group-hover:text-orange-400 transition-all">{number}</span>
                    <span className="text-orange-400 font-semibold md:text-3xl">+</span>
                  </div>
                  <p className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">{label}</p>
                </motion.div>
              ))}
              {/* LOGO */}
              <motion.img
                src="/icon/logo-white.svg"
                alt="Logo"
                width={30}
                height={30}
                className="ml-auto md:w-[50px] md:h-[50px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: duration }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              />
            </div>
          </motion.div>

          {/* BAGIAN KANAN ATAS - GAMBAR PROFIL */}
          <motion.figure
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(251, 146, 60, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            className="max-md:mt-5 sm:mt-8 lg:mt-0 max-w-[365px] rounded-3xl overflow-hidden shadow-xl mx-auto lg:mx-0 group order-1"
          >
            <img
              src="/images/hero-banner.jpg"
              alt="Sunan Jaya"
              className="object-cover h-full w-full transition-transform duration-100 group-hover:scale-105"
            />
          </motion.figure>
        </div>

        {/* FLEX BAGIAN BAWAH (EXPERIENCE & TECH SKILLS) */}
        <div className="lg:flex gap-7 mt-5">
          {/* BAGIAN KANAN BAWAH - EXPERIENCE */}
          <motion.div
            className="flex-1 bg-zinc-800/50 p-7 rounded-3xl shadow-xl border border-zinc-700/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration }}
            whileHover={{ boxShadow: '0 0 25px rgba(251, 146, 60, 0.3)' }}
          >
            <h3 className="headline-3 text-zinc-300 mb-4">Experience</h3>

            {/* BOX DALAM KONTAINER EXEPERIENCE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: duration * index + 0.4 }}
                  whileHover={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
                  className="bg-zinc-700/20 p-4 rounded-lg hover:bg-zinc-700/40 transition-all duration-500 group"
                >
                  <h4 className="font-semibold text-orange-400 text-sm mb-1 group-hover:text-orange-300">{exp.position}</h4>
                  <p className="text-zinc-400 text-xs mt-1 group-hover:text-zinc-300">{exp.period}</p>
                  <div className="mt-3 max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 bg-zinc-800/90 p-2 rounded-lg">
                    <p className="text-zinc-400 text-xs">{exp.responsibilities}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* BAGIAN KIRI BAWAH - TECH SKILLS */}
          <motion.div
            className="bg-zinc-800/50 p-7 rounded-2xl mt-7 lg:mt-0 lg:max-w-[360px] shadow-xl transition-all duration-100"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration }}
            whileHover={{ boxShadow: '0 0 25px rgba(251, 146, 60, 0.3)' }}
          >
            <h3 className="headline-3 text-zinc-300 mb-4">Tech Skills</h3>

            {/* BOX DALAM KONTAINER TECH SKILLS */}
            <div className="grid grid-cols-2 gap-4">
              {skillItems.map((skill) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: duration }}
                  className="bg-zinc-700/20 p-3 rounded-lg flex items-center gap-3 hover:bg-zinc-700/40 transition-all duration-300"
                >
                  <img src={skill.imgSrc} alt={skill.label} className="w-6 h-6 object-contain" />
                  <p className="text-sm font-medium text-zinc-100">{skill.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;