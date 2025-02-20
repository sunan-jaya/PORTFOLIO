import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from './ExperienceCard';

const experience_card = [
  {
    icon: <div className="w-full h-full flex items-center justify-center lg:text-2xl text-xl">👩‍💻</div>,
    title: 'IT Business Analyst Intern',
    location: 'Makassar, IND',
    date: '2024',
    desc: 'I take both position as a Business Analyst and Quality Assurance for 6 months. I manage to complete 2 projects during my internships period.',
    tech: ['Project Management', 'System Requirement Specification']
  },
  {
    icon: <div className="w-full h-full flex items-center justify-center lg:text-2xl text-xl">👩‍💼</div>,
    title: 'Journalist',
    location: 'Makassar, IND',
    date: '2023 - 2024',
    desc: 'I am a part of Journalism organization for a year and a half. I take position as News Reporter for 9 months, Photojournalist for 3 months, and Social Media Admin for 5 months.',
    tech: ['Content Writer', 'News Anchor', 'Photography', 'Social Media Management']
  },
  {
    icon: <div className="w-full h-full flex items-center justify-center lg:text-2xl text-xl">👩‍🏫</div>,
    title: 'Elementary School Educator',
    location: 'Makassar, IND',
    date: '2023',
    desc: 'I take a part as a Team Leader of 5 people in Kampus Mengajar - Batch 6 programs where I was assigned to an elementary school for 5 months to address literacy and numeracy needs',
    tech: ['Leadership', 'SDGs', 'Teaching']
  },
  {
    icon: <div className="w-full h-full flex items-center justify-center lg:text-2xl text-xl" >👩‍🏫</div>,
    title: 'Lecture Assistant',
    location: 'Makassar, IND',
    date: '2023',
    desc: 'Assisted the Computer Networking Course with the Lecturer to develop course materials and instructional content.',
    tech: ['Teaching']
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        
          <h2 className="headline-2 mb-3 text-center  reveal-up">
              Experience
          </h2>

          <p className="text-zinc-400 text-center mt-2 mb-8 sm:mb-5 max-w-[50chh] reveal-up">
              Following projects briefly described with links to code repositories in it.
          </p>

        {/* PROJECT CARD (DARI Experience_Card.jsx) */}
        <VerticalTimeline lineColor="rgba(255, 255, 255, 0.1)" className="lg:min-w-full reveal-up">
          {experience_card.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}  />
          ))}
        </VerticalTimeline>


      </div>
    </section>
  )
}

export default Experience;