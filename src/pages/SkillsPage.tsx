import SkillBadge from '../components/SkillBadge'
import type { Skill } from '../types'

const skills: Skill[] = [
  { id: 1, label: 'Python' },
  { id: 2, label: 'C++' },
  { id: 3, label: 'AWS' },
]

function SkillsPage() {
  return (
    <section className="page">
      <h2>Skills</h2>
      {skills.length > 0 ? (
        <ul className="skills">
          {skills.map(skill => (
            <SkillBadge key={skill.id} skill={skill} />
          ))}
        </ul>
      ) : (
        <p>No skills added yet.</p>
      )}
    </section>
  )
}

export default SkillsPage