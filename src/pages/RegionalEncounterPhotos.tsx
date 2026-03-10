import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Image } from "lucide-react";

const RegionalEncounterPhotos = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Gallery" title="Regional Encounter Photos" subtitle="Photos from the 2016 Regional Encounter" />
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div ref={reveal} className="fade-up text-center bg-card border rounded-xl p-12">
            <Image className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2 font-serif">Photo Gallery</h2>
            <p className="text-muted-foreground font-sans">
              Photos from the 2016 Regional Encounter are being organized. Check back soon!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RegionalEncounterPhotos;
