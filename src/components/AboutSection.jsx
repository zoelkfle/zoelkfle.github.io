import { exploring, profile, skills } from '../data/portfolio'

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <p className="eyebrow">02 / A little about me</p>
      <div className="about-layout"><h2>Good work lives<br />between <em>logic</em><br />and feeling.</h2><div><p className="about-lead">Di semester 5 Teknik Informatika, perjalanan menuju kelulusan 2028 terasa seperti ruang untuk terus mencoba, belajar, dan mengubah ide menjadi karya digital yang terasa hidup.</p><p className="about-body">Di Universitas Muhammadiyah Jakarta, saya mengasah cara berpikir teknis sambil mengikuti rasa ingin tahu pada visual dan storytelling. Hasilnya adalah interface yang jelas, responsif, dan punya karakter, dari website hingga materi komunikasi digital.</p><a className="text-link" href={`mailto:${profile.email}`}>Mari ngobrol <span>↗</span></a></div></div>
      <div className="skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      <div className="profile-details">
        <div><span>Status</span><strong>{profile.education}</strong></div>
        <div><span>Kampus</span><strong>{profile.university}</strong></div>
        <div><span>Next chapter</span><strong>{profile.expectedGraduation}</strong></div>
      </div>
      <div className="exploring"><p className="eyebrow">Currently exploring</p><div>{exploring.map((item) => <span key={item}>{item}</span>)}</div></div>
    </section>
  )
}

export default AboutSection
