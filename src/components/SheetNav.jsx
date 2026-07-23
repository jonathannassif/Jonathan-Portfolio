import { Fragment } from 'react'
import { sections } from '../data/content'

export default function SheetNav({ activeId }) {
  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="sheet-rail" aria-label="Sheet index">
      {sections.map((s, i) => {
        const prevTrack = i > 0 ? sections[i - 1].track : null
        const showDivider = prevTrack && prevTrack !== s.track && s.track !== 'system'
        return (
          <Fragment key={s.id}>
            {showDivider && <div className="sheet-divider"></div>}
            <button
              className={`sheet-item ${activeId === s.id ? 'active' : ''}`}
              data-track={s.track}
              onClick={() => goTo(s.id)}
            >
              <span className="code">{s.code}</span>
              <span className="tick"></span>
              <span className="name">{s.label}</span>
            </button>
          </Fragment>
        )
      })}
    </nav>
  )
}
