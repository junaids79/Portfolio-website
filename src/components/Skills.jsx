const skillCategories = [
  { title: 'Frontend', skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'] },
  { title: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Database', skills: ['MongoDB', 'Mongoose'] },
  { title: 'Languages', skills: ['JavaScript', 'C++', 'Python', 'Java'] },
  { title: 'Tools & Platforms', skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Postman'] },
  { title: 'CS Fundamentals', skills: ['DSA', 'OOP', 'DBMS', 'OS', 'Computer Networks'] },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="sec-label">Skills</p>
      <h2 className="sec-heading">Technologies I work with</h2>
      <div className="skills-grid">
        {skillCategories.map(({ title, skills }) => (
          <div key={title} className="skills-category">
            <p className="skills-cat-title">{title}</p>
            <div className="tags">
              {skills.map((skill) => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
