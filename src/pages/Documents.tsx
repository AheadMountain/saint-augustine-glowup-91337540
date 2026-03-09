import Layout from "@/components/Layout";
import { FileText, Download, ClipboardList, BookOpen, File } from "lucide-react";

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
  return (
    <Layout>
      <section className="py-12 bg-muted/40">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Documents
          </h1>
          <p className="text-muted-foreground">
            Applications, guides, and resources for the Cursillo community
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="space-y-3">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className={`rounded-2xl border bg-card p-4 flex items-center gap-4 cursor-pointer hover:border-primary/30 transition-colors group ${doc.featured ? 'ring-1 ring-primary/20 border-primary/20' : ''}`}
              >
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${doc.featured ? 'bg-primary/15' : 'bg-primary/10 group-hover:bg-primary/15'}`}>
                  <doc.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    {doc.title}
                    {doc.featured && (
                      <span className="ml-2 inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] text-primary font-semibold uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{doc.description}</p>
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
