/**
 * Place inside a relatively positioned section/container to add an overlay above the grid,
 * without blocking interactions. Set blur to true for a soft backdrop blur.
 */
export default function SectionGridOverlay({ blur = true, className = "" }) {
  return <div className={`grid-overlay ${blur ? "grid-overlay--blur" : ""} ${className}`} aria-hidden="true" />
}
