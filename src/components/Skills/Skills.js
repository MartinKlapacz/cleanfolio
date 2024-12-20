import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Frameworks</h2>
      <ul className='skills__list'>
        {skills.map(([skill, link]) => (
            <a key={uniqid()} href={link} target='_blank' rel="noopener noreferrer">
              <li  className='skills__list-item btn btn--plain'>
                {skill}
              </li>
            </a>
        ))}
      </ul>
    </section>
  )
}

export default Skills
