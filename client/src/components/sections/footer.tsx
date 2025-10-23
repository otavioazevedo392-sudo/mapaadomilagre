export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12" data-testid="footer">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-4">
          <p className="text-sm md:text-base">
            © 2025 Mapa do Católico — Todos os direitos reservados.
          </p>
          <p className="text-xs md:text-sm opacity-90">
            Material protegido por direitos autorais.
          </p>
          <div className="pt-4 border-t border-primary-foreground/20">
            <p className="text-sm">
              Contato: contato@mapadocatolico.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
