import { useState, useEffect, useCallback } from 'react'
import styles from './SocialFeed.module.css'

function timeAgo(utcSeconds) {
  const diff = Math.floor(Date.now() / 1000) - utcSeconds
  if (diff < 60) return `${diff}s ago`
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
  return `${Math.floor(diff / 86400)}d ago`
}

function PostCard({ post }) {
  const domain = post.domain || 'reddit.com'
  const isReddit = domain.includes('reddit') || domain.includes('redd.it')

  return (
    <a
      href={`https://reddit.com${post.permalink}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.post}
    >
      <div className={styles.postMeta}>
        <span className={styles.subreddit}>r/{post.subreddit}</span>
        <span className={styles.dot}>·</span>
        <span className={styles.time}>{timeAgo(post.created_utc)}</span>
        <span className={styles.dot}>·</span>
        <span className={styles.score}>{post.score} pts</span>
      </div>
      <p className={styles.postTitle}>{post.title}</p>
      {post.selftext && post.selftext.length > 10 && (
        <p className={styles.postBody}>
          {post.selftext.length > 240
            ? post.selftext.slice(0, 240) + '…'
            : post.selftext}
        </p>
      )}
      <div className={styles.postFooter}>
        <span className={styles.author}>u/{post.author}</span>
        <span className={styles.comments}>{post.num_comments} comments</span>
      </div>
    </a>
  )
}

export default function SocialFeed({ searchTerms, companyName }) {
  const [posts, setPosts] = useState([])
  const [status, setStatus] = useState('idle') // idle | loading | loaded | error | empty
  const [lastFetched, setLastFetched] = useState(null)
  const [termIndex, setTermIndex] = useState(0)

  const currentTerm = searchTerms[termIndex] || searchTerms[0]

  const fetchPosts = useCallback(async (term) => {
    setStatus('loading')
    try {
      const url = `https://www.reddit.com/search.json?q=${encodeURIComponent(
        term
      )}&sort=new&limit=25&type=link&t=all`
      const res = await fetch(url, {
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const json = await res.json()
      const items = json?.data?.children?.map((c) => c.data) ?? []
      setPosts(items)
      setStatus(items.length === 0 ? 'empty' : 'loaded')
      setLastFetched(new Date())
    } catch (err) {
      console.error('Reddit fetch error:', err)
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    fetchPosts(currentTerm)
  }, [currentTerm, fetchPosts])

  return (
    <div className={styles.wrapper}>
      <div className={styles.feedHeader}>
        <div className={styles.feedTitle}>
          <span className={status === 'loading' ? styles.dotPulse : styles.dotLive} />
          Social listening
        </div>
        <div className={styles.feedControls}>
          <div className={styles.termTabs}>
            {searchTerms.map((term, i) => (
              <button
                key={term}
                className={i === termIndex ? styles.termActive : styles.term}
                onClick={() => setTermIndex(i)}
              >
                {term}
              </button>
            ))}
          </div>
          <button
            className={styles.refresh}
            onClick={() => fetchPosts(currentTerm)}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Loading…' : 'Refresh'}
          </button>
        </div>
      </div>

      {lastFetched && (
        <p className={styles.fetchedAt}>
          Via Reddit public API &middot; fetched {lastFetched.toLocaleTimeString()}
        </p>
      )}

      <div className={styles.feed}>
        {status === 'loading' && (
          <div className={styles.state}>
            <div className={styles.skeleton} />
            <div className={styles.skeleton} />
            <div className={styles.skeleton} />
          </div>
        )}
        {status === 'error' && (
          <div className={styles.stateMsg}>
            Could not reach Reddit. Check your connection and try again.
          </div>
        )}
        {status === 'empty' && (
          <div className={styles.stateMsg}>
            No public Reddit posts found for "{currentTerm}" right now.
          </div>
        )}
        {status === 'loaded' &&
          posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </div>
  )
}
