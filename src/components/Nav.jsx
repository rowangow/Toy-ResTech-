import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isAgencies = pathname === '/london-agencies'

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.wordmark}>
          AI Research Tracker
        </Link>
        <nav className={styles.navLinks}>
          <Link
            to="/london-agencies"
            className={`${styles.navLink} ${isAgencies ? styles.navLinkActive : ''}`}
          >
            London Agencies Map
          </Link>
          {!isHome && !isAgencies && (
            <Link to="/" className={styles.back}>
              ← All companies
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
