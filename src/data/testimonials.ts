export type Testimonial = {
  author: string;
  meta: string;
  quote: string;
  timeAgo: string;
};

// Depoimentos reais extraídos do perfil público da empresa no Google Maps,
// fornecidos pelo cliente. Não foram inventados nem alterados em conteúdo.
export const testimonials: Testimonial[] = [
  {
    author: "Marcelo França",
    meta: "1 avaliação",
    timeAgo: "há 1 ano",
    quote:
      "Excelente profissionais. A melhor barbearia de Angra dos Reis! Qualidade e preço só aqui na Barbearia Freguesia. Enquanto você espera para cortar seu cabelo tem aquele cafezinho quentinho com o melhor ambiente.",
  },
  {
    author: "Salatiel Fortunato",
    meta: "2 avaliações",
    timeAgo: "há 10 meses",
    quote:
      "Fui atendido pelo Eliseu, ótimo atendimento, fui recebido com um café top, ganhei uma hidratação por ser o primeiro corte. Muito bom!",
  },
  {
    author: "Prof. Wallace Santos",
    meta: "Guia Local · 17 avaliações",
    timeAgo: "há 2 anos",
    quote:
      "A barbearia é simplesmente o que todos esperam: pontualidade, profissionalismo e tratamento de excelência, desde a recepção até o final do corte. Recomendo demais a Barbearia Freguesia, você vai amar!",
  },
];
