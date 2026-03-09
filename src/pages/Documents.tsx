import Layout from "@/components/Layout";
import { FileText, Download, ClipboardList, BookOpen, File } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const documents = [
  { title: "Cursillo Weekend Application", icon: ClipboardList, description: "Application form for attending a Cursillo weekend", featured: true },
  { title: "Sponsor's Guide", icon: BookOpen, description: "Information for sponsors of Cursillo candidates" },
  { title: "Group Reunion Guide", icon: FileText, description: "How to form and participate in a Group Reunion" },
  { title: "Ultreya Guidelines", icon: FileText, description: "Guidelines for hosting and attending Ultreyas" },
  { title: "Prayer & Palanca Guide", icon: BookOpen, description: "How to write palanca letters and prayer support" },
  { title: "Team Application", icon: ClipboardList, description: "Application to serve on a Cursillo weekend team" },
  { title: "Secretariat Meeting Minutes", icon: File, description: "Minutes from recent Secretariat meetings" },
  { title: "Cursillo Bylaws", icon: FileText, description: "Bylaws of the Cursillo Movement, Diocese of St. Augustine" },
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
