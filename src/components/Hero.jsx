import { profile } from '../data/portfolio'

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Portfolio / 2024—2025</p>
        <h1>Digital experiences<br /><em>with a human pulse.</em></h1>
        <p className="hero-intro">Saya Zoelkiflie, seorang frontend developer yang merancang dan membangun pengalaman digital yang terasa jelas, hangat, dan siap digunakan.</p>
        <a className="text-link" href="#work">Lihat karya <span>↘</span></a>
      </div>
      <div className="hero-art" aria-label={`Identitas visual ${profile.location}`} role="img">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="hero-note note-top">Design<br />&amp; build</div>
        <div className="hero-note note-bottom">Jakarta<br /><span>Indonesia</span></div>
        <div className="hero-stamp">ZK<br /><small>✦</small></div>
      </div>
    </section>
  )
}

export default Hero
