import { useScrollSpy } from './hooks/useScrollSpy'
import { sections } from './data/content'

import Mark from './components/Mark'
import SheetNav from './components/SheetNav'
import MobileStrip from './components/MobileStrip'
import Hero from './components/Hero'

// Web dev track
import Stack from './components/Stack'
import Works from './components/Works'
import Now from './components/Now'
import Reading from './components/Reading'

// Life track
import Story from './components/Story'
import Acting from './components/Acting'
import Achievements from './components/Achievements'
import Writing from './components/Writing'

import Help from './components/Help'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const ids = sections.map((s) => s.id)
  const activeId = useScrollSpy(ids)

  return (
    <>
      <div className="grid-bg"></div>
      <Mark />
      <SheetNav activeId={activeId} />
      <MobileStrip activeId={activeId} />

      <Hero />

      <Stack />
      <Works />
      <Now />
      <Reading />

      <Story />
      <Acting />
      <Achievements />
      <Writing />

      <Help />
      <Contact />

      <Footer />
    </>
  )
}
