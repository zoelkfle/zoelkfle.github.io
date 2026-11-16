import { process, projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'

function WorkSection() {
  return (
    <section className="work-section" id="work">
      <div className="section-heading">
        <p className="eyebrow">01 / Selected work</p>
        <h2>Small collection,<br /><em>big intention.</em></h2>
        <p className="section-copy">Beberapa proyek yang mewakili cara saya bekerja: mulai dari memahami cerita, menyusun sistem, sampai memastikan detail kecilnya terasa tepat.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
      <div className="process-section">
        <div>
          <p className="eyebrow">How I work</p>
          <h3>Dari ide yang masih samar<br />menjadi <em>pengalaman yang terasa.</em></h3>
        </div>
        <div className="process-list">
          {process.map((step) => <div className="process-item" key={step.number}><span>{step.number}</span><div><h4>{step.title}</h4><p>{step.description}</p></div></div>)}
        </div>
      </div>
    </section>
  )
}

export default WorkSection
