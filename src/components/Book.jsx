export default function Book({ book }) {
  return (
    <div className={`book ${book.style}`}>
      <span className="b-status">{book.status}</span>
      <div>
        <div className="b-title">{book.title}</div>
        <div className="b-author">{book.author}</div>
      </div>
    </div>
  )
}
