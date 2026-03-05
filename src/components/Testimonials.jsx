import "../styles/Testimonials.css";
import { testimonials } from "../data/data";

export default function Testimonials() {
  return (
    <section className="testimonials" id="depoimentos">
      <div className="container">
        <header className="testimonials__header">
          <span className="section-label">O que falam de nós</span>
          <h2 className="section-title">
            Histórias <span>reais</span>
          </h2>
        </header>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="testimonial-card__stars">★★★★★</div>
              <p className="testimonial-card__text">"{t.text}"</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.initials}</div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__meta">{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}