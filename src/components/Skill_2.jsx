import SkillCard_2 from "./SkillCard_2";

const skillItem = [
    {
      imgSrc: '/icon/icon-figma.svg',
      label: 'Project Management',
      desc: '..'
    },
    {
      imgSrc: '/icon/icon-css3.svg',
      label: 'System Analyst',
      desc: '..'
    },
    {
      imgSrc: '/icon/icon-javascript.svg',
      label: 'Web Development',
      desc: '..'
    },
    {
      imgSrc: '/icon/icon-nodejs.svg',
      label: 'Journalism',
      desc: '..'
    },
    {
      imgSrc: '/icon/icon-expressjs.svg',
      label: 'Host / News Anchor',
      desc: '..'
    },
    {
      imgSrc: '/icon/icon-mongodb.svg',
      label: 'Content Writer',
      desc: 'Database'
    },
  ];

const Skill_2 = () => {
  return (
    <section className="section">

        <div className="container">
          
            <h2 className="headline-2 mb-3 text-center reveal-up">
                Skills
            </h2>

            <p className="text-zinc-400 text-center mt-2 mb-3 max-w-[50chh] reveal-up">
                Technical and soft skills honed through hands-on experience.
            </p>

            <div className="grid gap-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {
                  skillItem.map(({imgSrc, label, desc}, key) => (
                    <SkillCard_2 
                      key={key}
                      // imgSrc={imgSrc}
                      label={label}
                      // desc={desc}
                      classes="reveal-up"
                    />
                  ))
                }
            </div>

        </div>

    </section>
  )
}



export default Skill_2
