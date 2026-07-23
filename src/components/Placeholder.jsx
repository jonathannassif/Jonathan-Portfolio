export default function Placeholder({ className = '', label }) {
  return (
    <div className={`ph ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="8.5" cy="10.5" r="1.6" />
        <path d="M21 16l-5-4.5-4 3.5-2-1.5L3 18" />
      </svg>
      <span className="ph-label">{label}</span>
    </div>
  )
}
