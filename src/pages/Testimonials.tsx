import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "When I was 18 I made a Cursillo and that made a difference to my future. Cursillo is an opportunity to live fully The Christian way.",
    author: "Most Rev. Felipe J. Estevez",
    title: "Bishop of St. Augustine",
  },
  {
    quote: "By their witness and example, they (the laity) can make the gospel an appealing message to their neighbors, coworkers, and fellow students, who might never cross the threshold of a church.",
    author: "Bishop Victor Galeone",
    title: "A Tapestry of Blessings",
    detail: "Next, I want to tell you of the marvelous experience I had at Camp St. John the weekend of Oct. 1-3. I made a Cursillo. I admit that I was less than enthusiastic about participating in this event, due to the many pressing demands on my agenda. But as the bus rolled off the campgrounds on Sunday evening, I realized that the Cursillo was one of the best religious experiences of my life. Because I witnessed firsthand the love and dedication of our laity for the Lord and his church. The testimony of those Cursillo lay leaders moved me profoundly.",
  },
];

const Testimonials = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Voices" title="Testimonials" subtitle="Hear from those whose lives have been changed by Cursillo" />
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                ref={reveal}
                className={`fade-up stagger-${i + 1} relative bg-card border rounded-xl p-6 overflow-hidden`}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <Quote className="h-8 w-8 text-primary/20 mb-3" />
                <blockquote className="text-base text-foreground leading-[1.85] font-serif italic mb-4">
                  "{t.quote}"
                </blockquote>
                {t.detail && (
                  <p className="text-sm text-muted-foreground leading-[1.85] font-sans mb-4">
                    {t.detail}
                  </p>
                )}
                <div>
                  <p className="text-sm font-semibold text-foreground font-sans">{t.author}</p>
                  <p className="text-xs text-muted-foreground font-sans">{t.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div ref={reveal} className="fade-up mt-10 bg-cream rounded-xl p-6">
            <p className="text-sm text-muted-foreground font-sans italic leading-relaxed">
              "I am personally convinced that the Cursillo movement is one of the most effective means to revitalize our lay people to assume the role that is rightfully theirs by reason of their faith and baptism. So if someone should invite you to participate in the next scheduled Cursillo weekend, please say, 'Yes.' You'll be spiritually the richer for it, and so will the church."
            </p>
            <p className="text-xs text-muted-foreground font-sans mt-2">
              — St. Augustine Catholic, November/December 2004
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
