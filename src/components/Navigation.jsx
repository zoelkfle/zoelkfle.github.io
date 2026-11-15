import { profile } from '../data/portfolio'

function Navigation() {
  return (
    <nav className="site-nav" aria-label="Navigasi utama">
      <a className="wordmark" href="#top" aria-label="Kembali ke atas">ZK<span>.</span></a>
      <div className="nav-links">
        <a href="#work">Selected work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <a className="nav-status" href={`mailto:${profile.email}`}><i /> Available for work</a>
    </nav>
  )
}

export default Navigation
