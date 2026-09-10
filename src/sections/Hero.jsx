import './Hero.css'

function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Quinlan Ngo</h1>
        <p className="hero-tagline">
          Software · XR · Graphics · AI/ML
        </p>
        <p className="hero-bio">
          pls hire me :3
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">See my work</a>
          <a href="#contact" className="btn-secondary">Get in touch</a>
        </div>
      </div>
    </section>
  )
}

export default Hero