import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Image } from "lucide-react";

const PhotoGallery = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Gallery" title="Photo Gallery" subtitle="Photos from Cursillo weekends, Ultreyas, and community gatherings" />
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div ref={reveal} className="fade-up text-center bg-card border rounded-xl p-12">
            <Image className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2 font-serif">Photo Gallery Coming Soon</h2>
            <p className="text-muted-foreground font-sans">
              We're organizing photos from recent events. Check back soon for a collection of photos from Cursillo weekends, Ultreyas, and special events.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PhotoGallery;
