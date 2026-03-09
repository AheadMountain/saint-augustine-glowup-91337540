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
  Spring: "hsl(145, 63%, 42%)",
  Summer: "hsl(46, 88%, 50%)",
  Fall: "hsl(28, 80%, 52%)",
  Winter: "hsl(204, 60%, 44%)",
};

const Newsletters = () => {
  return (
    <Layout>
      <section className="py-12" style={{ background: "hsl(18, 8%, 16%)" }}>
        <div className="container">
          <p className="text-xs uppercase tracking-[0.12em] text-white/40 font-semibold mb-2 font-sans">Updates</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-serif">Newsletters</h1>
          <p className="text-white/55 font-sans">
            Stay informed with the latest updates from the Cursillo community
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container max-w-3xl">
          <div className="space-y-3">
            {newsletters.map((nl) => {
              const season = nl.title.split(" ")[0];
              const borderColor = seasonColors[season] || "hsl(348, 70%, 33%)";
              return (
                <div key={nl.title} className="relative bg-card border rounded-xl p-5 flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full" style={{ background: borderColor }} />
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-sm font-sans">{nl.title}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-0.5 font-sans">
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
