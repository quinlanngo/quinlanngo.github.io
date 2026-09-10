import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-logo">Quinlan Ngo</span>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar