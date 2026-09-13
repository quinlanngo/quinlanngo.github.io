import './Hero.css'
import HeroCanvas from './HeroCanvas.jsx';

function Hero() {
  return (
    <section id="hero">
      <HeroCanvas />
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Quinlan Ngo</h1>
        <p className="hero-tagline">
          Software · Machine Learning · Graphics · XR
        </p>
        <p className="hero-bio">
          I build things that haven't been built before. I'm a software engineer with a passion for creating innovative solutions and exploring new technologies.
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