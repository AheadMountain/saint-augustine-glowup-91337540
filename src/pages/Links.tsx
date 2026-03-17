import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ExternalLink, BookOpen, Church, Globe, CalendarDays, Clock, Users, Newspaper } from "lucide-react";

type LinkCategory = {
  label: string;
  links: { title: string; url: string; desc: string; icon: React.ReactNode }[];
};

const categories: LinkCategory[] = [
  {
    label: "Faith & Prayer",
    links: [
      { title: "Daily Readings", url: "http://usccb.org/bible/readings", desc: "Today's scripture readings from the USCCB", icon: <BookOpen className="h-5 w-5" /> },
      { title: "Liturgy of the Hours", url: "http://usccb.org/prayer-and-worship/liturgy-of-the-hours/index.cfm", desc: "Pray the Divine Office", icon: <Clock className="h-5 w-5" /> },
      { title: "Holy Days of Obligation", url: "http://usccb.org/beliefs-and-teachings/what-we-believe/canon-law/complementary-norms/canon-1246.cfm", desc: "Canon law on Holy Days", icon: <CalendarDays className="h-5 w-5" /> },
    ],
  },
  {
    label: "Diocese & Parish",
    links: [
      { title: "Diocese of St. Augustine", url: "https://dosafl.com/organizer/cursillo/", desc: "Cursillo page on the Diocese website", icon: <Church className="h-5 w-5" /> },
      { title: "Find A Parish", url: "https://dosafl.com/parishes/", desc: "Locate a parish in the Diocese of St. Augustine", icon: <Church className="h-5 w-5" /> },
      { title: "St. Augustine Catholic Magazine", url: "https://dosafl.com/communications-office/the-st-augustine-catholic/", desc: "Diocese magazine", icon: <Newspaper className="h-5 w-5" /> },
    ],
  },
  {
    label: "Cursillo & Church",
    links: [
      { title: "National Cursillo", url: "http://natl-cursillo.org/", desc: "National Cursillo Movement website", icon: <Users className="h-5 w-5" /> },
      { title: "Vatican Website", url: "https://www.vaticannews.va/en.html", desc: "Official Vatican news", icon: <Globe className="h-5 w-5" /> },
    ],
  },
];

const Links = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Resources" title="Links" subtitle="Helpful Catholic and Cursillo resources" />
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          {categories.map((cat, catIdx) => (
            <div key={cat.label} className={catIdx > 0 ? "mt-10" : ""}>
              <h2
                ref={reveal}
                className="fade-up text-xs uppercase tracking-[0.12em] text-primary font-semibold font-sans mb-4"
              >
                {cat.label}
              </h2>
              <div className="space-y-3">
                {cat.links.map((link, i) => (
                  <a
                    key={link.title}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ref={reveal}
                    className={`fade-up stagger-${Math.min(i + 1, 6)} flex items-center gap-4 bg-card border rounded-xl p-5 no-underline hover-lift group`}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      {link.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-foreground font-sans group-hover:text-primary transition-colors">{link.title}</h3>
                      <p className="text-xs text-muted-foreground font-sans mt-0.5">{link.desc}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Links;
