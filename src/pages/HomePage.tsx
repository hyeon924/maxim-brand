import { ArrowDown, ArrowRight, Bean, Coffee, Droplets, Flame, MoveRight, Sparkles, Wind } from 'lucide-react'
import type { CSSProperties } from 'react'
import { Footer } from '../components/Layout'

type Props = { onNavigate: (to: string) => void }
const principles = [
  { icon: <span className="percent">80%</span>, title: '산미와 풍미가 가득한', text: '아라비아 원두 사용' },
  { icon: <Bean />, title: '원두 종류 특성에 알맞는', text: '선별적인 프로파일 로스팅 공법' },
  { icon: <Wind />, title: '볶은 원두에서 직접 향을 회수하는', text: 'RAP 공법' },
  { icon: <Droplets />, title: '저온·단시간으로 추출하는', text: 'APEX 추출공법' },
]
const blends = [
  ['MOCHA GOLD', '부드러운 달콤함', '#d5a348'], ['WHITE GOLD', '깔끔한 한 잔', '#e8dfd0'], ['KANU', '깊고 향긋한 아메리카노', '#2d2d2d'], ['T.O.P', '차갑고 선명한 커피', '#9c3425']
]
export function HomePage({ onNavigate }: Props) {
  return <>
    <section className="home-scene intro-scene">
      <div className="grain" /><div className="intro-copy"><p>MAXIM, SINCE 1980</p><h1>오늘의 시작을<br /><em>더 깊고 풍부하게.</em></h1><span>한 잔의 커피가 만드는 가장 나다운 순간</span></div>
      <div className="intro-stamp"><Coffee size={28} /><b>MAXIM<br />COFFEE</b></div><a className="scene-next" href="#principles">SCROLL <ArrowDown size={16} /></a>
    </section>
    <section className="home-scene principles-scene" id="principles">
      <SceneHeading eyebrow="MAXIM SLOGAN" title="한 잔에 담은, 맥심의 정성" />
      <div className="principle-grid">{principles.map((item, index) => <article key={item.text}><span>0{index + 1}</span><div className="principle-icon">{item.icon}</div><h3>{item.title}<br />{item.text}</h3></article>)}</div>
    </section>
    <section className="home-scene blend-scene">
      <div className="blend-header"><SceneHeading eyebrow="MAXIM FAMILY" title="당신의 오늘을 고르는 커피" /><p>취향과 순간에 따라 달라지는<br />맥심의 다양한 커피를 만나보세요.</p></div>
      <div className="blend-list">{blends.map(([name, desc, color], index) => <article key={name} style={{ '--blend': color } as CSSProperties}><span>0{index + 1}</span><div><h3>{name}</h3><p>{desc}</p></div><MoveRight /></article>)}</div>
    </section>
    <section className="home-scene craft-scene">
      <div className="craft-mark"><Flame /><Sparkles /></div><div><p>MAXIM CRAFT</p><h2>커피 한 잔의<br /><em>완성도</em>를 높이는 시간</h2><span>좋은 원두를 고르고, 가장 맛있는 순간을 찾아<br />정성껏 로스팅합니다.</span></div><div className="craft-stat"><b>46</b><p>years of<br />coffee craft</p></div>
    </section>
    <section className="home-scene archive-scene">
      <p>MAXIM HISTORY</p><h2>매일의 한 잔이<br />쌓아온 <em>시간</em></h2><button onClick={() => onNavigate('/history')}>브랜드 연혁 보기 <ArrowRight size={18} /></button><div className="archive-years"><span>1980</span><i /><span>2026</span></div>
    </section>
    <Footer />
  </>
}
function SceneHeading({ eyebrow, title }: { eyebrow: string; title: string }) { return <header className="scene-heading"><p>{eyebrow}</p><h2>{title}</h2></header> }
