import { useState, useRef, useEffect, useCallback } from 'react'
import { agencies, sectors, sectorColors } from '../data/londonAgencies.js'
import styles from './AgenciesMap.module.css'

function useContainerSize(ref) {
  const [size, setSize] = useState({ width: 800, height: 600 })
  useEffect(() => {
    if (!ref.current) return
    const measure = () =>
      setSize({ width: ref.current.offsetWidth, height: ref.current.offsetHeight })
    const obs = new ResizeObserver(measure)
    obs.observe(ref.current)
    measure()
    return () => obs.disconnect()
  }, [ref])
  return size
}

function AgencyDetail({ agency, onClose }) {
  const color = sectorColors[agency.sectorKey]
  return (
    <div className={styles.detailInner}>
      <div className={styles.detailHeader}>
        <span className={styles.detailTag} style={{ background: color }}>
          {agency.sector}
        </span>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
      </div>

      <h2 className={styles.detailName}>{agency.name}</h2>
      <p className={styles.detailTagline}>{agency.tagline}</p>
      <p className={styles.detailDesc}>{agency.description}</p>

      <div className={styles.statsGrid}>
        <div className={styles.statBox}>
          <div className={styles.statLabel}>London Role</div>
          <div className={styles.statValue}>{agency.londonRole}</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statLabel}>Founded</div>
          <div className={styles.statValue}>{agency.founded}</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statLabel}>Employees</div>
          <div className={styles.statValue}>{agency.employees}</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statLabel}>Revenue (est.)</div>
          <div className={styles.statValue}>{agency.revenue}</div>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Specialisms</h4>
        <div className={styles.tagList}>
          {agency.specialisms.map(s => (
            <span key={s} className={styles.tag}>{s}</span>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Notable Clients</h4>
        <p className={styles.sectionText}>{agency.clients}</p>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Market Positioning</h4>
        <span
          className={styles.positioningBadge}
          style={{ borderColor: color, color }}
        >
          {agency.positioning}
        </span>
      </div>
    </div>
  )
}

const GRID_VALS = [25, 50, 75]

export default function AgenciesMap() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selected, setSelected]         = useState(null)
  const [hovered, setHovered]           = useState(null)
  const [mousePos, setMousePos]         = useState({ x: 0, y: 0 })

  const chartRef = useRef(null)
  const { width, height } = useContainerSize(chartRef)

  const M  = { top: 52, right: 52, bottom: 72, left: 88 }
  const iw = Math.max(1, width  - M.left - M.right)
  const ih = Math.max(1, height - M.top  - M.bottom)

  const cx  = (v) => M.left + (v / 100) * iw
  const cy  = (v) => M.top  + ((100 - v) / 100) * ih
  const rad = (s) => 8 + Math.pow(s / 100, 0.6) * Math.min(iw, ih) * 0.08

  const handleBubbleClick = useCallback((agency, e) => {
    e.stopPropagation()
    setSelected(prev => prev?.id === agency.id ? null : agency)
  }, [])

  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }, [])

  const hoveredAgency = hovered ? agencies.find(a => a.id === hovered) : null

  return (
    <div className={styles.page}>
      {/* ── Top bar ── */}
      <div className={styles.topBar}>
        <div className={styles.titleGroup}>
          <h1 className={styles.title}>London Market Research Agencies</h1>
          <p className={styles.subtitle}>
            Competitive landscape by scale, specialisation &amp; market positioning · {agencies.length} agencies · bubble size = relative agency scale
          </p>
        </div>
        <div className={styles.filters}>
          {sectors.map(s => (
            <button
              key={s.key}
              className={`${styles.filterBtn} ${activeFilter === s.key ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(prev => prev === s.key ? 'all' : s.key)}
            >
              {s.key !== 'all' && (
                <span className={styles.filterDot} style={{ background: sectorColors[s.key] }} />
              )}
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Main layout ── */}
      <div className={styles.main}>
        {/* ── Chart ── */}
        <div
          className={styles.chartWrap}
          ref={chartRef}
          onClick={() => setSelected(null)}
          onMouseMove={handleMouseMove}
        >
          <svg width={width} height={height} className={styles.svg}>
            {/* Grid lines */}
            {GRID_VALS.map(v => (
              <g key={v}>
                <line
                  x1={M.left} x2={M.left + iw}
                  y1={cy(v)} y2={cy(v)}
                  stroke={v === 50 ? '#e0e0e0' : '#f0f0f0'}
                  strokeWidth={1}
                  strokeDasharray={v === 50 ? '5 5' : undefined}
                />
                <line
                  x1={cx(v)} x2={cx(v)}
                  y1={M.top} y2={M.top + ih}
                  stroke={v === 50 ? '#e0e0e0' : '#f0f0f0'}
                  strokeWidth={1}
                  strokeDasharray={v === 50 ? '5 5' : undefined}
                />
              </g>
            ))}

            {/* Axis lines */}
            <line x1={M.left} x2={M.left + iw} y1={M.top + ih} y2={M.top + ih} stroke="#d4d4d4" strokeWidth={1} />
            <line x1={M.left} x2={M.left}       y1={M.top}      y2={M.top + ih} stroke="#d4d4d4" strokeWidth={1} />

            {/* Quadrant corner labels */}
            <text x={M.left + 10} y={M.top + 15}      fontFamily="Inter,sans-serif" fontSize={9} fontWeight={700} letterSpacing={2} fill="#e0e0e0" textAnchor="start">BOUTIQUE PREMIUM</text>
            <text x={M.left + iw - 10} y={M.top + 15} fontFamily="Inter,sans-serif" fontSize={9} fontWeight={700} letterSpacing={2} fill="#e0e0e0" textAnchor="end">FULL-SERVICE PREMIUM</text>
            <text x={M.left + 10} y={M.top + ih - 10}      fontFamily="Inter,sans-serif" fontSize={9} fontWeight={700} letterSpacing={2} fill="#e0e0e0" textAnchor="start">NICHE SPECIALIST</text>
            <text x={M.left + iw - 10} y={M.top + ih - 10} fontFamily="Inter,sans-serif" fontSize={9} fontWeight={700} letterSpacing={2} fill="#e0e0e0" textAnchor="end">SCALE &amp; DATA</text>

            {/* X-axis end labels */}
            <text x={M.left}      y={M.top + ih + 22} fontFamily="Inter,sans-serif" fontSize={11} fill="#bbb" textAnchor="start">← Specialist / Boutique</text>
            <text x={M.left + iw} y={M.top + ih + 22} fontFamily="Inter,sans-serif" fontSize={11} fill="#bbb" textAnchor="end">Full-Service / Generalist →</text>

            {/* X-axis centre label */}
            <text x={M.left + iw / 2} y={M.top + ih + 50} fontFamily="Inter,sans-serif" fontSize={9} fontWeight={700} letterSpacing={3} fill="#d0d0d0" textAnchor="middle">SCOPE OF SERVICES</text>

            {/* Y-axis end labels */}
            <text x={M.left - 10} y={M.top}      fontFamily="Inter,sans-serif" fontSize={11} fill="#bbb" textAnchor="end" dominantBaseline="middle">Premium</text>
            <text x={M.left - 10} y={M.top + ih} fontFamily="Inter,sans-serif" fontSize={11} fill="#bbb" textAnchor="end" dominantBaseline="middle">Value</text>

            {/* Y-axis rotated label */}
            <text
              transform={`translate(${M.left - 62},${M.top + ih / 2}) rotate(-90)`}
              fontFamily="Inter,sans-serif" fontSize={9} fontWeight={700} letterSpacing={3}
              fill="#d0d0d0" textAnchor="middle"
            >
              MARKET POSITIONING
            </text>

            {/* ── Bubbles ── */}
            {agencies.map(agency => {
              const bx = cx(agency.x)
              const by = cy(agency.y)
              const r  = rad(agency.size)
              const isSelected  = selected?.id === agency.id
              const isHovered   = hovered === agency.id
              const isDimmed    = activeFilter !== 'all' && agency.sectorKey !== activeFilter
              const color       = sectorColors[agency.sectorKey]
              const labelInside = r > 26

              return (
                <g
                  key={agency.id}
                  style={{
                    opacity: isDimmed ? 0.07 : 1,
                    transition: 'opacity 0.25s ease',
                    cursor: 'pointer',
                  }}
                  onClick={e => handleBubbleClick(agency, e)}
                  onMouseEnter={() => setHovered(agency.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Selection ring */}
                  {isSelected && (
                    <circle
                      cx={bx} cy={by} r={r + 7}
                      fill="none"
                      stroke={color}
                      strokeWidth={2}
                      strokeDasharray="4 3"
                      opacity={0.5}
                    />
                  )}

                  {/* Translated group so scale is centred on the bubble */}
                  <g transform={`translate(${bx},${by})`}>
                    <g style={{
                      transform: isHovered ? 'scale(1.09)' : 'scale(1)',
                      transition: 'transform 0.2s ease',
                    }}>
                      <circle
                        cx={0} cy={0} r={r}
                        fill={color}
                        stroke="white"
                        strokeWidth={2.5}
                      />
                      {labelInside && (
                        <text
                          x={0} y={0}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill="white"
                          fontSize={Math.min(12, r * 0.38)}
                          fontWeight={600}
                          fontFamily="Inter,sans-serif"
                          style={{ pointerEvents: 'none', userSelect: 'none' }}
                        >
                          {agency.name}
                        </text>
                      )}
                    </g>
                    {!labelInside && (
                      <text
                        x={0} y={r + 12}
                        textAnchor="middle"
                        fill={color}
                        fontSize={10}
                        fontWeight={600}
                        fontFamily="Inter,sans-serif"
                        style={{ pointerEvents: 'none', userSelect: 'none' }}
                      >
                        {agency.name}
                      </text>
                    )}
                  </g>
                </g>
              )
            })}
          </svg>

          {/* ── Tooltip ── */}
          {hoveredAgency && (
            <div
              className={styles.tooltip}
              style={{ left: mousePos.x + 14, top: mousePos.y - 62 }}
            >
              <div className={styles.tooltipName}>{hoveredAgency.name}</div>
              <div className={styles.tooltipSector}>{hoveredAgency.sector}</div>
              <div className={styles.tooltipHint}>Click to explore →</div>
            </div>
          )}

          {/* ── Legend ── */}
          <div className={styles.legend}>
            <div className={styles.legendTitle}>Sector</div>
            <div className={styles.legendItems}>
              {sectors.filter(s => s.key !== 'all').map(s => (
                <div
                  key={s.key}
                  className={styles.legendItem}
                  onClick={() => setActiveFilter(prev => prev === s.key ? 'all' : s.key)}
                >
                  <span className={styles.legendDot} style={{ background: sectorColors[s.key] }} />
                  {s.label}
                </div>
              ))}
            </div>
          </div>

          {/* ── Size legend ── */}
          <div className={styles.sizeLegend}>
            <div className={styles.sizeLegendTitle}>Relative scale</div>
            <div className={styles.sizeBubbles}>
              {[{ label: 'Boutique', s: 10 }, { label: 'Mid-size', s: 40 }, { label: 'Global', s: 95 }].map(({ label, s }) => {
                const r = rad(s)
                return (
                  <div key={label} className={styles.sizeBubbleGroup}>
                    <div
                      className={styles.sizeBubbleCircle}
                      style={{ width: r * 2, height: r * 2 }}
                    />
                    <span className={styles.sizeBubbleLabel}>{label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className={styles.hint}>Hover to preview · click to explore</div>
        </div>

        {/* ── Detail panel ── */}
        <div className={`${styles.detailPanel} ${selected ? styles.panelOpen : ''}`}>
          {selected && (
            <AgencyDetail agency={selected} onClose={() => setSelected(null)} />
          )}
        </div>
      </div>
    </div>
  )
}
