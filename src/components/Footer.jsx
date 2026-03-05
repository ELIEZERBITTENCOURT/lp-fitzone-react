import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">

          <div>
            <div className="footer__brand-logo">FIT<span>ZONE</span></div>
            <p className="footer__brand-desc">
              Transformando corpos e mentes desde 2018. Venha fazer parte da
              maior comunidade fitness de São Paulo.
            </p>
          </div>

          <div>
            <div className="footer__col-title">Academia</div>
            <ul className="footer__col-links">
              {["Modalidades","Instrutores","Infraestrutura","Avaliação física"].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Planos</div>
            <ul className="footer__col-links">
              {["Básico","Pro","Elite","Empresarial"].map(l => (
                <li key={l}><a href="#planos">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Suporte</div>
            <ul className="footer__col-links">
              {["FAQ","Contato","Política de privacidade","Termos de uso"].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © 2026 <span>FitZone</span>. Todos os direitos reservados. Design from Eliezer Bittencourt.
          </p>
          <div className="footer__socials">
            {["📸","📘","🐦","▶️"].map((icon, i) => (
              <a key={i} href="#" className="footer__social" aria-label="Social">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}