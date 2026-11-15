import { projects } from '../data/portfolio'
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
    </section>
  )
}

export default WorkSection
