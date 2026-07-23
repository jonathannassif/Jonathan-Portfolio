import FadeUp from './FadeUp'
import WorkCard from './WorkCard'
import { workItems } from '../data/content'

export default function Works() {
  return (
    <section id="works">
      <div className="wrap content-shift">
        <FadeUp className="section-head">
          <div className="eyebrow">W-02 — My Works</div>
          <h2>Things I've shipped.</h2>
        </FadeUp>

        <FadeUp className="works-grid">
          {workItems.map((item) => (
            <WorkCard item={item} key={item.title} />
          ))}
        </FadeUp>
      </div>
    </section>
  )
}
