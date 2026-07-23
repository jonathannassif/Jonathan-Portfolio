import FadeUp from './FadeUp'
import { nowItems } from '../data/content'

export default function Now() {
  return (
    <section id="now">
      <div className="wrap content-shift">
        <FadeUp className="section-head">
          <div className="eyebrow">W-03 — Now</div>
          <h2>What I'm building and learning right now.</h2>
        </FadeUp>

        <FadeUp className="now-grid">
          {nowItems.map((item, i) => (
            <div className="now-card" key={i}>
              <span className="now-dot"></span>
              <p>{item}</p>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  )
}
