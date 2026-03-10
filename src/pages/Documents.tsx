import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { FileText, Download, ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";

interface DocItem {
  title: string;
  description: string;
  href: string;
  isExternal?: boolean;
  category: "application" | "secretariat";
}

const documents: DocItem[] = [
  {
    title: "English Application",
    description: "Application for Cursillo Weekend (English)",
    href: "https://www.staugustinecursillo.org/_files/ugd/b77f4d_aabceef924c24e34b052e1e9ef2adea5.pdf",
    isExternal: true,
    category: "application",
  },
  {
    title: "Aplicación Español",
    description: "Aplicación para el fin de semana de Cursillo (Español)",
    href: "https://www.staugustinecursillo.org/_files/ugd/b77f4d_9dcc6a3c99d041bfa8bad0ed0a2f7eac.pdf",
    isExternal: true,
    category: "application",
  },
  {
    title: "Weekend Materials",
    description: "Materials needed for the Cursillo weekend",
    href: "/weekend-materials",
    category: "secretariat",
  },
  {
    title: "Adoration Sign for Men #134 and Women #132",
    description: "Cursillo Visiting Adorer sign-up sheet",
    href: "https://www.staugustinecursillo.org/_files/ugd/b77f4d_8bf5ae25f3ae4155b1811694bc6246da.docx?dn=Cursillo%20Visiting%20Adorer.docx",
    isExternal: true,
    category: "secretariat",
  },
];

const Documents = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <section className="py-12 md:py-16" style={{ background: "hsl(18, 8%, 16%)" }}>
        <div className="container">
          <p className="text-xs uppercase tracking-[0.12em] text-white/40 font-semibold mb-2 font-sans animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}>Resources</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 font-serif animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}>Documents</h1>
          <p className="text-white/55 font-sans text-lg animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}>
            Applications, guides, and resources for the Cursillo community
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div className="space-y-3">
            {documents.map((doc, i) => (
              <div
                key={doc.title}
                ref={reveal}
                className={`fade-up stagger-${Math.min(i + 1, 6)} bg-card border rounded-xl p-5 flex items-center gap-4 cursor-pointer hover-lift group ${doc.featured ? 'ring-1 ring-primary/20 relative overflow-hidden' : ''}`}
              >
                {doc.featured && (
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                )}
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${doc.featured ? 'bg-primary/10' : 'bg-accent'}`}>
                  <doc.icon className={`h-5 w-5 ${doc.featured ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm font-sans">
                    {doc.title}
                    {doc.featured && (
                      <span className="ml-2 inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] text-primary font-bold uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 font-sans">{doc.description}</p>
                </div>
                <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Documents;
