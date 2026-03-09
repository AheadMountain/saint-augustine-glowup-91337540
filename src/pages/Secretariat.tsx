import Layout from "@/components/Layout";
import { User, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const secretariatMembers = [
  { role: "Lay Director", description: "Provides leadership and direction for the Cursillo Movement in the Diocese." },
  { role: "Spiritual Advisor", description: "Provides spiritual guidance and counsel to the Cursillo community." },
  { role: "Pre-Cursillo Chair", description: "Coordinates activities related to preparing candidates for the Cursillo weekend." },
  { role: "3-Day Weekend Chair", description: "Oversees the planning and execution of Cursillo weekends." },
  { role: "Post-Cursillo Chair", description: "Manages activities following the weekend, including Ultreyas and Group Reunions." },
  { role: "Secretary", description: "Handles correspondence and maintains records for the Secretariat." },
  { role: "Treasurer", description: "Manages the financial operations of the Cursillo Movement." },
  { role: "School of Leaders", description: "Organizes and leads the School of Leaders sessions." },
];

const Secretariat = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <section className="py-12 md:py-16" style={{ background: "hsl(18, 8%, 16%)" }}>
        <div className="container">
          <p className="text-xs uppercase tracking-[0.12em] text-white/40 font-semibold mb-2 font-sans animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}>Leadership</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 font-serif animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}>Secretariat</h1>
          <p className="text-white/55 font-sans text-lg animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}>
            Leadership of the Cursillo Movement — Diocese of St. Augustine
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <p ref={reveal} className="fade-up text-base text-muted-foreground mb-10 leading-relaxed font-sans">
            The Secretariat is the governing body of the Cursillo Movement in the Diocese of St. Augustine.
            Its members volunteer their time and talents to serve the Cursillo community.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {secretariatMembers.map((member, i) => (
              <div
                key={member.role}
                ref={reveal}
                className={`fade-up stagger-${Math.min(i + 1, 6)} bg-card border rounded-xl p-5 hover-lift`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground font-sans">{member.role}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cream">
        <div className="container max-w-lg">
          <div ref={reveal} className="fade-up-scale text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 font-serif">Get in Touch</h2>
            <p className="text-muted-foreground text-sm mb-6 font-sans">
              For questions about the Cursillo Movement in the Diocese of St. Augustine, please reach out.
            </p>
            <a
              href="mailto:info@staugustinecursillo.org"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold font-sans hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              <Mail className="h-4 w-4" />
              info@staugustinecursillo.org
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Secretariat;
