
import "./boshSahifa.css";

function BoshSahifa() {
  const features = [
    { icon: "🔥", title: "Issiq va mazali", text: "Har bir taom yangi tayyorlanadi." },
    { icon: "🍔", title: "Maxsus burgerlar", text: "O'ziga xos ta'm va sifat." },
    { icon: "⚡", title: "Tezkor xizmat", text: "Buyurtmangizni tez tayyorlaymiz." }
  ];

  return (
    <main className="burgerHome">
      <div className="bh-noise"></div>
      <div className="bh-orb bh-orb1"></div>
      <div className="bh-orb bh-orb2"></div>
      <div className="bh-grid"></div>

      <section className="bh-hero">
        <div className="bh-left">
          <div className="bh-status">
            <span className="bh-statusDot"></span>
            BUGUN OCHIQMIZ · 10:00 — 23:00
          </div>

          <p className="bh-eyebrow">ODDIY TAOM EMAS</p>

          <h1 className="bh-title">
            TА'MNI<br />
            <span>HIS QIL.</span>
          </h1>

          <p className="bh-description">
            Haqiqiy burger lazzati, yangi masalliqlar va
            unutilmas ta'm. Sevimli taomingiz sizni kutmoqda.
          </p>

          <div className="bh-buttons">
            <a href="/asl-burger/#taomlar" className="bh-primary">
              MENYUNI KO'R <span>↗</span>
            </a>
            <a href="#bh-features" className="bh-secondary">
              BIZ HAQIMIZDA
            </a>
          </div>

          <div className="bh-stats">
            <div>
              <strong>100%</strong>
              <span>Yangi masalliq</span>
            </div>
            <div className="bh-statLine"></div>
            <div>
              <strong>24/7</strong>
              <span>Yuqori sifat</span>
            </div>
            <div className="bh-statLine"></div>
            <div>
              <strong>TOP</strong>
              <span>Ajoyib ta'm</span>
            </div>
          </div>
        </div>

        <div className="bh-right">
          <div className="bh-circle bh-circle1"></div>
          <div className="bh-circle bh-circle2"></div>

          <span className="bh-floating bh-float1">FRESH ✦</span>
          <span className="bh-floating bh-float2">100% TASTE</span>
          <span className="bh-floating bh-float3">★ ASL BURGER</span>

          <div className="bh-imageWrap">
            <div className="bh-imageGlow"></div>
            <img
              src="/bigburger1.png"
              alt="ASL BURGER maxsus burgeri"
              className="bh-burger"
            />
          </div>

          <div className="bh-price">
            <span>BUGUNGI TANLOV</span>
            <strong>BIG BURGER</strong>
            <p>25 000 <small>so'm</small></p>
          </div>

          <div className="bh-spark bh-spark1">✳</div>
          <div className="bh-spark bh-spark2">✦</div>
          <div className="bh-spark bh-spark3">✧</div>
        </div>
      </section>

      <section className="bh-features" id="bh-features">
        {features.map((item, index) => (
          <article
            className="bh-feature"
            key={item.title}
            style={{ "--delay": `${index * 0.15}s` }}
          >
            <div className="bh-featureIcon">{item.icon}</div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
            <span className="bh-featureArrow">↗</span>
          </article>
        ))}
      </section>

      <div className="bh-bottom">
        <span>ASL BURGER — TA'MI BOSHQA</span>
        <div className="bh-marquee">
          <div className="bh-marqueeTrack">
            {Array.from({ length: 4 }, (_, i) => (
              <span key={i}>
                FRESH FOOD <b>✳</b> REAL TASTE <b>✳</b> ASL BURGER <b>✳</b>
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default BoshSahifa;
