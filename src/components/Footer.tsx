import atleanLogo from "@/assets/atlean-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-4">
          <img 
            src={atleanLogo} 
            alt="Atlean.ai" 
            className="h-10 w-auto opacity-80"
          />
          <p className="text-sm text-muted-foreground max-w-md">
            Solução CRM Inteligente desenvolvida pela Atlean.ai para transformar a gestão empresarial através de inteligência artificial.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Atlean.ai. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
