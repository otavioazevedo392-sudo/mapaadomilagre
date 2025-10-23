import { z } from "zod";

export const testimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  text: z.string(),
  rating: z.number().min(1).max(5),
});

export const faqSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
});

export type Testimonial = z.infer<typeof testimonialSchema>;
export type FAQ = z.infer<typeof faqSchema>;

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "José Marcos",
    text: "Me surpreendi com a clareza e profundidade que o material traz para o estudo da Bíblia Sagrada.",
    rating: 5,
  },
  {
    id: "2",
    name: "Camila Santos",
    text: "Antes, eu lia a Bíblia sem entender as conexões. Agora tudo faz sentido.",
    rating: 5,
  },
  {
    id: "3",
    name: "Juliana Ramos",
    text: "Cada leitura agora tem um propósito. O Mapa da Bíblia me guiou de volta à Palavra.",
    rating: 5,
  },
  {
    id: "4",
    name: "Pedro Oliveira",
    text: "Material incrível! Finalmente consigo acompanhar a cronologia bíblica sem me perder.",
    rating: 5,
  },
  {
    id: "5",
    name: "Maria Silva",
    text: "Recomendo para todos que desejam aprofundar seu conhecimento das Escrituras.",
    rating: 5,
  },
  {
    id: "6",
    name: "Carlos Eduardo",
    text: "A organização visual facilita muito o estudo. Excelente investimento na minha fé.",
    rating: 5,
  },
  {
    id: "7",
    name: "Ana Paula",
    text: "Os bônus são maravilhosos! O plano de leitura mudou minha rotina espiritual.",
    rating: 5,
  },
  {
    id: "8",
    name: "Roberto Lima",
    text: "Nunca imaginei que poderia entender a Bíblia de forma tão completa e profunda.",
    rating: 5,
  },
];

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "O material cobre todos os livros da Bíblia?",
    answer: "Sim! O Mapa da Bíblia cobre todos os 73 livros da Bíblia católica, incluindo os livros do Antigo e Novo Testamento, com resumos, temas centrais, personagens principais e versículos-chave de cada livro.",
  },
  {
    id: "2",
    question: "É digital ou físico?",
    answer: "O material é 100% digital em formato PDF de alta qualidade. Você recebe acesso imediato após a compra e pode acessar de qualquer dispositivo. Além disso, incluímos a versão imprimível caso deseje encadernar.",
  },
  {
    id: "3",
    question: "Como recebo o acesso?",
    answer: "Após a confirmação do pagamento, você receberá imediatamente um email com o link de acesso à área de membros exclusiva, onde poderá baixar todos os materiais e bônus.",
  },
  {
    id: "4",
    question: "É voltado para católicos?",
    answer: "Sim! O Mapa da Bíblia foi criado especificamente seguindo a tradição católica e é baseado na Bíblia Ave Maria, incluindo todos os 73 livros reconhecidos pela Igreja Católica.",
  },
  {
    id: "5",
    question: "Substitui a Bíblia durante o estudo?",
    answer: "Não! O Mapa da Bíblia é um material complementar que funciona como um guia visual para facilitar sua compreensão das Escrituras. Ele foi criado para ser usado junto com sua Bíblia, enriquecendo seu estudo da Palavra de Deus.",
  },
];
