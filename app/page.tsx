import Image from 'next/image';

const profile = [
  { label: 'なまえ', value: '大福', sub: 'だいふく' },
  { label: 'ねんれい', value: '6歳', sub: 'まだまだ甘えんぼ' },
  { label: 'せいべつ', value: '男の子', sub: 'やさしい王子さま' },
  { label: 'おしごと', value: '自宅警備員', sub: '今日も異常なし' },
];

const moments = [
  { number: '01', title: '木漏れ日の公園', text: 'やわらかな緑と、気持ちのいい風。いつもの道も、大福となら特別な散歩道。' },
  { number: '02', title: 'お芋のおやつ', text: 'いちばん好きなのは、お芋のおやつ。小さなひとくちが、大きなしあわせ。' },
  { number: '03', title: 'まんまるスマイル', text: 'ふわふわ、まんまる、にっこり。見ているだけで心がほどける、大福の笑顔。' },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="大福の日々 トップへ">
          <span className="brand-mark" aria-hidden="true">🐾</span>
          <span><b>DAIFUKU</b><small>tiny happy days</small></span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#about">大福について</a><a href="#favorites">好きなもの</a><a href="#gallery">ギャラリー</a><a href="#music">テーマソング</a>
        </nav>
        <a className="header-cta" href="#gallery">写真を見る</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> POMERANIAN · 6 YEARS OLD</p>
          <h1 id="hero-title">もふもふの毎日は、<br /><em>ちいさなしあわせ</em>で<br />できている。</h1>
          <p className="hero-lead">大福（だいふく）、6歳。<br />お芋のおやつと公園が似合う、わが家の自宅警備員です。</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#about">大福に会いにいく <span>↘</span></a>
            <a className="text-link" href="#favorites">大福の好きなもの <span>→</span></a>
          </div>
          <div className="hero-note"><span aria-hidden="true">☀</span><p><small>TODAY&apos;S MOOD</small><b>ごきげん、満開。</b></p></div>
        </div>
        <div className="hero-visual">
          <div className="sun-orbit" aria-hidden="true"><span>HELLO!</span></div>
          <div className="hero-photo-wrap">
            <Image className="hero-photo" src="/images/daifuku-bandana.jpeg" alt="青いバンダナをつけて公園の芝生に寝そべる白いポメラニアンの大福" fill priority sizes="(max-width: 800px) 100vw, 48vw" />
          </div>
          <div className="name-tag"><span>NAME</span><b>大福</b><small>DAIFUKU</small></div>
          <div className="fluffy-stamp" aria-hidden="true">100%<br /><b>FLUFFY</b></div>
        </div>
        <a className="scroll-cue" href="#about" aria-label="下へスクロール"><span>SCROLL</span><i>↓</i></a>
      </section>

      <section className="ticker" aria-label="大福の特徴"><div><span>ふわふわ</span><b>✦</b><span>まんまる</span><b>✦</b><span>お芋が好き</span><b>✦</b><span>自宅警備中</span><b>✦</b><span>ふわふわ</span><b>✦</b><span>まんまる</span><b>✦</b></div></section>

      <section className="about section" id="about" aria-labelledby="about-title">
        <div className="section-intro"><p className="section-kicker">MEET DAIFUKU <span>01</span></p><h2 id="about-title">こんにちは、<br /><em>大福</em>です。</h2></div>
        <div className="about-grid">
          <div className="portrait-stack">
            <div className="portrait-frame"><Image src="/images/daifuku-sweet-potatoes.jpg" alt="公園でさつまいもの箱のそばに座って笑う大福" fill sizes="(max-width: 800px) 90vw, 38vw" /></div>
            <p className="photo-caption"><span>↳</span> 大好きなお芋といっしょに、ごきげんな午後。</p>
          </div>
          <div className="about-content">
            <p className="about-lead">白くて、まるくて、<br />ちょっぴり誇らしげ。</p>
            <p>もこもこの毛並みと、まっすぐなまなざし。大福がそこにいるだけで、いつもの景色が少しやさしくなります。</p>
            <div className="profile-grid">
              {profile.map((item) => <article key={item.label}><small>{item.label}</small><b>{item.value}</b><span>{item.sub}</span></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="favorites section" id="favorites" aria-labelledby="favorites-title">
        <div className="favorites-heading">
          <p className="section-kicker light">LITTLE JOYS <span>02</span></p><h2 id="favorites-title">大福の、<br /><em>好きなもの。</em></h2><p>なんでもない一日のなかに、<br />お気に入りはたくさんあります。</p>
        </div>
        <div className="moments">
          {moments.map((moment) => <article className="moment-card" key={moment.number}><span>{moment.number}</span><div aria-hidden="true">{moment.number === '01' ? '🌿' : moment.number === '02' ? '🍠' : '☺'}</div><h3>{moment.title}</h3><p>{moment.text}</p></article>)}
        </div>
      </section>

      <section className="gallery section" id="gallery" aria-labelledby="gallery-title">
        <div className="gallery-heading"><div><p className="section-kicker">DAIFUKU&apos;S DAYS <span>03</span></p><h2 id="gallery-title">まいにち、<em>大福日和。</em></h2></div><p>木漏れ日も、青い空も、<br />大福といっしょならもっとやさしい。</p></div>
        <div className="gallery-grid">
          <figure className="gallery-main"><Image src="/images/daifuku-sweet-potatoes.jpg" alt="公園でさつまいもの箱のそばに座る大福" fill sizes="(max-width: 800px) 100vw, 50vw" /><figcaption><span>01</span> SWEET POTATO PICNIC</figcaption></figure>
          <figure className="gallery-side"><Image src="/images/daifuku-closeup.jpg" alt="公園でうれしそうに笑う大福のアップ" fill sizes="(max-width: 800px) 100vw, 50vw" /><figcaption><span>02</span> BIG HAPPY SMILE</figcaption></figure>
        </div>
      </section>

      <section className="music section" id="music" aria-labelledby="music-title">
        <div className="music-heading">
          <p className="section-kicker light">DAIFUKU&apos;S THEME SONG <span>04</span></p>
          <div className="music-title-wrap">
            <div>
              <span className="music-label">NOW PLAYING ♪</span>
              <h2 id="music-title">小さな足音と<br /><em>大福</em></h2>
            </div>
            <p>お散歩の足音も、うれしい気持ちも。<br />大福との毎日を音楽にした、やさしい一曲です。</p>
          </div>
        </div>
        <div className="music-player-card">
          <div className="record-art" aria-hidden="true">
            <Image src="/images/daifuku-closeup.jpg" alt="" fill sizes="220px" />
            <span><i /></span>
          </div>
          <div className="music-player">
            <p><span>ORIGINAL SONG</span><b>大福のテーマソング</b></p>
            <iframe
              src="https://suno.com/embed/ab403cf5-e804-4fde-bd25-1dc696d1a6f2"
              title="小さな足音と大福 — Suno音楽プレイヤー"
              loading="lazy"
              allow="autoplay"
            />
            <div className="native-audio">
              <div>
                <span>MP3 PLAYER</span>
                <p><b>小さな足音と大福</b><small>02:42 · 添付音源</small></p>
              </div>
              <audio controls preload="metadata" aria-label="小さな足音と大福をMP3で再生">
                <source src="/audio/chiisana-ashioto-to-daifuku.mp3" type="audio/mpeg" />
                お使いのブラウザは音声再生に対応していません。
              </audio>
            </div>
            <a href="https://suno.com/song/ab403cf5-e804-4fde-bd25-1dc696d1a6f2?sh=d5TkjAKUya8Oxi1u" target="_blank" rel="noreferrer">Sunoで曲ページを開く <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <div className="closing-paw" aria-hidden="true">🐾</div><p>KEEPING HAPPINESS SAFE, EVERY DAY.</p><h2 id="closing-title">今日も大福は、<br /><em>しあわせを警備中。</em></h2><a className="button button-light" href="#top">大福の日々をもう一度 <span>↑</span></a><div className="closing-orbit" aria-hidden="true">DAIFUKU · TINY HAPPY DAYS ·</div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true">🐾</span><span><b>DAIFUKU</b><small>tiny happy days</small></span></a><p>大福と過ごす、ちいさくて大きなしあわせ。</p><small>© 2026 DAIFUKU DAYS</small>
      </footer>
    </main>
  );
}
