import Placeholder from './Placeholder'

export default function WorkCard({ item }) {
  return (
    <div className="work-card">
      <Placeholder className="work-shot" label="Add screenshot" />
      <div className="work-body">
        <span className="mono">{item.tag}</span>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <div className="tags">
          {item.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
