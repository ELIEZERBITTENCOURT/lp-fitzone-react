# FitZone — Landing Page

Landing page moderna e responsiva para academia, desenvolvida em **React** com estilo dark e paleta de destaque em amarelo elétrico.

---

## Estrutura do Projeto

```
lp-fitzone-react/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navegação fixa com scroll-aware
│   │   ├── Hero.jsx            # Banner principal com estatísticas
│   │   ├── Modalities.jsx      # Seção de modalidades oferecidas
│   │   ├── Plans.jsx           # Planos com toggle mensal/anual
│   │   ├── Team.jsx            # Equipe de instrutores
│   │   ├── Testimonials.jsx    # Depoimentos de alunos
│   │   ├── Contact.jsx         # Formulário de contato
│   │   └── Footer.jsx          # Rodapé com links e redes sociais
│   ├── styles/         
│   │   ├── Navbar.css          # Estilização da Navbar
│   │   ├── Hero.css            # Hero com animações fadeUp
│   │   ├── Modalities.css      # Grid de modalidades
│   │   ├── Plans.css           # Cards de planos e toggle
│   │   ├── Footer.css          # Estilização do Footer
|   |   ├── Testimonials.css    # Estilização do Testimonials
|   |   ├── Contact.css         # Estilização do Contact
|   |   └── Team.css            # Estilização do Team
|   ├── data/
|   |   └── data.js             # Dados simulados
|   ├── global.css              # Variáveis, reset, utilitários e botões
|   ├── main.jsx
│   └── App.jsx                 # Componente raiz
├── index.html
├── package.json
└── README.md
```

---

## Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm ou yarn

### Instalação

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse em: `http://localhost:5173`

### Build para produção

```bash
npm run build
```

---

## Design System

### Paleta de Cores

| Variável             | Valor       | Uso                          |
|----------------------|-------------|------------------------------|
| `--bg-primary`       | `#0a0a0a`   | Fundo principal              |
| `--bg-secondary`     | `#111111`   | Fundo de seções alternadas   |
| `--bg-card`          | `#161616`   | Fundo de cards               |
| `--accent`           | `#e8ff00`   | Cor de destaque (amarelo)    |
| `--text-primary`     | `#f0f0f0`   | Texto principal              |
| `--text-secondary`   | `#999999`   | Texto secundário             |
| `--text-muted`       | `#555555`   | Texto desabilitado           |

### Tipografia

| Fonte         | Uso                        |
|---------------|----------------------------|
| `Bebas Neue`  | Títulos e displays         |
| `Barlow`      | Corpo, labels e navegação  |

---

## Seções

| Seção            | Componente           | Descrição                                      |
|------------------|----------------------|------------------------------------------------|
| **Hero**         | `Hero.jsx`           | Banner com título animado e estatísticas       |
| **Modalidades**  | `Modalities.jsx`     | 6 modalidades em grid 3×2 com hover accent     |
| **Planos**       | `Plans.jsx`          | 3 planos com toggle de cobrança mensal/anual   |
| **Instrutores**  | `Team.jsx`           | Grid 4 colunas com cards de instrutores        |
| **Depoimentos**  | `Testimonials.jsx`   | 3 cards com avaliação e perfil do aluno        |
| **Contato**      | `Contact.jsx`        | Formulário com feedback de envio               |
| **Rodapé**       | `Footer.jsx`         | Links, redes sociais e copyright               |

---

## Funcionalidades Interativas

- **Navbar scroll-aware** — altera o fundo ao rolar a página
- **Toggle Mensal/Anual** — alterna preços nos cards de plano com badge de desconto
- **Hover com barra accent** — animação CSS nos cards de modalidades
- **Formulário de contato** — exibe tela de sucesso após envio
- **Smooth scroll** — navegação suave entre âncoras pelo menu

---

## Tecnologias

- [React 18](https://react.dev/)
- CSS puro modular (sem framework de UI)
- Google Fonts — Bebas Neue + Barlow
- Vite (recomendado como bundler)

---

## Licença

Este projeto está sob a licença MIT.

---

> Desenvolvido por Eliezer Bittencourt.