import Layout from "@/components/Layout";
import { User, Mail } from "lucide-react";

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
  return (
    <Layout>
      <section className="py-10 bg-primary text-primary-foreground">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Secretariat
          </h1>
          <p className="opacity-80">
            Leadership of the Cursillo Movement — Diocese of St. Augustine
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-3xl">
          <p className="text-foreground mb-8 leading-relaxed">
            The Secretariat is the governing body of the Cursillo Movement in the Diocese of St. Augustine. 
            Its members volunteer their time and talents to serve the Cursillo community.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {secretariatMembers.map((member) => (
              <div key={member.role} className="bg-card border rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    {member.role}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent">
        <div className="container max-w-lg">
          <h2 className="text-2xl font-bold text-secondary mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>Get in Touch</h2>
          <p className="text-muted-foreground text-sm mb-4">
            For questions about the Cursillo Movement in the Diocese of St. Augustine, please reach out.
          </p>
          <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
            <Mail className="h-4 w-4" />
            <a href="mailto:info@staugustinecursillo.org" className="hover:underline">
              info@staugustinecursillo.org
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Secretariat;
