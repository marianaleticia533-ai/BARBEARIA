export type Service = {
  name: string;
  description: string;
};

// Lista de serviços não fornecida pelo cliente. Categorias abaixo seguem o
// padrão do segmento (barbearia completa) e estão marcadas como conteúdo
// pendente de aprovação — preços e durações reais devem ser confirmados
// pelo cliente e depois cadastrados também no app de agendamento.
export const services: Service[] = [
  {
    name: "Corte de cabelo",
    description: "Corte tradicional ou degradê, com acabamento na navalha.",
  },
  {
    name: "Barba",
    description: "Modelagem completa, toalha quente e hidratação.",
  },
  {
    name: "Corte + Barba",
    description: "Combo completo para cabelo e barba na mesma sessão.",
  },
  {
    name: "Sobrancelha",
    description: "Alinhamento e acabamento na navalha ou pinça.",
  },
  {
    name: "Corte infantil",
    description: "Atendimento paciente e cuidadoso para os pequenos.",
  },
  {
    name: "Hidratação",
    description: "Tratamento para cabelo e barba mais saudáveis.",
  },
];

export const servicesNote =
  "[CONTEÚDO PENDENTE DE APROVAÇÃO] Valores e duração de cada serviço serão confirmados pelo cliente. Consulte os preços atualizados e horários disponíveis diretamente no agendamento on-line.";
