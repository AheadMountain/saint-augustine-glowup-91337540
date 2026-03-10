import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PreCursillo = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Preparation" title="Pre-Cursillo" subtitle="Sponsoring candidates for the Cursillo weekend" />
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div ref={reveal} className="fade-up space-y-6">
            <div className="bg-card border rounded-xl p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3 font-serif">The Importance of Sponsoring</h2>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                Sponsoring candidates is one of the main aspects of the Pre-Cursillo, and the most important factor that contributes to the success of the Cursillo Weekend, and evidently to the evangelizing mission of the Catholic Church.
              </p>
            </div>

            <p className="text-base text-muted-foreground leading-[1.85] font-sans">
              The Pre-Cursillo phase involves identifying, preparing, and sponsoring candidates who would benefit from the Cursillo experience. A good sponsor takes the time to befriend the candidate, explain what to expect, and remains committed to supporting them after the weekend.
            </p>

            <div className="bg-cream rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3 font-serif">Sponsor Responsibilities</h3>
              <ul className="space-y-3">
                {[
                  "Identify potential candidates who are open to deepening their faith",
                  "Build a genuine friendship with the candidate before the weekend",
                  "Explain the Cursillo weekend experience honestly",
                  "Help the candidate complete the application process",
                  "Pray for the candidate before, during, and after the weekend",
                  "Support the candidate in their Fourth Day journey",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-sans">
                    <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/documents"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold font-sans hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              Download Sponsor's Guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PreCursillo;
