import "../styles/Modalities.css";
import { modalities } from "../data/data";

export default function Modalities() {
  return (
    <section className="modalities" id="modalidades">
      <div className="container">
        <header className="modalities__header">
          <span className="section-label">O que oferecemos</span>
          <h2 className="section-title">
            Modalidades <span>disponíveis</span>
          </h2>
        </header>

        <div className="modalities__grid">
          {modalities.map((m, i) => (
            <div className="modality-card" key={m.title}>
              <span className="modality-card__number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="modality-card__icon">{m.icon}</span>
              <h3 className="modality-card__title">{m.title}</h3>
              <p className="modality-card__desc">{m.desc}</p>
              <span className="modality-card__tag">{m.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}