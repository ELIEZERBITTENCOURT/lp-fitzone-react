/* Dados simulados */
export const modalities = [
  {
    icon: "🏋️",
    title: "Musculação",
    desc: "Equipamentos de última geração para hipertrofia e força, com acompanhamento personalizado.",
    tag: "Alta demanda",
  },
  {
    icon: "🥊",
    title: "Boxe",
    desc: "Aprenda técnicas reais com instrutores experientes. Queima calorias e desenvolve disciplina.",
    tag: "Novo",
  },
  {
    icon: "🧘",
    title: "Yoga & Pilates",
    desc: "Equilíbrio entre força e flexibilidade. Ideal para recuperação e bem-estar mental.",
    tag: "Relaxamento",
  },
  {
    icon: "🚴",
    title: "Spinning",
    desc: "Aulas coletivas de alta intensidade em bike ergométrica com música e energia contagiante.",
    tag: "Cardio",
  },
  {
    icon: "⚡",
    title: "CrossFit",
    desc: "Treinamento funcional de alta performance para quem busca resultados rápidos e desafiadores.",
    tag: "Intenso",
  },
  {
    icon: "🏊",
    title: "Natação",
    desc: "Piscina semiolímpica aquecida com turmas para todos os níveis — do iniciante ao avançado.",
    tag: "Completo",
  },
];

export const plans = [
  {
    name: "Básico",
    monthly: 89,
    annual: 69,
    features: [
      { label: "Acesso à musculação",     ok: true },
      { label: "Vestiários completos",    ok: true },
      { label: "App de treino",           ok: true },
      { label: "Aulas coletivas",         ok: false },
      { label: "Personal trainer",        ok: false },
      { label: "Nutricionista",           ok: false },
    ],
    featured: false,
  },
  {
    name: "Pro",
    monthly: 149,
    annual: 119,
    features: [
      { label: "Acesso à musculação",     ok: true },
      { label: "Vestiários completos",    ok: true },
      { label: "App de treino",           ok: true },
      { label: "Aulas coletivas",         ok: true },
      { label: "Personal trainer",        ok: true },
      { label: "Nutricionista",           ok: false },
    ],
    featured: true,
  },
  {
    name: "Elite",
    monthly: 219,
    annual: 179,
    features: [
      { label: "Acesso à musculação",     ok: true },
      { label: "Vestiários completos",    ok: true },
      { label: "App de treino",           ok: true },
      { label: "Aulas coletivas",         ok: true },
      { label: "Personal trainer",        ok: true },
      { label: "Nutricionista",           ok: true },
    ],
    featured: false,
  },
];

export const team = [
  { name: "Rafael Souza",   role: "Head Personal",     emoji: "💪" },
  { name: "Camila Torres",  role: "Yoga & Pilates",    emoji: "🧘" },
  { name: "Diego Mendes",   role: "Boxe & CrossFit",   emoji: "🥊" },
  { name: "Ana Rodrigues",  role: "Nutricionista",     emoji: "🥗" },
];

export 
const testimonials = [
  {
    text: "A FitZone mudou completamente minha relação com o treino. Em 4 meses perdi 12kg e ganhei uma autoconfiança incrível. Os instrutores são excepcionais.",
    name: "Mariana Costa",
    meta: "Aluna há 8 meses",
    initials: "MC",
  },
  {
    text: "Estrutura impecável, equipamentos modernos e uma energia que te faz querer voltar todo dia. Nunca me senti tão bem fisicamente.",
    name: "Lucas Oliveira",
    meta: "Aluno há 1 ano",
    initials: "LO",
  },
  {
    text: "Comecei do zero sem saber nada de academia. O pessoal da FitZone me acolheu, montou meu treino e hoje sou outra pessoa. Vale cada centavo.",
    name: "Fernanda Lima",
    meta: "Aluna há 6 meses",
    initials: "FL",
  },
];
