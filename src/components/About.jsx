
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
      <div className={styles.grid}>
        <div className={styles.text}>
          <h2 className="sec-heading">
            Building the web,
            <br />
            one solution at a time.
          </h2>
          <p>
            I am Junaid Shareef, a Computer Science undergraduate at JPNCE (Batch of 2027)
            with a passion for building full-stack web applications using the MERN stack.
          </p>
          <p>
            I love solving algorithmic problems, writing clean code, and shipping products that
            people actually use. Currently interning as a Full Stack Developer at Digital Guruji,
            where I focus on front-end development.
          </p>
          <p>
            I am actively looking for SDE internships and graduate roles where I can contribute
            meaningfully and grow fast.
          </p>
        </div>
        <div className={styles.stats}>
          {stats.map(({ num, label }) => (
            <div key={label} className={styles.statCard}>
              <div className={styles.statNum}>{num}</div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
