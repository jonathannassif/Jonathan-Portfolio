import { Fragment } from 'react'
import { sections } from '../data/content'

export default function MobileStrip({ activeId }) {
  const goTo = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="sheet-strip">
      {sections.map((s, i) => {
        const prevTrack = i > 0 ? sections[i - 1].track : null
        const showDivider = prevTrack && prevTrack !== s.track && s.track !== 'system'
        return (
          <Fragment key={s.id}>
            {showDivider && <div className="strip-divider"></div>}
            <a
              href={`#${s.id}`}
              className={`strip-item ${activeId === s.id ? 'active' : ''}`}
              data-track={s.track}
              onClick={(e) => goTo(e, s.id)}
            >
              {s.code} {s.label}
            </a>
          </Fragment>
        )
      })}
    </div>
  )
}
