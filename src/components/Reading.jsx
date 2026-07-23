import FadeUp from './FadeUp'
import Book from './Book'
import { books } from '../data/content'

export default function Reading() {
  return (
    <section id="reading">
      <div className="wrap content-shift">
        <FadeUp className="section-head">
          <div className="eyebrow">W-04 — Dev Reading</div>
          <h2>Docs, books, and blogs shaping how I build.</h2>
          <p>Placeholders — swap in the technical books, docs, or articles you're actually working through.</p>
        </FadeUp>

        <FadeUp className="shelf">
          {books.map((book, i) => (
            <Book book={book} key={i} />
          ))}
          <div className="book add">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 5v14M5 12h14" />
            </svg>
            <span className="ph-label">Add a book</span>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
