import { useState } from "react";
import "../styles/Plans.css";
import { plans } from "../data/data";

export default function Plans() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="plans" id="planos">
      <div className="container">
        <header className="plans__header">
          <span className="section-label">Investimento</span>
          <h2 className="section-title">
            Escolha seu <span>plano</span>
          </h2>

          <div className="plans__toggle">
            <span className={`plans__toggle-label ${!annual ? "active" : ""}`}>Mensal</span>
            <button
              className={`toggle-switch ${annual ? "on" : ""}`}
              onClick={() => setAnnual(!annual)}
              aria-label="Alternar plano anual"
            />
            <span className={`plans__toggle-label ${annual ? "active" : ""}`}>Anual</span>
            {annual && <span className="plans__badge">Economize 20%</span>}
          </div>
        </header>

        <div className="plans__grid">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`plan-card ${p.featured ? "plan-card--featured" : ""}`}
            >
              <div className="plan-card__name">{p.name}</div>

              <div className="plan-card__price">
                <span className="plan-card__currency">R$</span>
                <span className="plan-card__amount">
                  {annual ? p.annual : p.monthly}
                </span>
              </div>
              <div className="plan-card__period">por mês</div>

              <div className="plan-card__divider" />

              <ul className="plan-card__features">
                {p.features.map((f) => (
                  <li key={f.label} className="plan-card__feature">
                    <span className={`plan-card__feature-icon ${f.ok ? "" : "disabled"}`}>
                      {f.ok ? "✓" : "×"}
                    </span>
                    {f.label}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`btn plan-card__btn ${p.featured ? "btn-primary" : "btn-outline"}`}
              >
                Começar agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}