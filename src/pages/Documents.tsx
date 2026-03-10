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
    href: "https://drive.google.com/file/d/1luM6ggPg1FmTqZPT9HwycCd9UlHWeYt9/view?usp=sharing",
    isExternal: true,
    category: "application",
  },
  {
    title: "Aplicación Español",
    description: "Aplicación para el fin de semana de Cursillo (Español)",
    href: "https://drive.google.com/file/d/1fhCmes9eaktxLbw1Zs6cBd-zKsNtZaDa/view?usp=sharing",
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
    href: "https://docs.google.com/document/d/1fFUAvI0xhh2Ykykmnh29XfMK2kD53_TN/edit?usp=sharing&ouid=112378510783152767028&rtpof=true&sd=true",
    isExternal: true,
    category: "secretariat",
  },
];

const Documents = () => {
  const reveal = useScrollReveal();

  const appDocs = documents.filter((d) => d.category === "application");
  const secDocs = documents.filter((d) => d.category === "secretariat");

  const DocCard = ({ doc, i }: { doc: DocItem; i: number }) => {
    const content = (
      <div
        ref={reveal}
        className={`fade-up stagger-${Math.min(i + 1, 6)} bg-card border rounded-xl p-5 flex items-center gap-4 hover-lift group`}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent">
          <FileText className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-sm font-sans">{doc.title}</h3>
          <p className="text-xs text-muted-foreground mt-0.5 font-sans">{doc.description}</p>
        </div>
        {doc.isExternal ? (
          <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
        ) : (
          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
        )}
      </div>
    );

    if (doc.isExternal) {
      return (
        <a key={doc.title} href={doc.href} target="_blank" rel="noopener noreferrer" className="block no-underline">
          {content}
        </a>
      );
    }
    return (
      <Link key={doc.title} to={doc.href} className="block no-underline">
        {content}
      </Link>
    );
  };

  return (
    <Layout>
      <PageHeader tag="Resources" title="Documents" subtitle="Click on the document to download and print" />

      <section className="py-16 md:py-20">
        <div className="container max-w-3xl space-y-10">
          <div>
            <h2 className="text-lg font-semibold text-foreground font-serif mb-4">Application for Cursillo Weekend</h2>
            <div className="space-y-3">
              {appDocs.map((doc, i) => (
                <DocCard key={doc.title} doc={doc} i={i} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground font-serif mb-4">Secretariat Documents</h2>
            <div className="space-y-3">
              {secDocs.map((doc, i) => (
                <DocCard key={doc.title} doc={doc} i={i + appDocs.length} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Documents;
