import { profile } from '../data/portfolio'

function TravelVisual({ project }) {
  const [cover, detail, flyer] = project.images

  return (
    <div className="project-visual travel-visual">
      <img src={cover.src} alt={cover.alt} />
      <img className="floating-flyer flyer-one" src={detail.src} alt={detail.alt} />
      <img className="floating-flyer flyer-two" src={flyer.src} alt={flyer.alt} />
      <span className="visual-label">{project.label}</span>
    </div>
  )
}

function InvitationVisual({ project }) {
  return (
    <div className="project-visual invitation-visual">
      <img src={project.image} alt="Screenshot undangan digital Tara dan Riza" />
      <span className="visual-label">{project.label}</span>
    </div>
  )
}

function ProjectCard({ project }) {
  const subject = encodeURIComponent(project.title.join(' '))
  const Visual = project.kind === 'travel' ? TravelVisual : InvitationVisual

  return (
    <article className={`project-card ${project.kind}-card`}>
      <Visual project={project} />
      <div className="project-meta">
        <div><p className="project-type">{project.type}</p><h3>{project.title[0]}<br />{project.title[1]}</h3></div>
        <p className="project-description">{project.description}</p>
        <a className="circle-link" href={`mailto:${profile.email}?subject=${subject}`} aria-label={`Tanya tentang proyek ${project.title.join(' ')}`}>↗</a>
      </div>
      <div className="project-details">
        <p><span>Peran</span>{project.contribution}</p>
        <p><span>Output</span>{project.deliverables}</p>
        <p><span>Tools</span>{project.tools.join(' · ')}</p>
      </div>
    </article>
  )
}

export default ProjectCard
