
import "./about.css";

function About() {
  const values = [
    {
      number: "01",
      title: "SIFAT",
      text: "Har bir buyurtmada sifat va yangi masalliqlarga e'tibor beramiz.",
      icon: "✳"
    },
    {
      number: "02",
      title: "MAZА",
      text: "O'ziga xos retseptlarimiz bilan har bir luqmani zavqqa aylantiramiz.",
      icon: "↗"
    },
    {
      number: "03",
      title: "XIZMAT",
      text: "Sizning vaqtingizni qadrlaymiz va buyurtmalarni tez tayyorlaymiz.",
      icon: "⚡"
    }
  ];

  return (
    <section className="aboutPage" id="about">
      <div className="aboutGrid"></div>
      <div className="aboutGlow aboutGlowOne"></div>
      <div className="aboutGlow aboutGlowTwo"></div>

      <div className="aboutContainer">
        <div className="aboutTop">
          <div className="aboutHeading">
            <span className="aboutEyebrow">
              <i></i> BIZ HAQIMIZDA
            </span>

            <h1>
              BIZNING
              <br />
              <span>HIKOYA.</span>
            </h1>

            <p className="aboutIntro">
              Biz oddiy fast food emas, o'zgacha ta'm va
              unutilmas taassurot yaratishga intilamiz.
              ASL BURGER — mazali lahzalar boshlanadigan joy.
            </p>

            <a href="/taomlar" className="aboutButton">
              BIZNING MENYU <span>↗</span>
            </a>
          </div>

          <div className="aboutVisual">
            <div className="aboutBigNumber">ASL</div>
            <div className="aboutOrbit aboutOrbitOne"></div>
            <div className="aboutOrbit aboutOrbitTwo"></div>

            <div className="aboutImageFrame">
              <img src="/bigburger1.png" alt="ASL BURGER taomi" />
            </div>

            <div className="aboutBadge">
              <span>★</span>
              <div>
                <strong>REAL TASTE</strong>
                <small>Haqiqiy ta'm</small>
              </div>
            </div>

            <span className="aboutDecor aboutDecorOne">✳</span>
            <span className="aboutDecor aboutDecorTwo">✦</span>
          </div>
        </div>

        <div className="aboutStats">
          <div>
            <strong>100<span>%</span></strong>
            <p>SIFATGA E'TIBOR</p>
          </div>
          <div>
            <strong>01</strong>
            <p>BIZNING MAQSAD</p>
          </div>
          <div>
            <strong>∞</strong>
            <p>MAZALI LAHZALAR</p>
          </div>
        </div>

        <div className="aboutValuesHeading">
          <div>
            <span>01 — BIZNING QADRIYATLAR</span>
            <h2>NIMA UCHUN <b>ASL BURGER?</b></h2>
          </div>
          <p>Har bir detalda bizning yondashuvimiz bor.</p>
        </div>

        <div className="aboutCards">
          {values.map((item) => (
            <article className="aboutCard" key={item.number}>
              <div className="aboutCardTop">
                <span>{item.number}</span>
                <span className="aboutCardIcon">{item.icon}</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>

              <div className="aboutCardLine"></div>
              <span className="aboutCardArrow">↗</span>
            </article>
          ))}
        </div>

        <div className="aboutFooter">
          <span>ASL BURGER</span>
          <span>TA'MI BOSHQA. YONDASHUV BOSHQA.</span>
          <span>EST. WITH TASTE ✳</span>
        </div>
      </div>
    </section>
  );
}

export default About;
