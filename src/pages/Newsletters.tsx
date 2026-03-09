import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      <section className="bg-secondary py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-secondary-foreground mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Newsletters
          </h1>
          <p className="text-secondary-foreground/70 text-lg">
            Stay informed with the latest updates from the Cursillo community
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsletters.map((nl) => (
              <Card key={nl.title} className="shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-accent group-hover:bg-primary/20 transition-colors">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-base" style={{ fontFamily: 'system-ui, sans-serif' }}>{nl.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{nl.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Newsletters;
