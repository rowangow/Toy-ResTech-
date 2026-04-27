import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.wordmark}>
          AI Research Tracker
        </Link>
        {!isHome && (
          <Link to="/" className={styles.back}>
            ← All companies
          </Link>
        )}
      </div>
    </header>
  )
}
