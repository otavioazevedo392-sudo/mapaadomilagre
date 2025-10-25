import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const notifications = [
  {
    title: "✅ Nova compra realizada!",
    description: "Maria de São Paulo adquiriu o Mapa da Bíblia há 3 minutos",
  },
  {
    title: "⭐ Avaliação 5 estrelas!",
    description: "Pedro acabou de avaliar: 'Material excelente!'",
  },
  {
    title: "👥 Católico satisfeito!",
    description: "João de Minas Gerais está estudando agora",
  },
  {
    title: "📖 Estudo em andamento!",
    description: "Ana Clara está aprofundando seu conhecimento bíblico",
  },
  {
    title: "❤️ Transformação de vida!",
    description: "Carlos relata: 'Minha fé nunca esteve tão forte'",
  },
  {
    title: "✅ Nova conquista!",
    description: "Juliana completou a leitura do Antigo Testamento",
  },
  {
    title: "👥 Comunidade crescendo!",
    description: "+50 católicos se juntaram essa semana",
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
