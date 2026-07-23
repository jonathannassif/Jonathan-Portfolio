import { useState } from 'react'
import FadeUp from './FadeUp'
import { contactLinks } from '../data/content'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <section id="contact">
      <div className="wrap content-shift">
        <div className="contact-wrap">
          <FadeUp className="contact-copy">
            <div className="eyebrow">A-07 — Contact</div>
            <h2>Building something? Let's talk.</h2>
            <p>
              Open to frontend roles and freelance work. Reach out directly, or find me on any of these — swap in
              your real links.
            </p>
          </FadeUp>

          <FadeUp className="contact-card">
            {contactLinks.map((link) => (
              <div className="contact-row" key={link.label}>
                <span className="label">{link.label}</span>
                {link.href ? (
                  <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noopener">
                    {link.text}
                  </a>
                ) : (
                  <span>{link.text}</span>
                )}
                {link.copyable && (
                  <button className="copy-btn" onClick={() => handleCopy(link.text)}>
                    {copied ? 'copied' : 'copy'}
                  </button>
                )}
              </div>
            ))}
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
