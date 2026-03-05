import { useState } from "react";
import "../styles/Sections.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", plan: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact" id="contato">
      <div className="container">
        <div className="contact__inner">

          <div className="contact__info">
            <span className="section-label">Fale com a gente</span>
            <h2 className="section-title">
              Vamos <span>começar</span>?
            </h2>
            <p className="contact__desc">
              Pronto para transformar sua vida? Entre em contato e nosso time
              vai te ajudar a escolher o melhor plano para seus objetivos.
            </p>

            <div className="contact__details">
              {[
                { icon: "📍", label: "Endereço",  value: "Av. Brasil, 1500 — Centro, São Paulo" },
                { icon: "📞", label: "Telefone",  value: "(11) 99999-0000" },
                { icon: "🕐", label: "Horário",   value: "Seg–Sex 5h–23h  |  Sab–Dom 7h–20h" },
                { icon: "✉️", label: "E-mail",    value: "contato@fitzone.com.br" },
              ].map((d) => (
                <div className="contact__detail" key={d.label}>
                  <div className="contact__detail-icon">{d.icon}</div>
                  <div>
                    <div className="contact__detail-label">{d.label}</div>
                    <div className="contact__detail-value">{d.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {!sent ? (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input
                    id="name" name="name" type="text" placeholder="Seu nome"
                    value={form.name} onChange={handleChange} required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email" name="email" type="email" placeholder="seu@email.com"
                    value={form.email} onChange={handleChange} required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="plan">Plano de interesse</label>
                <select id="plan" name="plan" value={form.plan} onChange={handleChange}>
                  <option value="">Selecione um plano</option>
                  <option value="basico">Básico — R$ 89/mês</option>
                  <option value="pro">Pro — R$ 149/mês</option>
                  <option value="elite">Elite — R$ 219/mês</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message" name="message" rows={5}
                  placeholder="Conta um pouco sobre seus objetivos..."
                  value={form.message} onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary contact__submit">
                Enviar mensagem →
              </button>
            </form>
          ) : (
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:16, padding:"60px 32px", background:"var(--bg-card)", borderRadius:"var(--radius)", textAlign:"center" }}>
              <span style={{ fontSize:"3rem" }}>✅</span>
              <h3 style={{ fontFamily:"var(--font-display)", fontSize:"2rem", letterSpacing:"0.04em" }}>
                MENSAGEM ENVIADA!
              </h3>
              <p style={{ color:"var(--text-secondary)", maxWidth:300 }}>
                Recebemos seu contato. Nossa equipe vai retornar em até 24 horas.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}