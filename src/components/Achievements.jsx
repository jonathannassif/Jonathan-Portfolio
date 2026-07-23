import FadeUp from './FadeUp'
import { achievements } from '../data/content'

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="wrap content-shift">
        <FadeUp className="section-head">
          <div className="eyebrow">L-03 — Scholarships & Achievements</div>
          <h2>Recognition along the way.</h2>
        </FadeUp>

        <FadeUp className="achieve-list">
          {achievements.map((a, i) => (
            <div className="achieve-row" key={i}>
              <span className="achieve-year">{a.year}</span>
              <div>
                <div className="achieve-title">{a.title}</div>
                <div className="achieve-detail">{a.detail}</div>
              </div>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  )
}
