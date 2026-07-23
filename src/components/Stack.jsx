import FadeUp from './FadeUp'
import { stackLayers } from '../data/content'

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrap content-shift">
        <FadeUp className="section-head">
          <div className="eyebrow">W-01 — Stack</div>
          <h2>What I build with, layer by layer.</h2>
        </FadeUp>

        <FadeUp className="stack-grid">
          {stackLayers.map((layer) => (
            <div className="stack-card" key={layer.title}>
              <span className="stack-idx">{layer.idx}</span>
              <h3>{layer.title}</h3>
              <ul>
                {layer.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  )
}
