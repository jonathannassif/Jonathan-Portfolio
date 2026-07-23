import LayerCanvas from './LayerCanvas'

export default function Hero() {
  return (
    <section id="cover" className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <div className="eyebrow">Developer · Actor · Writer — Cairo, Egypt</div>
          <h1>
            Jonathan Joseph
            <br />
            <em>builds interfaces</em>
            <br />
            and everything else, too.
          </h1>
          <div className="hero-role">react.js · javascript · theatre · writing · languages</div>
          <p className="hero-tagline">
            I approach code, the stage, and the page the same way — one deliberate layer at a time, understanding
            what holds up what before reaching for a shortcut.
          </p>
          <div className="hero-cta">
            <a href="#works" className="btn btn-primary">
              See the work →
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
        </div>
        <div className="hero-canvas-wrap">
          <LayerCanvas />
          <div className="canvas-caption">html → css → javascript → react</div>
        </div>
      </div>
      <div className="scroll-cue">scroll</div>
    </section>
  )
}
