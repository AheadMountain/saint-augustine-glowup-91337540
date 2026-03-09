import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, FileText, Users, Heart, ArrowRight, Church } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-secondary/90 py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary blur-3xl" />
        </div>
        <div className="container relative text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm text-primary mb-6">
            <Church className="h-4 w-4" />
            <span style={{ fontFamily: 'system-ui, sans-serif' }}>Diocese of St. Augustine</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-foreground mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Cursillos in Christianity
          </h1>
          <p className="text-xl md:text-2xl text-primary italic font-semibold mb-2">
            De Colores!
          </p>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            A movement of the Church that, through a method of its own, tries to put what is fundamental to being Christian into life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base font-semibold shadow-lg">
              <Link to="/events">
                View Upcoming Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/20">
              <Link to="/documents">Apply for a Weekend</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What is Cursillo */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'system-ui, sans-serif' }}>
              What is Cursillo?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cursillo is a movement of the Church that, through a method of its own, tries to put what is fundamental 
              to being Christian into life. The Cursillo Movement helps Catholics deepen their faith through a three-day 
              weekend experience followed by ongoing community support known as the "Fourth Day."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <Card key={item.title} className="text-center border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl" style={{ fontFamily: 'system-ui, sans-serif' }}>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Weekends */}
      <section className="py-16 bg-accent/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Upcoming Cursillo Weekends
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <Calendar className="h-4 w-4" />
                  <span>2025</span>
                </div>
                <CardTitle style={{ fontFamily: 'system-ui, sans-serif' }}>Men's Weekend #139</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A transformative three-day experience for men seeking to deepen their relationship with Christ.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/documents">
                    <FileText className="mr-2 h-4 w-4" />
                    Apply Now
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <Calendar className="h-4 w-4" />
                  <span>2025</span>
                </div>
                <CardTitle style={{ fontFamily: 'system-ui, sans-serif' }}>Women's Weekend #137</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A transformative three-day experience for women seeking to deepen their relationship with Christ.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/documents">
                    <FileText className="mr-2 h-4 w-4" />
                    Apply Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Ready to Begin Your Journey?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Whether you're considering your first Cursillo weekend or looking to stay connected with fellow cursillistas, we welcome you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
