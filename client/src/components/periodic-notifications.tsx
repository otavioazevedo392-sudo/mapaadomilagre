import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const notifications = [
  {
    title: "✅ Nova compra realizada!",
    description: "Maria de São Paulo acabou de comprar este produto há 3 minutos!",
  },
  {
    title: "✅ Nova compra realizada!",
    description: "João do Rio de Janeiro acabou de comprar este produto há 5 minutos!",
  },
  {
    title: "⭐ Avaliação 5 estrelas!",
    description: "Pedro de Belo Horizonte: 'Material excelente, superou minhas expectativas!'",
  },
  {
    title: "✅ Nova compra realizada!",
    description: "Ana Clara de Brasília acabou de comprar este produto há 2 minutos!",
  },
  {
    title: "✅ Nova compra realizada!",
    description: "Carlos Eduardo de Curitiba acabou de comprar este produto há 7 minutos!",
  },
  {
    title: "⭐ Avaliação 5 estrelas!",
    description: "Juliana de Porto Alegre: 'Minha fé nunca esteve tão forte!'",
  },
  {
    title: "✅ Nova compra realizada!",
    description: "Fernanda de Salvador acabou de comprar este produto há 4 minutos!",
  },
  {
    title: "✅ Nova compra realizada!",
    description: "Roberto de Fortaleza acabou de comprar este produto há 1 minuto!",
  },
  {
    title: "⭐ Avaliação 5 estrelas!",
    description: "Camila de Recife: 'Agora entendo a Bíblia de forma completa!'",
  },
  {
    title: "✅ Nova compra realizada!",
    description: "Lucas de Manaus acabou de comprar este produto há 6 minutos!",
  },
  {
    title: "✅ Nova compra realizada!",
    description: "Patrícia de Goiânia acabou de comprar este produto há 8 minutos!",
  },
  {
    title: "⭐ Avaliação 5 estrelas!",
    description: "José Marcos de Florianópolis: 'Melhor investimento na minha vida espiritual!'",
  },
  {
    title: "✅ Nova compra realizada!",
    description: "Amanda de Belém acabou de comprar este produto há 3 minutos!",
  },
  {
    title: "✅ Nova compra realizada!",
    description: "Thiago de Vitória acabou de comprar este produto há 5 minutos!",
  },
  {
    title: "⭐ Avaliação 5 estrelas!",
    description: "Beatriz de São Luís: 'Finalmente consigo acompanhar a cronologia bíblica!'",
  },
  {
    title: "✅ Nova compra realizada!",
    description: "Rafael de Natal acabou de comprar este produto há 2 minutos!",
  },
  {
    title: "✅ Nova compra realizada!",
    description: "Gabriela de Maceió acabou de comprar este produto há 4 minutos!",
  },
];

export function PeriodicNotifications() {
  const { toast } = useToast();

  useEffect(() => {
    const showRandomNotification = () => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
      
      toast({
        title: randomNotification.title,
        description: randomNotification.description,
        duration: 5000,
      });
    };

    const initialDelay = setTimeout(() => {
      showRandomNotification();
      
      const interval = setInterval(() => {
        showRandomNotification();
      }, 15000);

      return () => clearInterval(interval);
    }, 10000);

    return () => clearTimeout(initialDelay);
  }, [toast]);

  return null;
}
