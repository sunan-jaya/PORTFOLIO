import PropTypes from "prop-types";

const SkillCard_2 = ({imgSrc, label, desc, classes}) => {
  return (
    <div className={'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 justify-center text-xl hover:bg-orange-400 hover:text-zinc-900 transition-colors group ' + classes}>

    <div className="mt-2 mb-2 font-semibold">
        <h3 className="">{label}</h3>
    </div>

    </div>
  )
}

SkillCard_2.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default SkillCard_2