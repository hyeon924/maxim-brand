import { ArrowLeft, ArrowRight, Play } from 'lucide-react'
import { useState } from 'react'
import { Footer } from '../components/Layout'
type Props = { onNavigate: (to: string) => void }
const products = [['gold.png', 'MOCHA GOLD'], ['white.png', 'WHITE GOLD'], ['kanu.png', 'KANU'], ['tass.png', 'TASSIMO'], ['top.png', 'T.O.P']]
const features = [['icon1.png', '산미와 풍미가 가득한', '아라비아 원두 사용'], ['icon2.png', '원두 종류 특성에 알맞는', '선별적인 프로파일 로스팅 공법'], ['icon3.png', '볶은 원두에서 직접 향을 회수하는', 'RAP 공법'], ['icon4.png', '저온·단시간으로 추출하는', 'APEX 추출공법']]
export function HomePage({ onNavigate }: Props) {
  const [model, setModel] = useState(0)
  const move = (direction: number) => setModel((model + direction + 10) % 10)
  return <>
    <section className="hero"><video autoPlay loop muted playsInline poster="/assets/img/bg1.png"><source src="/assets/img/videoplayback2.mp4" type="video/mp4" /></video><div className="hero-shade" /><div className="hero-copy"><p>THE MOMENT OF COFFEE</p><h1>깊고 풍부한<br /><em>커피의 시간</em></h1><a href="#story">MAXIM STORY <ArrowRight size={17} /></a></div><div className="scroll-mark">SCROLL <span /></div></section>
    <section className="section feature-section"><SectionHeading eyebrow="MAXIM SLOGAN" title="한 잔에 담은, 맥심의 정성" /><div className="features">{features.map(([image, line1, line2], index) => <article className="feature-card" key={image}><span>0{index + 1}</span><img src={`/assets/img/${image}`} alt="" /><h3>{line1}<br />{line2}</h3></article>)}</div></section>
    <section className="section family-section"><SectionHeading eyebrow="MAXIM FAMILY" title="매일의 순간을 위한 커피" /><div className="product-grid">{products.map(([image, name]) => <article className="product-card" key={name}><div><img src={`/assets/img/${image}`} alt={name} /></div><h3>{name}</h3><p>더 알아보기 <ArrowRight size={15} /></p></article>)}</div></section>
    <section className="section model-section"><SectionHeading eyebrow="MAXIM MODEL" title="우리의 오늘을 닮은 이야기" /><div className="model-layout"><div className="video-frame"><iframe src="https://www.youtube.com/embed/97YnfiOMHgA" title="MAXIM 광고 영상" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /><div className="video-label"><Play size={15} fill="currentColor" /> MAXIM FILM</div></div><div className="model-picker"><p>MAXIM ARCHIVE <b>0{model + 1} / 10</b></p><img src={`/assets/img/model${model + 1}.png`} alt={`맥심 모델 ${model + 1}`} /><div><button onClick={() => move(-1)} aria-label="이전 모델"><ArrowLeft /></button><button onClick={() => move(1)} aria-label="다음 모델"><ArrowRight /></button></div></div></div></section>
    <section className="story-section" id="story"><div><p>MAXIM HISTORY</p><h2>1980년부터 이어온<br />커피의 진심</h2><button onClick={() => onNavigate('/history')}>브랜드 연혁 보기 <ArrowRight size={17} /></button></div><div className="story-cards">{['ban1.jpg', 'ban2.jpg', 'ban3.jpg'].map((image, index) => <img key={image} src={`/assets/img/${image}`} alt={`맥심 스토리 ${index + 1}`} />)}</div></section>
    <Footer />
  </>
}
export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) { return <header className="section-heading"><p>{eyebrow}</p><h2>{title}</h2></header> }
