import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Mail, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Contact = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Get in Touch" title="Contact Us" subtitle="Reach out to the Cursillo community" />
      <section className="py-16 md:py-20">
        <div className="container max-w-2xl">
          <div ref={reveal} className="fade-up bg-card border rounded-xl p-8 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2 font-serif">For Donations & Mail</h2>
              <div className="flex items-start gap-3 text-muted-foreground font-sans">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p>Cursillos in Christianity</p>
                  <p>P.O. Box 5565</p>
                  <p>Jacksonville, FL 32247</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2 font-serif">Email Us</h2>
              <a
                href="mailto:staugustinecursillo@gmail.com"
                className="inline-flex items-center gap-2 text-primary font-semibold font-sans hover:underline"
              >
                <Mail className="h-5 w-5" />
                staugustinecursillo@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
