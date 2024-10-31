import SkillProvider from './SkillProvider'

interface Skill {
  skill_name: string
  Image: string
  width: number
  height: number
}

const SkillCategory = ({ skills }: { skills: Skill[] }) => (
  <div className='flex justify-around flex-wrap items-center gap-5'>
    {skills.map((skill, i) => (
      <SkillProvider
        index={i}
        key={i}
        src={skill.Image}
        width={skill.width}
        height={skill.height}
        name={skill.skill_name}
      />
    ))}
  </div>
)

export default SkillCategory
