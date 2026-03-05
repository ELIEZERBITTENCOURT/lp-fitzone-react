import "../styles/Team.css";
import { team } from "../data/data";

export default function Team() {
  return (
    <section className="team" id="instrutores">
      <div className="container">
        <header className="team__header">
          <span className="section-label">Quem vai te guiar</span>
          <h2 className="section-title">
            Nossa <span>equipe</span>
          </h2>
        </header>

        <div className="team__grid">
          {team.map((m) => (
            <div className="team-card" key={m.name}>
              <div className="team-card__placeholder">{m.emoji}</div>
              <div className="team-card__overlay">
                <div className="team-card__name">{m.name}</div>
                <div className="team-card__role">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}