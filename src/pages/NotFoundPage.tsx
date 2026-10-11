import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <section className="page">
      <h2>404 — page not found</h2>
      <Link to="/">Back to home</Link>
    </section>
  )
}

export default NotFoundPage