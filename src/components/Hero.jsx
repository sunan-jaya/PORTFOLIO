import { ButtonPrimary, ButtonOutline } from "./Button";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="pt-20 lg:pt-36 lg:pb-24">
      {/* BACKGROUND WALLPAPER */}
      <div className="absolute inset-0 lg:bg-[radial-gradient(circle_at_center,#f59e0b_0%,transparent_70%)] opacity-20 blur-3xl" />

      <div className="container relative">
        {/* BAGIAN STATUS */}
        <div className="flex items-center gap-3 mb-5">
          {/* GAMBAR PROFIL */}
          <motion.figure
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="img-box w-10 h-10 rounded-full border-2 border-orange-400/20 hover:border-orange-400/40 transition-colors lg:hidden"
          >
            <img
              src="/images/avatar-1.png"
              alt="Sunan Jaya Potrait"
              className="img-cover"
            />
          </motion.figure>

          {/* STATUS AVAILABLE/UNAVAILABLE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 px-5 py-2 bg-zinc-800/50 rounded-full backdrop-blur-lg border border-zinc-700/50 hover:border-orange-400/30 transition-colors cursor-default tracking-wider"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium">Available for work</span>
          </motion.div>
        </div>

        {/* BAGIAN HERO */}
        <div className="max-w-4xl">
          {/* HEADLINE ATAS */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="headline-4 text-orange-400 mt-5"
          >
            Hello, I am
          </motion.p>

          {/* MAIN HEADLINE (NAMA) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-2 mb-2"
          >
            Sunan Jaya
          </motion.h1>

          {/* HEADLINE WORKS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="headline-3 mb-12"
          >
            <ReactTyped
              strings={[
                "IT Business Analyst",
                "Project Management Enthusiast",
                "Tech Content Writer",
                "Journalist",
              ]}
              typeSpeed={35}
              backSpeed={25}
              backDelay={1500}
              loop
              className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent"
            />
          </motion.div>

          {/* BUTTON */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ButtonPrimary
              href="#contact"
              // target="_blank"
              label="Connect with me"
              icon="arrow_outward"
            />

            <ButtonOutline
              href="https://drive.google.com/file/d/1SzaqVNCIhpAaOIkP6obMCejSaHOApkOU/view?usp=drive_link"
              target="_blank"
              label="My resume"
              icon="download"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;