import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-logo">Quinlan Ngo</span>
      <div className="navbar-links">
        <a href="#top">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar