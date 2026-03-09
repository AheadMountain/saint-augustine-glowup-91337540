import Layout from "@/components/Layout";
import { FileText, Calendar } from "lucide-react";

const newsletters = [
  { title: "Spring 2025 Newsletter", date: "March 2025" },
  { title: "Winter 2024 Newsletter", date: "December 2024" },
  { title: "Fall 2024 Newsletter", date: "September 2024" },
  { title: "Summer 2024 Newsletter", date: "June 2024" },
  { title: "Spring 2024 Newsletter", date: "March 2024" },
  { title: "Winter 2023 Newsletter", date: "December 2023" },
  { title: "Fall 2023 Newsletter", date: "September 2023" },
  { title: "Summer 2023 Newsletter", date: "June 2023" },
];

const Newsletters = () => {
  return (
    <Layout>
      <section className="py-12 bg-muted/40">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Newsletters
          </h1>
          <p className="text-muted-foreground">
            Stay informed with the latest updates from the Cursillo community
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="space-y-3">
            {newsletters.map((nl) => (
              <div key={nl.title} className="rounded-2xl border bg-card p-5 flex items-center gap-4 cursor-pointer hover:border-primary/30 transition-colors group">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    {nl.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-0.5">
                    <Calendar className="h-3 w-3" />
                    <span>{nl.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Newsletters;
