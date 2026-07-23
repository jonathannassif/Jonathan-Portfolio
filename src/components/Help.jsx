import FadeUp from './FadeUp'
import { freeHelp, paidHelp } from '../data/content'

export default function Help() {
  return (
    <section id="help">
      <div className="wrap content-shift">
        <FadeUp className="section-head">
          <div className="eyebrow">Work Together</div>
          <h2>Free, or paid — pick what fits.</h2>
        </FadeUp>

        <FadeUp className="help-grid">
          <div className="help-card free">
            <span className="help-tag">Free</span>
            <h3>For the community</h3>
            <ul>
              {freeHelp.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-ghost">
              Ask a question →
            </a>
          </div>

          <div className="help-card paid">
            <span className="help-tag">Paid</span>
            <h3>For clients & teams</h3>
            <ul>
              {paidHelp.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-primary">
              Start a project →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
