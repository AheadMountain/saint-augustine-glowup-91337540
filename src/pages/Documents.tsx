import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
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
      <section className="bg-secondary py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-secondary-foreground mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Documents
          </h1>
          <p className="text-secondary-foreground/70 text-lg">
            Applications, guides, and resources for the Cursillo community
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {documents.map((doc) => (
              <Card
                key={doc.title}
                className={`shadow-sm hover:shadow-md transition-shadow cursor-pointer group ${doc.featured ? 'ring-2 ring-primary/30' : ''}`}
              >
                <CardContent className="flex items-center gap-4 p-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-colors ${doc.featured ? 'bg-primary/20' : 'bg-accent group-hover:bg-primary/20'}`}>
                    <doc.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground" style={{ fontFamily: 'system-ui, sans-serif' }}>
                      {doc.title}
                      {doc.featured && (
                        <span className="ml-2 inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary font-medium">
                          Featured
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground">{doc.description}</p>
                  </div>
                  <Download className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Documents;
