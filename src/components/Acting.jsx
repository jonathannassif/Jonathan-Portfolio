import FadeUp from './FadeUp'
import Placeholder from './Placeholder'
import { actingRoles } from '../data/content'

export default function Acting() {
  return (
    <section id="acting">
      <div className="wrap content-shift">
        <FadeUp className="section-head">
          <div className="eyebrow">L-02 — Acting</div>
          <h2>The other stage.</h2>
          <p>Alongside development, I perform — swap these in for your real roles, productions, and reels.</p>
        </FadeUp>

        <FadeUp className="acting-grid">
          <img src="/public/491694074_1126378786170832_2818011236065651442_n.jpg" alt="Acting" />
          <div className="acting-roles">
            {actingRoles.map((r, i) => (
              <div className="role-row" key={i}>
                <span className="role-show">{r.show}</span>
                <span className="role-part">{r.role}</span>
                <span className="role-venue">{r.venue}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
