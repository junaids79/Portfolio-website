const projects = [
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio to showcase skills, experience, and projects. Deployed on Vercel with clean, minimal UI.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { label: 'Live ↗', href: 'https://portfolio-website-nu-two-31.vercel.app/' },
      { label: 'GitHub ↗', href: 'https://github.com/junaids79/Portfolio-website' },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: 'VaultX Password Manager',
    description:
      'A full-stack password manager featuring client-side AES encryption, secure authentication, password generation, and a modern React-based interface.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
       links: [{ label: 'Live ↗', href: ' https://password-manager-5ofy-pi.vercel.app/' },
    { label: 'GitHub ↗', href: 'https://github.com/junaids79/VaultX-Manager' }],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: 'LeetCode Profile',
    description:
      'Curated solutions to 150+ LeetCode problems covering arrays, trees, graphs, DP and more ',
    tags: ['C++', 'DSA', 'LeetCode'],
    links: [{ label: 'LeetCode ↗', href: 'https://leetcode.com/u/junaidshareef07/' }],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="sec-label">Projects</p>
      <h2 className="sec-heading">Things I&apos;ve built</h2>
      <div className="projects-grid">
        {projects.map(({ title, description, tags, links, icon }) => (
          <div key={title} className="project-card">
            <div className="project-icon">{icon}</div>
            <p className="project-title">{title}</p>
            <p className="project-desc">{description}</p>
            <div className="tags" style={{ marginBottom: '10px' }}>
              {tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <div className="project-links">
              {links.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  {label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
