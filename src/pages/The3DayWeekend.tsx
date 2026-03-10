import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const topics = [
  "The lay person's role within the Church",
  "Meaning of grace and sacraments",
  "Importance of prayer and the study of God",
  "Christian leadership and living Christianity in community",
  "Our call to bring Christ to others and transform the very environments in which we live",
  "The importance of supporting one another in our efforts to live a truly Christian life",
];

const The3DayWeekend = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="The Weekend" title="The 3-Day Weekend" subtitle="A life-changing experience of faith, community, and friendship" />
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div ref={reveal} className="fade-up space-y-6">
            <p className="text-base text-muted-foreground leading-[1.85] font-sans">
              The Cursillo Movement's methodology is introduced over a consecutive seventy-two hour period called a "Three Day Weekend." During the three day weekend, which begins Thursday evening and ends Sunday evening, a team of religious and lay personnel present a series of talks to the candidates and the entire group calls upon the Holy Spirit for enlightenment and guidance.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-sans">
              The team and candidates live as a small Christian community over the weekend and discuss these talks in small groups. The discussions provide an opportunity to share insights about the presentations and hear how others received that same presentation.
            </p>

            <div ref={reveal} className="fade-up bg-card border rounded-xl p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4 font-serif">Topics Covered</h2>
              <ul className="space-y-3">
                {topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-sans">
                    <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-base text-muted-foreground leading-[1.85] font-sans">
              Throughout the weekend the participants will pray together, attend daily mass and have an opportunity to receive the sacrament of reconciliation. Typically, by the end of the weekend, candidates have a deeper relationship with Jesus Christ and a better understanding of the power of the Holy Spirit.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-sans">
              Also, candidates leave the weekend knowing that they have been called to spread the Word of God by being "leaven" within their environments.
            </p>

            <Link
              to="/documents"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold font-sans hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              Complete the Application <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default The3DayWeekend;
