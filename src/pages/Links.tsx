import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ExternalLink } from "lucide-react";

const links = [
  { title: "Daily Readings", url: "http://usccb.org/bible/readings", desc: "Today's scripture readings from the USCCB" },
  { title: "Find A Parish", url: "http://dosafl.com/find-a-parish", desc: "Locate a parish in the Diocese of St. Augustine" },
  { title: "Diocese of St. Augustine", url: "http://dosafl.com/cursillo", desc: "Cursillo page on the Diocese website" },
  { title: "Holy Days of Obligation", url: "http://usccb.org/beliefs-and-teachings/what-we-believe/canon-law/complementary-norms/canon-1246.cfm", desc: "Canon law on Holy Days" },
  { title: "Liturgy of the Hours", url: "http://usccb.org/prayer-and-worship/liturgy-of-the-hours/index.cfm", desc: "Pray the Divine Office" },
  { title: "National Cursillo", url: "http://natl-cursillo.org/", desc: "National Cursillo Movement website" },
  { title: "St. Augustine Catholic Magazine", url: "http://dosafl.com/staugcatholic", desc: "Diocese magazine" },
  { title: "Vatican Website", url: "http://news.va/", desc: "Official Vatican news" },
];

const Links = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Resources" title="Links" subtitle="Helpful Catholic and Cursillo resources" />
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div className="space-y-3">
            {links.map((link, i) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                ref={reveal}
                className={`fade-up stagger-${Math.min(i + 1, 6)} flex items-center gap-4 bg-card border rounded-xl p-5 no-underline hover-lift group`}
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground font-sans group-hover:text-primary transition-colors">{link.title}</h3>
                  <p className="text-xs text-muted-foreground font-sans mt-0.5">{link.desc}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Links;
