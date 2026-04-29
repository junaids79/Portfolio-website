const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <span className="nav-logo">JS</span>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
