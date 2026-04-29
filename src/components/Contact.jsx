const contactItems = [
  {
    label: 'junaids5954@gmail.com',
    href: 'mailto:junaids5954@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: '+91 8790540796',
    href: 'tel:+918790540796',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Rajendranagar, Hyderabad, Telangana',
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'linkedin.com/in/junaid-shareef',
    href: 'https://www.linkedin.com/in/junaid-shareef-2a775b2b9/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'github.com/junaids79',
    href: 'https://github.com/junaids79',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <p className="sec-label">Contact</p>
      <div className="contact-grid">
        <div className="contact-text">
          <h2 className="sec-heading">Let&apos;s work together.</h2>
          <p>
            I&apos;m actively looking for SDE internships and entry-level full-stack developer
            roles. If you think I&apos;d be a good fit for your team — or just want to say hello —
            feel free to reach out.
          </p>
          <a href="mailto:junaids5954@gmail.com" className="btn-primary">
            Send me an email ↗
          </a>
        </div>
        <div className="contact-info">
          {contactItems.map(({ label, href, icon }) => (
            <div key={label} className="contact-row">
              <div className="contact-icon-wrap">{icon}</div>
              {href ? (
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {label}
                </a>
              ) : (
                <span>{label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
