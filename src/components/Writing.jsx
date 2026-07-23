import FadeUp from './FadeUp'
import { writingLinks } from '../data/content'

export default function Writing() {
  return (
    <section id="writing">
      <div className="wrap content-shift">
        <FadeUp className="section-head">
          <div className="eyebrow">L-04 — Writing</div>
          <h2>Words, not just code.</h2>
          <p>Selected pieces from Medium and X — swap in your real links and titles.</p>
        </FadeUp>

        <FadeUp className="writing-list">
          {writingLinks.map((w, i) => (
            <a className="writing-row" href={w.href} target="_blank" rel="noopener" key={i}>
              <span className="writing-title">{w.title}</span>
              <span className="writing-meta mono">{w.meta}</span>
            </a>
          ))}
        </FadeUp>
      </div>
    </section>
  )
}
