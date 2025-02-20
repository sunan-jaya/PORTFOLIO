import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import PropTypes from 'prop-types';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ 
        background: 'rgb(39 39 42)',
        color: '#fff',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '0.5rem',
        boxShadow: 'none',
      }}
      contentArrowStyle={{ borderRight: '7px solid rgb(63 63 70)' }}
      iconStyle={{ 
        background: 'rgb(63 63 70)',
        boxShadow: 'none',
      }}
      icon={experience.icon || <div className="w-full h-full flex items-center justify-center text-xl">💼</div>}
    >

      {/* TITLE */}
      <h3 className="text-orange-400 font-bold text-xl mb-2">{experience.title}</h3>
      

      {/* COMPANY */}
      <h2 className="text" >{experience.company}</h2>
      
      {/* LOCATION & DATE */}
      <div className="flex justify-between items-center text-zinc-400 !mt-0 mb-4">
        <span className="text-md">{experience.location}</span>
        <span className="text-md">{experience.date}</span>
      </div>

      {/* DESCRIPTION */}
      <div className="text-zinc-300 text-justify space-y-2 text-[0.9rem]">
        {experience.desc.split('\n').map((line, i) => (
          <p key={i} className="leading-relaxed">{line}</p>
        ))}
      </div>

      {/* TECH TAGS */}
      {experience.tech && (
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.tech.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 text-sm rounded-[5px] bg-orange-400/20 text-zinc-30 border border-orange-400/30"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </VerticalTimelineElement>
  )
}

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string),
    icon: PropTypes.element
  }).isRequired
}

export default ExperienceCard;