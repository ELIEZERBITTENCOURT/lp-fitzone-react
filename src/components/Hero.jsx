import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" />
      <div className="hero__grid" />

      <div className="container">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-line" />
            <span className="hero__eyebrow-text">
              Bem-vindo à FitZone — Est. 2018
            </span>
          </div>

          <h1 className="hero__title">
            Forje o
            <em>seu melhor</em>
            corpo
          </h1>

          <p className="hero__desc">
            Treinamento de elite, instrutores certificados e infraestrutura
            de ponta para transformar seu corpo e sua mentalidade.
          </p>

          <div className="hero__actions">
            <a href="#planos" className="btn btn-primary">
              Ver planos →
            </a>
            <a href="#modalidades" className="btn btn-outline">
              Explorar modalidades
            </a>
          </div>
        </div>

        <div className="hero__stats">
          {[
            { value: "4.8", suffix: "★", label: "Avaliação média" },
            { value: "2.3", suffix: "K+", label: "Alunos ativos" },
            { value: "12",  suffix: "+",  label: "Modalidades" },
            { value: "98",  suffix: "%",  label: "Satisfação" },
          ].map((s) => (
            <div key={s.label}>
              <div className="hero__stat-value">
                {s.value}<span>{s.suffix}</span>
              </div>
              <div className="hero__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}