import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const weekends = [
  { title: "Men's #139", date: "March 5–8, 2026", bg: "hsl(348, 70%, 33%)" },
  { title: "Women's #137", date: "March 12–15, 2026", bg: "hsl(18, 8%, 22%)" },
  { title: "Spanish Men's & Women's", date: "September 2026 · Dates TBA", bg: "hsl(145, 35%, 28%)" },
];

const UpcomingWeekends = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Register" title="Upcoming Weekends" subtitle="Find your next Cursillo weekend retreat" />
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {weekends.map((w, i) => (
              <div
                key={w.title}
                ref={reveal}
                className={`fade-up stagger-${i + 1} rounded-xl p-6 text-white hover-lift`}
                style={{ background: w.bg }}
              >
                <h3 className="text-lg font-bold mb-0.5 font-sans">{w.title}</h3>
                <p className="text-sm text-white/70 italic mb-4 font-sans">{w.date}</p>
                <Link
                  to="/documents"
                  className="inline-flex items-center gap-1.5 bg-white text-foreground px-5 py-2.5 rounded-md text-sm font-semibold font-sans hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  REGISTER <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UpcomingWeekends;
