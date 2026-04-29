const experiences = [
  {
    period: 'May 2025 – Aug 2025',
    duration: '4 months',
    role: 'Full Stack Developer Intern',
    company: 'Digital Guruji · Remote, New Delhi',
    description:
      'Worked on front-end development tasks, building responsive user interfaces and contributing to web application features. Gained hands-on experience with the MERN stack in a professional environment.',
    tags: ['React.js', 'Node.js', 'Front-End Development', 'Remote'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="sec-label">Experience</p>
      <h2 className="sec-heading">Where I&apos;ve worked</h2>
      <div className="exp-timeline">
        {experiences.map(({ period, duration, role, company, description, tags }) => (
          <div key={role} className="exp-item">
            <div className="exp-date">
              {period.split('–').map((part, i) => (
                <span key={i}>{part.trim()}{i === 0 ? ' –' : ''}<br /></span>
              ))}
              <span className="exp-duration">{duration}</span>
            </div>
            <div className="exp-content">
              <p className="exp-role">{role}</p>
              <p className="exp-company">{company}</p>
              <p className="exp-desc">{description}</p>
              <div className="exp-tags">
                {tags.map((tag) => (
                  <span key={tag} className="exp-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
