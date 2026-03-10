import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Video } from "lucide-react";

const Videos = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Media" title="Videos" subtitle="Videos from the Cursillo community" />
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div ref={reveal} className="fade-up text-center bg-card border rounded-xl p-12">
            <Video className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2 font-serif">Videos Coming Soon</h2>
            <p className="text-muted-foreground font-sans">
              We're working on collecting videos from Cursillo weekends, testimonials, and community events. Check back soon!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Videos;
