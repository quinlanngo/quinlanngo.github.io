import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [emailRevealed, setEmailRevealed] = useState(false);
  const user = "quinlanngo";
  const domain = "gmail.com";

  return (
    <section id="contact" className="contact">
      <h2>Get in touch</h2>
      <p>I'm down for new and exciting opportunities, feel free to reach out!</p>

      <div className="contact-links">
        {emailRevealed ? (
          <a href={`mailto:${user}@${domain}`}>{user}@{domain}</a>
        ) : (
          <button className="reveal-btn" onClick={() => setEmailRevealed(true)}>
            Show email
          </button>
        )}

        <a href="https://github.com/quinlanngo" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/quinlan-ngo-02aa07291/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;