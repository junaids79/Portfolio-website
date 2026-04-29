const stats = [
  { num: '8.0', label: 'CGPA at JPNCE' },
  { num: '4+', label: 'Months of internship experience' },
  { num: 'MERN', label: 'Primary tech stack' },
  { num: 'CSE', label: "Bachelor of Technology · 2027" },
]

export default function About() {
  return (
    <section id="about" className="section">
      <p className="sec-label">About me</p>
      <div className="about-grid">
        <div className="about-text">
          <h2 className="sec-heading">
            Building the web,
            <br />
            one solution at a time.
          </h2>
          <p>
            I&apos;m Junaid Shareef, a Computer Science undergraduate at JPNCE (Batch of 2027)
            with a passion for building full-stack web applications using the MERN stack.
          </p>
          <p>
            I love solving algorithmic problems, writing clean code, and shipping products that
            people actually use. Currently interning as a Full Stack Developer at Digital Guruji,
            where I focus on front-end development.
          </p>
          <p>
            I&apos;m actively looking for SDE internships and graduate roles where I can contribute
            meaningfully and grow fast.
          </p>
        </div>
        <div className="about-stats">
          {stats.map(({ num, label }) => (
            <div key={label} className="stat-card">
              <div className="stat-num">{num}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
