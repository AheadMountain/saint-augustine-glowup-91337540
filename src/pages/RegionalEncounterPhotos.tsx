import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Camera } from "lucide-react";

const RegionalEncounterPhotos = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Gallery" title="Regional Encounter Photos" subtitle="Photos from the 2016 Regional Encounter" />
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div ref={reveal} className="fade-up bg-card border rounded-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Camera className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2 font-serif">2016 Regional Encounter</h2>
              <p className="text-muted-foreground font-sans text-sm max-w-md mx-auto">
                The Regional Encounter brought together Cursillistas from across the region for a weekend of fellowship, worship, and celebration.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg flex items-center justify-center"
                  style={{ background: `hsl(${[4, 28, 46, 145, 204, 282][i]}, ${[65, 80, 88, 63, 60, 44][i]}%, ${[48, 52, 50, 42, 44, 47][i]}%, 0.08)` }}
                >
                  <Camera className="h-6 w-6 text-muted-foreground/20" />
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground font-sans text-center mt-6 italic">
              Photos will be added soon. Check back for updates.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RegionalEncounterPhotos;
