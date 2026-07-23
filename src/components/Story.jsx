import FadeUp from './FadeUp'
import LangPanel from './LangPanel'
import { timeline } from '../data/content'

export default function Story() {
  return (
    <section id="story">
      <div className="wrap content-shift">
        <FadeUp className="section-head">
          <div className="eyebrow">L-01 — My Story</div>
          <h2>Not just what I do — who I am.</h2>
        </FadeUp>

        <FadeUp className="story-grid">
          <div className="story-side">
            <img className="story-photo" src="/image-initial-1769435244516.png" alt="Portrait of Jonathan" />
            <LangPanel />
          </div>

          <div>
            <div className="story-copy">
              <p>
                I'm a frontend developer in <strong>Cairo, Egypt</strong>, with a computer engineering background
                that shapes how I work — I'd rather understand why a layout breaks than paste a fix that hides it.
              </p>
              <p>
                Freelance, I built the <strong>Aristo Education Platform</strong> for an Egyptian edtech company
                end-to-end — registration, an authenticated admin dashboard, Supabase backend — and I'm currently
                rebuilding it on <strong>React + Vite + Tailwind</strong>.
              </p>
              <p>
                Outside of code, I'm on stage and on the page — you'll find both further down: acting further on,
                and writing after that.
              </p>
              <p>
                <em>
                  (I will write here more about my story, but for now, this is a placeholder. I want to keep the site up while I work on it.))
                </em>
              </p>
            </div>

            <div className="story-timeline">
              {timeline.map((item, i) => (
                <div className="st-row" key={i}>
                  <span className="date">{item.date}</span>
                  <span className="what">
                    <b>{item.title}</b> <span>{item.detail}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
