import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail } from "lucide-react";

const secretariatMembers = [
  { name: "Lay Director", role: "Lay Director", description: "Provides leadership and direction for the Cursillo Movement in the Diocese." },
  { name: "Spiritual Advisor", role: "Spiritual Advisor", description: "Provides spiritual guidance and counsel to the Cursillo community." },
  { name: "Pre-Cursillo Chair", role: "Pre-Cursillo", description: "Coordinates activities related to preparing candidates for the Cursillo weekend." },
  { name: "Cursillo Weekend Chair", role: "3-Day Weekend", description: "Oversees the planning and execution of Cursillo weekends." },
  { name: "Post-Cursillo Chair", role: "Post-Cursillo", description: "Manages activities following the weekend, including Ultreyas and Group Reunions." },
  { name: "Secretary", role: "Secretary", description: "Handles correspondence and maintains records for the Secretariat." },
  { name: "Treasurer", role: "Treasurer", description: "Manages the financial operations of the Cursillo Movement." },
  { name: "School of Leaders Coordinator", role: "School of Leaders", description: "Organizes and leads the School of Leaders sessions." },
];

const Secretariat = () => {
  return (
    <Layout>
      <section className="bg-secondary py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-secondary-foreground mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Secretariat
          </h1>
          <p className="text-secondary-foreground/70 text-lg">
            Leadership of the Cursillo Movement — Diocese of St. Augustine
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The Secretariat is the governing body of the Cursillo Movement in the Diocese of St. Augustine. 
              Its members volunteer their time and talents to serve the Cursillo community.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {secretariatMembers.map((member) => (
              <Card key={member.role} className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base" style={{ fontFamily: 'system-ui, sans-serif' }}>{member.role}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-accent/50">
        <div className="container max-w-xl text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            For questions about the Cursillo Movement in the Diocese of St. Augustine, please reach out to us.
          </p>
          <div className="inline-flex items-center gap-2 text-primary font-semibold">
            <Mail className="h-5 w-5" />
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
