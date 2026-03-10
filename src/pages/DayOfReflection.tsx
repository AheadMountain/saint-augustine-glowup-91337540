import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

const DayOfReflection = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Special Event" title="Day of Reflection" subtitle="A day of prayer, reflection, and community" />
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div ref={reveal} className="fade-up bg-card border rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-semibold text-foreground font-serif">2025 Day of Reflection</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
              <Calendar className="h-4 w-4 text-primary" />
              <span>June 20, 2026 · 9:00 AM – 3:00 PM</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Christ the King Catholic Church</span>
            </div>
            <p className="text-base text-muted-foreground leading-[1.85] font-sans">
              The Day of Reflection is a special gathering for the Cursillo community to come together for a day of prayer, reflection, and renewal. All cursillistas are welcome to attend.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfeWLss3K4hdym5R9SZ-VFaIVPXPSr33sqHQSBiIIHX8vzA0w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold font-sans hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              Register Here <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DayOfReflection;
