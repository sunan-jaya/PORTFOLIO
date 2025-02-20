const aboutItems = [
    {
      label: 'Project done',
      number: 5
    },
    {
      label: 'Years of experience',
      number: 1
    },
  ];

const About = () => {
  return (
    <section id="about" className="section">
        <div className="container lg:flex gap-7">
          
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                {/* BIOGRAFI */}
                <p className="text-zinc-300 mb-4 md:mb-1 md:text-xl md:max-w-max text-justify">
                Hi! I&apos;m Sunan Jaya, person with a strong enthusiasm in Project Management roles. I have managed various projects, driven by my passion for project management field.
                <br />
                <br />
                {/* In addition, my background as a <a href="https://profesi-unm.com/" target="_blank" className="font-extrabold text-orange-400">Journalist</a> honed my skills in communication, research, and attention to detail, all of which have proven invaluable in project management roles. */}
                
                I&apos;m always eager for a new opportunities where my leadership and quality management skills can contribute to innovative and dynamic projects.
                </p>

                {/* CONTAINER BUAT LABEL & LOGO */}
                <div className="flex flex-wrap items-center gap-4 md:gap-7 lg:mt-32">
                    {/* LABEL */}
                    {
                        aboutItems.map(({label, number}, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2 ">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-orange-400 font-semibold md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }

                    {/* LOGO DALAM CONTAINER BIOGRAFI */}
                    <img src="/icon/logo-white.svg" alt="Logo" className="ml-auto md:w-[40px] md:h-[40px]" width={30} height={30} />
                </div>

            </div>

            {/* GAMBAR PROFIL */}
            <figure className="max-md:mt-5 max-md:items-center max-w-sm h-full bg-gradient-to-t from-orange-300 via-100% via-orange-300/40 rounded-[60px] overflow-hidden max-sm:rounded-[20px] max-sm:w-[300px] mx-auto mt-2 reveal-up">
                  <img src="/images/hero-banner-2.jpg"
                       alt="Sunan Jaya"
                       className="w-full" />
            </figure>
            

        </div>

    </section>
  )
}

export default About
