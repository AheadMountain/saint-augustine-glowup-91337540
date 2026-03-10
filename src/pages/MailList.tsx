import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Mail } from "lucide-react";

const MailList = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Stay Connected" title="Mail List" subtitle="Sign up to receive updates from the Cursillo community" />
      <section className="py-16 md:py-20">
        <div className="container max-w-2xl">
          <div ref={reveal} className="fade-up bg-card border rounded-xl p-8 text-center">
            <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-3 font-serif">Join Our Mailing List</h2>
            <p className="text-muted-foreground font-sans mb-6 leading-relaxed">
              Stay informed about upcoming weekends, Ultreyas, special events, and community news. 
              Send us an email to be added to the mailing list.
            </p>
            <a
              href="mailto:staugustinecursillo@gmail.com?subject=Add me to the mailing list"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold font-sans hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              <Mail className="h-4 w-4" />
              Request to Join
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MailList;
