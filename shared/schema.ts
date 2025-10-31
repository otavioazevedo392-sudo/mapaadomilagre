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
    name: "Camila Santos",
    text: "Antes eu lia e não entendia nada... agora tudo faz sentido.",
    rating: 5,
  },
  {
    id: "2",
    name: "José Marcos",
    text: "O Mapa da Bíblia me mostrou conexões que eu nunca tinha percebido.",
    rating: 5,
  },
  {
    id: "3",
    name: "Juliana Ramos",
    text: "Hoje cada leitura tem propósito. Sinto Deus falando comigo.",
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
    answer: "Após a confirmação do pagamento, você receberá imediatamente um email com o PDF completo do Mapa da Bíblia e todos os bônus inclusos.",
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
