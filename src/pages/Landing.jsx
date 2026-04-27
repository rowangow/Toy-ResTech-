import { Link } from 'react-router-dom'
import { companies } from '../data/companies.js'
import styles from './Landing.module.css'

const categoryColor = {
  'Qualitative Research': '#0a0a0a',
  'Quantitative Research': '#0a0a0a',
  'Research Synthesis': '#0a0a0a',
}

export default function Landing() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Market Intelligence</p>
        <h1 className={styles.heading}>
          AI Research Tech<br />Landscape
        </h1>
        <p className={styles.subheading}>
          Tracking the companies reshaping how brands and researchers collect,
          analyse, and act on human insight.
        </p>
      </section>

      <section className={styles.grid}>
        {companies.map((company) => (
          <Link
            key={company.id}
            to={`/company/${company.id}`}
            className={styles.card}
          >
            <div className={styles.cardTop}>
              <span className={styles.category}>{company.category}</span>
              <span className={styles.stage}>{company.stage}</span>
            </div>
            <h2 className={styles.companyName}>{company.name}</h2>
            <p className={styles.tagline}>{company.tagline}</p>
            <div className={styles.cardMeta}>
              <span>{company.hq}</span>
              <span>{company.employees} employees</span>
            </div>
            <div className={styles.cardArrow}>
              <span>View profile →</span>
            </div>
          </Link>
        ))}
      </section>

      <footer className={styles.footer}>
        <p>
          {companies.length} companies tracked &middot; Social listening via Reddit public API &middot; Updated in real time
        </p>
      </footer>
    </main>
  )
}
