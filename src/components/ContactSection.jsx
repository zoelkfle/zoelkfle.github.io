import { profile } from '../data/portfolio'

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <p className="eyebrow">03 / Start a conversation</p>
      <h2>Have a story<br /><em>to tell?</em></h2>
      <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <span>↗</span></a>
      <div className="contact-bottom"><span>{profile.name}</span><span>© 2025</span><span className="social-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.instagram} target="_blank" rel="noreferrer">Instagram ↗</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a></span></div>
    </section>
  )
}

export default ContactSection
