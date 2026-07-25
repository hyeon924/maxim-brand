import { ArrowDown, ArrowRight, Bean, Coffee, Droplets, Flame, MoveRight, Sparkles, Wind } from 'lucide-react'
import type { CSSProperties } from 'react'
import { Footer } from '../components/Layout'

type Props = { onNavigate: (to: string) => void }
const principles = [
  { icon: <span className="percent">01</span>, title: '바쁜 아침에도', text: '기분 좋은 시작을' },
  { icon: <Bean />, title: '잠깐의 틈에는', text: '향긋한 여유를' },
  { icon: <Wind />, title: '깊어지는 오후에는', text: '선명한 집중을' },
  { icon: <Droplets />, title: '느린 저녁에는', text: '부드러운 쉼을' },
]
const blends = [
  ['MORNING', '오늘을 깨우는 달콤한 온도', '#d5a348'], ['PAUSE', '잠깐 멈춰 나를 돌보는 시간', '#c2a88c'], ['FOCUS', '흐트러진 마음을 모으는 향', '#2d2d2d'], ['SLOW', '하루 끝에 남기는 부드러움', '#9c3425']
]
export function HomePage({ onNavigate }: Props) {
  return <>
    <section className="home-scene intro-scene">
      <div className="grain" /><div className="intro-copy"><p>MAKE YOUR OWN MOMENT</p><h1>커피를 마시는 일은<br /><em>나를 돌보는 일.</em></h1><span>맥심과 함께, 오늘의 리듬을 찾아보세요.</span></div>
      <div className="intro-stamp"><Coffee size={28} /><b>MAXIM<br />COFFEE</b></div><a className="scene-next" href="#principles">SCROLL <ArrowDown size={16} /></a>
    </section>
    <section className="home-scene principles-scene" id="principles">
      <SceneHeading eyebrow="YOUR COFFEE RHYTHM" title="오늘은 어떤 순간이 필요한가요?" />
      <div className="principle-grid">{principles.map((item, index) => <article key={item.text}><span>0{index + 1}</span><div className="principle-icon">{item.icon}</div><h3>{item.title}<br />{item.text}</h3></article>)}</div>
    </section>
    <section className="home-scene blend-scene">
      <div className="blend-header"><SceneHeading eyebrow="FOUR MOMENTS" title="하루의 모든 장면에<br />커피가 있습니다" /><p>하루에 정답은 없어요.<br />지금의 기분에 가장 가까운 한 잔을 고르세요.</p></div>
      <div className="blend-list">{blends.map(([name, desc, color], index) => <article key={name} style={{ '--blend': color } as CSSProperties}><span>0{index + 1}</span><div><h3>{name}</h3><p>{desc}</p></div><MoveRight /></article>)}</div>
    </section>
    <section className="home-scene craft-scene">
      <div className="craft-mark"><Flame /><Sparkles /></div><div><p>A SMALL, GOOD HABIT</p><h2>작은 한 잔이<br />바꾸는 <em>하루의 결</em></h2><span>멈추고, 향을 느끼고, 한 모금 천천히 마시는 것.<br />그 짧은 시간이 오늘을 조금 다르게 만듭니다.</span></div><div className="craft-stat"><b>10</b><p>minutes for<br />yourself</p></div>
    </section>
    <section className="home-scene archive-scene">
      <p>BEYOND A CUP</p><h2>좋은 커피가 남기는<br /><em>긴 여운</em></h2><button onClick={() => onNavigate('/history')}>맥심의 이야기 보기 <ArrowRight size={18} /></button><div className="archive-years"><span>PAST</span><i /><span>NEXT</span></div>
    </section>
    <Footer />
  </>
}
function SceneHeading({ eyebrow, title }: { eyebrow: string; title: string }) { return <header className="scene-heading"><p>{eyebrow}</p><h2>{title}</h2></header> }
export { SceneHeading as SectionHeading }
