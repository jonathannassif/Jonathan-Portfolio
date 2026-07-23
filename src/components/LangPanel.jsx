import { useEffect, useRef, useState } from 'react'
import { languages } from '../data/content'

export default function LangPanel() {
  const ref = useRef(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="lang-panel" ref={ref}>
      <h3>Languages</h3>
      {languages.map((lang) => (
        <div className="lang-row" key={lang.name}>
          <div className="lang-top">
            <span>{lang.name}</span>
            <span className="lvl">{lang.level}</span>
          </div>
          <div className="gauge">
            <div className="gauge-fill" style={{ width: animated ? `${lang.fill}%` : '0%' }}></div>
          </div>
        </div>
      ))}
    </div>
  )
}
