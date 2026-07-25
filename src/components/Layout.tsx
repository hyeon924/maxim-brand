import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { asset } from '../lib/assets'

type NavProps = { onNavigate: (to: string) => void; currentPath: string }
const groups: Array<[string, string[]]> = [
  ['ABOUT MAXIM', ['MAXIM INFO', 'MAXIM HISTORY', 'MAXIM SLOGAN']],
  ['PRODUCT', ['MAIN PRODUCT', 'SOLUBLE & COFFEEMIX', 'INSTANT R & G', 'R & G COFFEE', 'RTD COFFEE']],
  ['EVENT', ['NOW EVENT', 'END EVENT']],
  ['NEWS & MEDIA', ['NEWS & NOTICE', 'TV CF', 'MAXIM CHANNEL']],
  ['CUSTOMER', ['NAVER BLOG', 'CUSTOMER SUPPORT']],
]
export function Header({ onNavigate, currentPath }: NavProps) {
  const [open, setOpen] = useState(false)
  const goHome = () => { onNavigate('/'); setOpen(false) }
  const goHistory = () => { onNavigate('/history'); setOpen(false) }
  return <header className="site-header"><div className="header-inner">
    <button className="brand" onClick={goHome} aria-label="MAXIM 홈"><img src={asset('img/logo.png')} alt="MAXIM" /></button>
    <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="주요 메뉴">
      {groups.map(([label, items]) => <div className="nav-group" key={label}><button onClick={label === 'ABOUT MAXIM' ? goHistory : undefined}>{label}</button><div className="subnav">
        {items.map(item => <button key={item} onClick={item === 'MAXIM HISTORY' ? goHistory : undefined} className={item === 'MAXIM HISTORY' && currentPath === '/history' ? 'active' : ''}>{item}</button>)}
      </div></div>)}
    </nav>
    <div className="utility"><button>MEMBERSHIP</button><span /><button>LOGIN</button></div>
    <button className="menu-toggle" aria-label="메뉴 열기" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div></header>
}
export function Footer() { return <footer className="site-footer"><img src={asset('img/logo.png')} alt="MAXIM" /><div><p><strong>개인정보처리방침</strong><span>이용약관</span><span>이메일무단수집거부</span></p><p>서울시 마포구 독막로 324 동서빌딩 · 전국대표전화번호 1588-2233</p><small>2013 DONG SUH FOOD. ALL RIGHT RESERVED.</small></div></footer> }
