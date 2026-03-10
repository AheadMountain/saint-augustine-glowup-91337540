import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Mail } from "lucide-react";

const MailListEspanol = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Mantente Conectado" title="Lista de Correo" subtitle="Inscríbete para recibir noticias de la comunidad de Cursillo" />
      <section className="py-16 md:py-20">
        <div className="container max-w-2xl">
          <div ref={reveal} className="fade-up bg-card border rounded-xl p-8 text-center">
            <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-3 font-serif">Únete a Nuestra Lista de Correo</h2>
            <p className="text-muted-foreground font-sans mb-6 leading-relaxed">
              Mantente informado sobre los próximos fines de semana, Ultreyas, eventos especiales y noticias de la comunidad en español.
            </p>
            <a
              href="mailto:staugustinecursillo@gmail.com?subject=Agrégame a la lista de correo en español"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold font-sans hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              <Mail className="h-4 w-4" />
              Solicitar Inscripción
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MailListEspanol;
