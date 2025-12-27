import React from 'react'
import '../../styles/contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-grid">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label className="label">Recipient</label>
          <div className="recipient-pill">
            <span className="dot" aria-hidden />
            <span className="email">du.h.c.oliveira17@gmail.com</span>
          </div>

          <label className="label">Your Name *</label>
          <input className="input" type="text" placeholder="Your Name" required />

          <label className="label">Your Message *</label>
          <textarea className="textarea" placeholder="Write here..." required />

          <button className="send-btn" type="submit">Send Message</button>
        </form>

        <div className="contact-right">
          <div className="pill">Let’s get in touch</div>
          <h2 className="display section-title">Let’s Talk</h2>
        </div>
      </div>
    </section>
  )
}
