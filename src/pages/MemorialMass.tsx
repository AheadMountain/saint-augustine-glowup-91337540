import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { MapPin, Calendar } from "lucide-react";

const MemorialMass = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Special Event" title="Advent Memorial Mass" subtitle="Annual memorial celebration and Ultreya" />
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div ref={reveal} className="fade-up bg-card border rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-semibold text-foreground font-serif">Advent Memorial Mass and Ultreya</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
              <Calendar className="h-4 w-4 text-primary" />
              <span>December 2026 · 3:30 PM</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
              <MapPin className="h-4 w-4 text-primary" />
              <span>National Shrine of Our Lady of La Leche</span>
            </div>
            <p className="text-base text-muted-foreground leading-[1.85] font-sans">
              Each year, the Cursillo community gathers for a special Advent Memorial Mass to remember and honor those cursillistas who have gone before us. This is followed by a celebratory Ultreya. All cursillistas and their families are welcome to attend.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MemorialMass;
