import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const englishEvents = [
  { name: "Jacksonville Ultreya", location: "Assumption Catholic Church, Kohl's Hall", tag: "SECOND FRIDAY • 7:00 PM", color: "hsl(4, 65%, 48%)" },
  { name: "Gainesville Ultreya", location: "Queen of Peace Catholic Church", tag: "SECOND FRIDAY • 6:00 PM", color: "hsl(28, 80%, 52%)" },
  { name: "Palm Coast Ultreya", location: "St. Elizabeth Ann Seton — Russo Room", tag: "THIRD TUESDAY • 6:30 PM", color: "hsl(46, 88%, 50%)" },
  { name: "Fleming Island Ultreya", location: "Sacred Heart, Fleming Island — Activity Center", tag: "THIRD THURSDAY • 6:00 PM", color: "hsl(145, 63%, 42%)" },
  { name: "Jacksonville School of Leaders", location: "Assumption — Kohl's Hall", tag: "THIRD SATURDAY • 9:00 AM", color: "hsl(204, 60%, 44%)" },
];

const spanishEvents = [
  { name: "Jacksonville — Ultreya y Escuela de Dirigentes", location: "St Joseph's Catholic Church — Cory Center", tag: "SEGUNDO LUNES • 7:00 PM", color: "hsl(4, 65%, 48%)" },
  { name: "Gainesville — Ultreya y Escuela de Dirigentes", location: "St Augustine Church — Catholic Student Center at UF", tag: "TERCER LUNES • 7:00 PM", color: "hsl(28, 80%, 52%)" },
  { name: "Lake City — Ultreya y Escuela de Dirigentes", location: "Epiphany Catholic Church — Epiphany Social Hall", tag: "ÚLTIMO VIERNES • 7:30 PM", color: "hsl(145, 63%, 42%)" },
];

const EventCard = ({ event }: { event: typeof englishEvents[0] }) => (
  <div className="relative bg-card border rounded-xl p-5 overflow-hidden hover:shadow-md transition-shadow">
    <div className="absolute top-0 left-0 w-1 h-full" style={{ background: event.color }} />
    <span className="text-[11px] font-bold uppercase tracking-widest text-primary font-sans">
      {event.tag}
    </span>
    <h3 className="text-base font-semibold text-foreground mt-1 font-sans">{event.name}</h3>
    <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1 font-sans">
      <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
      <span>{event.location}</span>
    </div>
  </div>
);

const Events = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-12" style={{ background: "hsl(18, 8%, 16%)" }}>
        <div className="container">
          <p className="text-xs uppercase tracking-[0.12em] text-white/40 font-semibold mb-2 font-sans">Schedule</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-serif">
            Events & Schedule
          </h1>
          <p className="text-white/55 font-sans">
            Ultreyas, School of Leaders, and upcoming Cursillo Weekends
          </p>
        </div>
      </section>

      {/* Recurring Events */}
      <section className="py-14">
        <div className="container max-w-3xl">
          <Tabs defaultValue="english" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 rounded-full bg-muted h-11 p-1">
              <TabsTrigger value="english" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm font-semibold font-sans">
                English
              </TabsTrigger>
              <TabsTrigger value="spanish" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm font-semibold font-sans">
                Español
              </TabsTrigger>
            </TabsList>

            <TabsContent value="english" className="space-y-3 mt-0">
              <h2 className="text-xl font-semibold text-foreground mb-4 font-serif">
                English Ultreyas & School of Leaders
              </h2>
              {englishEvents.map((event) => (
                <EventCard key={event.name} event={event} />
              ))}
            </TabsContent>

            <TabsContent value="spanish" className="space-y-3 mt-0">
              <h2 className="text-xl font-semibold text-foreground mb-4 font-serif">
                Ultreyas y Escuela de Dirigentes en Español
              </h2>
              {spanishEvents.map((event) => (
                <EventCard key={event.name} event={event} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Upcoming Weekends */}
      <section className="py-14 bg-cream">
        <div className="container max-w-3xl">
          <p className="text-xs uppercase tracking-[0.12em] text-primary font-semibold mb-3 font-sans">Upcoming</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 font-serif">
            Cursillo Weekends
          </h2>

          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 font-sans">
              English Weekends
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Men's #139", date: "March 5–8, 2026", bg: "hsl(348, 70%, 33%)" },
                { title: "Women's #137", date: "March 12–15, 2026", bg: "hsl(18, 8%, 22%)" },
              ].map((w) => (
                <div key={w.title} className="rounded-xl p-6 text-white" style={{ background: w.bg }}>
                  <h4 className="text-lg font-bold mb-0.5 font-sans">{w.title}</h4>
                  <p className="text-sm text-white/70 italic mb-4 font-sans">{w.date}</p>
                  <Link
                    to="/documents"
                    className="inline-flex items-center gap-1.5 bg-white text-foreground px-5 py-2.5 rounded-md text-sm font-semibold font-sans hover:shadow-md transition-all"
                  >
                    REGISTER <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 font-sans">
              Spanish Weekends
            </h3>
            <div className="rounded-xl bg-card border p-5">
              <p className="text-foreground font-semibold font-sans">Men's & Women's</p>
              <p className="text-sm text-muted-foreground italic font-sans">September 2026 · Dates TBA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-14">
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 font-serif">
            Special Events
          </h2>
          <div className="space-y-3">
            {[
              { tag: "JUNE 20, 2026 • 9:00 AM – 3:00 PM", name: "Day of Reflection", location: "Christ the King Catholic Church", color: "hsl(282, 44%, 47%)" },
              { tag: "DECEMBER 2026 • 3:30 PM", name: "Advent Memorial Mass and Ultreya", location: "National Shrine of Our Lady of La Leche", color: "hsl(204, 60%, 44%)" },
            ].map((event) => (
              <EventCard key={event.name} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Fourth Day */}
      <section className="py-14 bg-cream">
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 font-serif">
            The Fourth Day
          </h2>
          <p className="text-base text-muted-foreground leading-[1.85] font-sans">
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
