import { useParams, Link } from 'react-router-dom'
import { getCompany } from '../data/companies.js'
import SocialFeed from '../components/SocialFeed.jsx'
import styles from './CompanyDetail.module.css'

export default function CompanyDetail() {
  const { id } = useParams()
  const company = getCompany(id)

  if (!company) {
    return (
      <main className={styles.main}>
        <p className={styles.notFound}>Company not found.</p>
        <Link to="/" className={styles.homeLink}>← Back to all companies</Link>
      </main>
    )
  }

  return (
    <main className={styles.main}>
      {/* Header */}
      <section className={styles.header}>
        <span className={styles.category}>{company.category}</span>
        <h1 className={styles.name}>{company.name}</h1>
        <p className={styles.tagline}>{company.tagline}</p>

        <div className={styles.metaRow}>
          <MetaItem label="Founded" value={company.founded} />
          <MetaItem label="HQ" value={company.hq} />
          <MetaItem label="Stage" value={company.stage} />
          <MetaItem label="Employees" value={company.employees} />
          <MetaItem label="Website" value={company.website} link={`https://${company.website}`} />
        </div>
      </section>

      <div className={styles.body}>
        {/* Positioning */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Positioning</h2>
          <p className={styles.prose}>{company.positioning}</p>
        </section>

        {/* Products */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Products</h2>
          <div className={styles.productGrid}>
            {company.products.map((p) => (
              <div key={p.name} className={styles.productCard}>
                <h3 className={styles.productName}>{p.name}</h3>
                <p className={styles.productDesc}>{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Competitive set */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Competitive set</h2>
          <div className={styles.competitors}>
            {company.competitors.map((c) => (
              <span key={c} className={styles.competitor}>{c}</span>
            ))}
          </div>
        </section>

        {/* Social listening */}
        <SocialFeed
          searchTerms={company.redditSearchTerms}
          relevanceTerms={company.relevanceTerms}
          companyName={company.name}
        />
      </div>
    </main>
  )
}

function MetaItem({ label, value, link }) {
  return (
    <div className={styles.metaItem}>
      <span className={styles.metaLabel}>{label}</span>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.metaValueLink}>
          {value}
        </a>
      ) : (
        <span className={styles.metaValue}>{value}</span>
      )}
    </div>
  )
}
