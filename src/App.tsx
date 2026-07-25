import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { Footer, Header } from './components/Layout'
import { HistoryPage } from './pages/HistoryPage'
import { HomePage } from './pages/HomePage'

export default function App() {
  const [path, setPath] = useState(window.location.pathname)
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)
    const onScroll = () => setShowTop(window.scrollY > 480)
    addEventListener('popstate', onPopState); addEventListener('scroll', onScroll, { passive: true })
    return () => { removeEventListener('popstate', onPopState); removeEventListener('scroll', onScroll) }
  }, [])
  const navigate = (to: string) => { history.pushState({}, '', to); setPath(to); scrollTo({ top: 0, behavior: 'smooth' }) }
  const isHistory = path === '/history'
  return <><Header onNavigate={navigate} currentPath={path} />
    <main className={isHistory ? 'content-main' : 'fullpage-main'}>{isHistory ? <HistoryPage /> : <HomePage onNavigate={navigate} />}</main>
    {isHistory && <Footer />}
    <button className={`back-to-top ${showTop ? 'is-visible' : ''}`} onClick={() => scrollTo({ top: 0, behavior: 'smooth' })} aria-label="맨 위로"><ArrowUp size={19} /></button>
  </>
}
