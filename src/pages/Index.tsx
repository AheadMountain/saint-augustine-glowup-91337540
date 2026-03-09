import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Church } from "lucide-react";
import rainbowHero from "@/assets/rainbow-hero.jpg";
import cursilloLogo from "@/assets/cursillo-logo.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero with rainbow background */}
      <section className="relative overflow-hidden">
        <img
          src={rainbowHero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        <div className="relative container py-20 md:py-28 flex flex-col items-center text-center">
          <img src={cursilloLogo} alt="Cursillo Logo" className="h-24 md:h-32 w-auto mb-6 drop-shadow-lg rounded-lg" />
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg" style={{ fontFamily: 'Georgia, serif' }}>
            Cursillos in Christianity
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-1 drop-shadow" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Diocese of St. Augustine — Jacksonville, Florida
          </p>
          <p className="text-2xl md:text-3xl italic font-bold text-amber-300 drop-shadow-lg mb-8" style={{ fontFamily: 'Georgia, serif' }}>
            De Colores!
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" className="rounded-md shadow-lg text-base">
              <Link to="/events">
                View Upcoming Events
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-md bg-white/20 border-white/40 text-white hover:bg-white/30 text-base backdrop-blur-sm">
              <Link to="/documents">Apply for a Weekend</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-14 md:py-20">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Welcome
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                The Catholic Cursillo Movement in the Diocese of St. Augustine has been changing lives since 1974. 
                Take your time and visit the different pages of the website and learn about Cursillo now, and the history of Cursillo.
              </p>
              <p className="text-foreground leading-relaxed">
                This website is how we keep in touch with all who have attended the 3 day weekend and want to become 
                more involved. Come back often to see which events you may want to attend.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Our Mission
              </h2>
              <p className="text-foreground leading-relaxed">
                Each individual lay person must stand before the world as a witness to the resurrection and life of the 
                Lord Jesus and as a sign that God lives. The laity must nourish the world with spiritual fruits, and joyfully 
                spread that spirit to encourage, support, and affirm those the Lord calls "blessed."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Cursillo - with colored icons */}
      <section className="py-14 bg-muted/50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-secondary" style={{ fontFamily: 'system-ui, sans-serif' }}>
            What is Cursillo?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Heart,
                title: "The Weekend",
                description: "A three-day experience of living in Christian community, with talks, discussions, and worship.",
                color: "bg-rainbow-red/10 text-rainbow-red",
              },
              {
                icon: Users,
                title: "Group Reunion",
                description: "Small groups that meet regularly to share their journey and support one another in faith.",
                color: "bg-rainbow-green/10 text-rainbow-green",
              },
              {
                icon: Church,
                title: "Ultreya",
                description: "Larger gatherings where cursillistas come together to share, encourage, and celebrate.",
                color: "bg-rainbow-blue/10 text-rainbow-blue",
              }
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl border p-6">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${item.color}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground" style={{ fontFamily: 'system-ui, sans-serif' }}>{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Weekends */}
      <section className="py-14">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-8" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Upcoming Cursillo Weekends
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-xl bg-primary p-6 text-primary-foreground">
              <p className="text-sm font-semibold uppercase tracking-wider opacity-80 mb-2" style={{ fontFamily: 'system-ui, sans-serif' }}>English Weekend</p>
              <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'system-ui, sans-serif' }}>Men's #139</h3>
              <p className="text-sm opacity-80 italic mb-4">March 5–8, 2026</p>
              <Button asChild variant="outline" size="sm" className="rounded-md border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/documents">
                  Apply Now
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
            <div className="rounded-xl bg-secondary p-6 text-secondary-foreground">
              <p className="text-sm font-semibold uppercase tracking-wider opacity-80 mb-2" style={{ fontFamily: 'system-ui, sans-serif' }}>English Weekend</p>
              <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'system-ui, sans-serif' }}>Women's #137</h3>
              <p className="text-sm opacity-80 italic mb-4">March 12–15, 2026</p>
              <Button asChild variant="outline" size="sm" className="rounded-md border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                <Link to="/documents">
                  Apply Now
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4 italic">
            Spanish Cursillo Weekends: Men's & Women's — September 2026
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-accent">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Ready to Begin Your Journey?
          </h2>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            Whether you're considering your first Cursillo weekend or looking to stay connected with fellow cursillistas, we welcome you.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg">
              <Link to="/events">Explore Events</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/secretariat">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
