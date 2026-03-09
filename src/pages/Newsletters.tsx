import Layout from "@/components/Layout";
import { FileText, Calendar, Download } from "lucide-react";

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

const seasonColors: Record<string, string> = {
  Spring: "border-l-rainbow-green",
  Summer: "border-l-rainbow-yellow",
  Fall: "border-l-rainbow-orange",
  Winter: "border-l-rainbow-blue",
};

const Newsletters = () => {
  return (
    <Layout>
      <section className="py-10 bg-secondary text-secondary-foreground">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Newsletters
          </h1>
          <p className="opacity-80">
            Stay informed with the latest updates from the Cursillo community
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="space-y-3">
            {newsletters.map((nl) => {
              const season = nl.title.split(" ")[0];
              const borderColor = seasonColors[season] || "border-l-primary";
              return (
                <div key={nl.title} className={`bg-card border border-l-4 ${borderColor} rounded-lg p-4 flex items-center gap-4 cursor-pointer hover:shadow-sm transition-shadow group`}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent">
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
                  <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Newsletters;
