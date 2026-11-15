import { profile, skills } from '../data/portfolio'

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <p className="eyebrow">02 / A little about me</p>
      <div className="about-layout"><h2>Good work lives<br />between <em>logic</em><br />and feeling.</h2><div><p className="about-lead">Saya percaya website yang baik bukan hanya tentang terlihat bagus, tetapi juga tentang membuat orang merasa dimengerti.</p><p className="about-body">Dengan latar belakang frontend development dan ketertarikan pada visual storytelling, saya membantu brand dan individu mengubah ide menjadi pengalaman digital yang punya arah.</p><a className="text-link" href={`mailto:${profile.email}`}>Mari ngobrol <span>↗</span></a></div></div>
      <div className="skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
    </section>
  )
}

export default AboutSection
