import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";

const YourFourthDay = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Ongoing Journey" title="Your 4th Day" subtitle="The fourth day begins after the weekend and lasts the rest of your life" />
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div ref={reveal} className="fade-up space-y-6">
            <p className="text-base text-muted-foreground leading-[1.85] font-sans">
              Simply put, the fourth day begins just after the 3-day Cursillo weekend and lasts for the rest of the Cursillista's life.
            </p>

            <blockquote className="border-l-4 border-primary pl-5 py-2 bg-cream rounded-r-xl">
              <p className="text-base text-foreground italic font-serif leading-relaxed">
                "Dear Cursillistas! Follow confidently the way of formation and Christian life that you have undertaken with so much generosity. Duc in Altum! [Go into the deep!]"
              </p>
              <cite className="text-sm text-muted-foreground font-sans not-italic mt-2 block">
                — Pope John Paul II, 2002
              </cite>
            </blockquote>

            <p className="text-base text-muted-foreground leading-[1.85] font-sans">
              So, how do we keep the momentum going after the amazing experience of the weekend? The Cursillo Movement has several ways of keeping us focused, learning and evangelizing (helping us with Piety, Study and Action):
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Group Reunion", desc: "Join or form a weekly friendship group", to: "/group-reunions" },
                { title: "Ultreya", desc: "Attend monthly community gatherings", to: "/ultreya" },
                { title: "School of Leaders", desc: "Strengthen your leadership", to: "/school-of-leaders" },
                { title: "Spiritual Direction", desc: "Personal guidance recommended", to: "/secretariat" },
              ].map((item) => (
                <Link
                  key={item.title}
                  to={item.to}
                  ref={reveal}
                  className="fade-up bg-card border rounded-xl p-5 hover-lift no-underline group"
                >
                  <h3 className="text-sm font-semibold text-foreground font-sans mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-sans">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default YourFourthDay;
