import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const englishEvents = [
  {
    name: "Jacksonville Ultreya",
    location: "Assumption Catholic Church, Kohl's Hall",
    tag: "SECOND FRIDAY • 7:00 PM",
    color: "border-l-rainbow-red",
  },
  {
    name: "Gainesville Ultreya",
    location: "Queen of Peace Catholic Church",
    tag: "SECOND FRIDAY • 6:00 PM",
    color: "border-l-rainbow-orange",
  },
  {
    name: "Palm Coast Ultreya",
    location: "St. Elizabeth Ann Seton — Russo Room",
    tag: "THIRD TUESDAY • 6:30 PM",
    color: "border-l-rainbow-yellow",
  },
  {
    name: "Fleming Island Ultreya",
    location: "Sacred Heart, Fleming Island — Activity Center",
    tag: "THIRD THURSDAY • 6:00 PM",
    color: "border-l-rainbow-green",
  },
  {
    name: "Jacksonville School of Leaders",
    location: "Assumption — Kohl's Hall",
    tag: "THIRD SATURDAY • 9:00 AM",
    color: "border-l-rainbow-blue",
  },
];

const spanishEvents = [
  {
    name: "Jacksonville — Ultreya y Escuela de Dirigentes",
    location: "St Joseph's Catholic Church — Cory Center",
    tag: "SEGUNDO LUNES • 7:00 PM",
    color: "border-l-rainbow-red",
  },
  {
    name: "Gainesville — Ultreya y Escuela de Dirigentes",
    location: "St Augustine Church — Catholic Student Center at UF",
    tag: "TERCER LUNES • 7:00 PM",
    color: "border-l-rainbow-orange",
  },
  {
    name: "Lake City — Ultreya y Escuela de Dirigentes",
    location: "Epiphany Catholic Church — Epiphany Social Hall",
    tag: "ÚLTIMO VIERNES • 7:30 PM",
    color: "border-l-rainbow-green",
  },
];

const Events = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-10 bg-primary text-primary-foreground">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Events & Schedule
          </h1>
          <p className="opacity-80">
            Ultreyas, School of Leaders, and upcoming Cursillo Weekends
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <Tabs defaultValue="english" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 rounded-full bg-muted h-11 p-1">
              <TabsTrigger value="english" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm font-semibold" style={{ fontFamily: 'system-ui, sans-serif' }}>
                English
              </TabsTrigger>
              <TabsTrigger value="spanish" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm font-semibold" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Español
              </TabsTrigger>
            </TabsList>

            <TabsContent value="english" className="space-y-3 mt-0">
              <h2 className="text-xl font-bold text-secondary mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
                English Ultreyas & School of Leaders
              </h2>
              {englishEvents.map((event) => (
                <div key={event.name} className={`bg-card border border-l-4 ${event.color} rounded-lg p-4`}>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-secondary" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    {event.tag}
                  </span>
                  <h3 className="text-base font-bold text-foreground mt-1" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    {event.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="spanish" className="space-y-3 mt-0">
              <h2 className="text-xl font-bold text-secondary mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Ultreyas y Escuela de Dirigentes en Español
              </h2>
              {spanishEvents.map((event) => (
                <div key={event.name} className={`bg-card border border-l-4 ${event.color} rounded-lg p-4`}>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-secondary" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    {event.tag}
                  </span>
                  <h3 className="text-base font-bold text-foreground mt-1" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    {event.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Upcoming Weekends */}
      <section className="py-12 bg-accent">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Upcoming Cursillo Weekends
          </h2>

          <div className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-secondary mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>
              English Weekends
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg bg-primary p-5 text-primary-foreground">
                <h4 className="text-lg font-bold mb-0.5" style={{ fontFamily: 'system-ui, sans-serif' }}>Men's #139</h4>
                <p className="text-sm opacity-80 italic">March 5–8, 2026</p>
                <Button asChild size="sm" className="mt-3 rounded-md bg-background text-foreground font-semibold hover:bg-background/90">
                  <Link to="/documents">REGISTER <ArrowRight className="ml-1 h-3 w-3" /></Link>
                </Button>
              </div>
              <div className="rounded-lg bg-secondary p-5 text-secondary-foreground">
                <h4 className="text-lg font-bold mb-0.5" style={{ fontFamily: 'system-ui, sans-serif' }}>Women's #137</h4>
                <p className="text-sm opacity-80 italic">March 12–15, 2026</p>
                <Button asChild size="sm" className="mt-3 rounded-md bg-background text-foreground font-semibold hover:bg-background/90">
                  <Link to="/documents">REGISTER <ArrowRight className="ml-1 h-3 w-3" /></Link>
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-secondary mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Spanish Weekends
            </h3>
            <div className="rounded-lg bg-card border p-5">
              <p className="text-foreground font-semibold" style={{ fontFamily: 'system-ui, sans-serif' }}>Men's & Women's</p>
              <p className="text-sm text-muted-foreground italic">September 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional events */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-secondary mb-6" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Special Events
          </h2>
          <div className="space-y-3">
            <div className="bg-card border border-l-4 border-l-rainbow-purple rounded-lg p-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-secondary" style={{ fontFamily: 'system-ui, sans-serif' }}>
                JUNE 20, 2026 • 9:00 AM – 3:00 PM
              </span>
              <h3 className="text-base font-bold text-foreground mt-1" style={{ fontFamily: 'system-ui, sans-serif' }}>Day of Reflection</h3>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span>Christ the King Catholic Church</span>
              </div>
            </div>
            <div className="bg-card border border-l-4 border-l-rainbow-blue rounded-lg p-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-secondary" style={{ fontFamily: 'system-ui, sans-serif' }}>
                DECEMBER 2026 • 3:30 PM
              </span>
              <h3 className="text-base font-bold text-foreground mt-1" style={{ fontFamily: 'system-ui, sans-serif' }}>Advent Memorial Mass and Ultreya</h3>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span>National Shrine of Our Lady of La Leche</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Day */}
      <section className="py-12 bg-muted/50">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-secondary mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>
            The Fourth Day
          </h2>
          <p className="text-foreground leading-relaxed">
            After the three-day Cursillo weekend, the "Fourth Day" begins — the rest of your life! 
            Stay connected through Group Reunions and Ultreyas. The Welcome Ultreya following each weekend 
            is a special celebration where the community welcomes new cursillistas.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
