import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Church, Calendar } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-muted/40">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Diocese of St. Augustine
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Cursillos in Christianity
            </h1>
            <p className="text-xl italic text-primary mb-6">De Colores!</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              A movement of the Church that tries to put what is fundamental to being Christian into life.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/events">
                  View Events
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/documents">Apply for a Weekend</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Cursillo */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ fontFamily: 'system-ui, sans-serif' }}>
            What is Cursillo?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Heart,
                title: "The Weekend",
                description: "A three-day experience of living in Christian community, with talks, discussions, and worship."
              },
              {
                icon: Users,
                title: "Group Reunion",
                description: "Small groups that meet regularly to share their journey and support one another in faith."
              },
              {
                icon: Church,
                title: "Ultreya",
                description: "Larger gatherings where cursillistas come together to share, encourage, and celebrate."
              }
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-card border p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'system-ui, sans-serif' }}>{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Weekends */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-8" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Upcoming Cursillo Weekends
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
            {[
              { icon: "♂", title: "Men's Weekend #139", date: "2025 — Contact for dates", label: "REGISTER" },
              { icon: "♀", title: "Women's Weekend #137", date: "2025 — Contact for dates", label: "REGISTER" },
            ].map((w) => (
              <div key={w.title} className="rounded-2xl bg-secondary-foreground/5 p-6 flex flex-col">
                <span className="text-2xl mb-3">{w.icon}</span>
                <h3 className="text-xl font-bold text-secondary-foreground mb-1" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  {w.title}
                </h3>
                <p className="text-sm text-secondary-foreground/70 mb-5">{w.date}</p>
                <Button asChild variant="outline" size="sm" className="rounded-full w-fit border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
                  <Link to="/documents">
                    {w.label}
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Ready to Begin?
          </h2>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            Whether you're considering your first Cursillo weekend or looking to stay connected, we welcome you.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/events">Explore Events</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/secretariat">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
