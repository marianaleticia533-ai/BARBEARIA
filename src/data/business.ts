export const business = {
  name: "Barbearia Freguesia",
  tagline: "Tradição, cuidado e acolhimento em cada corte",
  rating: 4.9,
  reviewCount: 317,
  phoneDisplay: "(24) 3377-3515",
  phoneHref: "tel:+552433773515",
  bookingUrl: "https://sites.appbarber.com.br",
  address: {
    line1: "R. Francelino Alves de Lima, 32",
    neighborhood: "Nova Angra",
    city: "Angra dos Reis",
    state: "RJ",
    zip: "23933-005",
    full: "R. Francelino Alves de Lima, 32 - Nova Angra, Angra dos Reis - RJ, 23933-005",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Barbearia+Freguesia+Angra+dos+Reis",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=R.+Francelino+Alves+de+Lima,+32+-+Nova+Angra,+Angra+dos+Reis+-+RJ,+23933-005&output=embed",
    plusCode: "2PG3+58 Nova Angra, Angra dos Reis - RJ",
  },
  // Confirmado publicamente: fecha às 20h. Demais horários semanais não foram
  // informados pelo cliente — assumidos com base no padrão do segmento e
  // marcados como pendentes de confirmação. Ver docs/00-BRIEFING.md.
  hours: [
    { day: "Segunda-feira", value: "Fechado", pending: false },
    { day: "Terça-feira", value: "09:00 – 20:00", pending: true },
    { day: "Quarta-feira", value: "09:00 – 20:00", pending: true },
    { day: "Quinta-feira", value: "09:00 – 20:00", pending: true },
    { day: "Sexta-feira", value: "09:00 – 20:00", pending: true },
    { day: "Sábado", value: "09:00 – 20:00", pending: true },
    { day: "Domingo", value: "Fechado", pending: true },
  ],
  attributes: [
    "Empresa que acolhe a comunidade LGBTQ+",
    "Se identifica como uma empresa de empreendedoras",
  ],
  social: {
    instagram: "",
  },
} as const;
