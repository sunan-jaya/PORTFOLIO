import WorkCard from "./WorkCard";

const works = [
  {
    imgSrc: '/project_card/project_5.png',
    title: 'Computer Repair System',
    tags: ['Website', 'PHP', 'CodeIgniter'],
    projectLink: '/project_5'
  },
  {
    imgSrc: '/project_card/project_4.png',
    title: 'HR Management System',
    tags: ['Website', 'PHP'],
    projectLink: '/project_4'
  },
  {
    imgSrc: '/project_card/project_3.png',
    title: 'Employee Management CRUD',
    tags: ['Program' ,'JAVA'],
    projectLink: '/project_3'
  },
  {
    imgSrc: '/project_card/project_2.png',
    title: 'Movie Streaming Apps',
    tags: ['App', 'Flutter'],
    projectLink: '/project_2'
  },
  {
    imgSrc: '/project_card/project_1.png',
    title: 'Movie Streaming Web',
    tags: ['Website', 'HTML', 'CSS'],
    projectLink: '/project_1'
  },
  ];

const Work = () => {
  return (
    <section id="work" className="section">
        <div className="container">

            <h2 className="headline-2 mb-3 text-center reveal-up">
              Portfolio Highlights
            </h2>

            <p className="text-zinc-400 text-center mt-2 mb-8 sm:mb-5 max-w-[50chh] reveal-up">
              Following projects briefly described with links to code repositories and documentations in it.
            </p>

            {/* INI KALAU MAU GANTI GRID PROJECT, SISA GANTI MINMAX */}
            <div className="project-card grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] "> 
                {works.map(({imgSrc, title, tags, projectLink}, key) => (
                    
                    <WorkCard
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    classes="reveal-up"
                    />
                ))}
            </div>

        </div>
    </section>
  )
}

export default Work
