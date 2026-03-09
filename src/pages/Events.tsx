import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const englishEvents = [
  {
    name: "Jacksonville Ultreya",
    location: "San Juan Del Rio Catholic Church, Jacksonville",
    schedule: "2nd Saturday of each month, 6:00 PM",
    tag: "SECOND SATURDAY • 6:00 PM",
  },
  {
    name: "St. Augustine Ultreya",
    location: "St. Ambrose Catholic Church, Elkton",
    schedule: "3rd Saturday of each month, 10:00 AM",
    tag: "THIRD SATURDAY • 10:00 AM",
  },
  {
    name: "School of Leaders",
    location: "San Juan Del Rio Catholic Church, Jacksonville",
    schedule: "1st Saturday of each month, 10:00 AM",
    tag: "MONTHLY • SATURDAY 10:00 AM",
  },
];

const spanishEvents = [
  {
    name: "Ultreya en Español",
    location: "San Juan Del Rio Catholic Church, Jacksonville",
    schedule: "4th Saturday of each month, 6:00 PM",
    tag: "CUARTO SÁBADO • 6:00 PM",
  },
  {
    name: "Escuela de Dirigentes",
    location: "San Juan Del Rio Catholic Church, Jacksonville",
    schedule: "1st Saturday of each month, 12:00 PM",
    tag: "MENSUAL • SÁBADO 12:00 PM",
  },
];

const Events = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-12 bg-muted/40">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Events & Schedule
          </h1>
          <p className="text-muted-foreground">
            Ultreyas, School of Leaders, and upcoming Cursillo Weekends
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <Tabs defaultValue="english" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 rounded-full bg-muted h-11 p-1">
              <TabsTrigger value="english" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm" style={{ fontFamily: 'system-ui, sans-serif' }}>
                English
              </TabsTrigger>
              <TabsTrigger value="spanish" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Español
              </TabsTrigger>
            </TabsList>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Local Ultreyas & Gatherings
              </h2>
            </div>

            <TabsContent value="english" className="space-y-4 mt-0">
              {englishEvents.map((event) => (
                <div key={event.name} className="rounded-2xl border bg-card p-5 flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    {event.tag}
                  </span>
                  <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    {event.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="spanish" className="space-y-4 mt-0">
              {spanishEvents.map((event) => (
                <div key={event.name} className="rounded-2xl border bg-card p-5 flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    {event.tag}
                  </span>
                  <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    {event.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
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
      <section className="py-12 bg-secondary">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-secondary-foreground mb-6" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Upcoming Cursillo Weekends
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: "♂", name: "Men's Weekend #139", date: "2025 — Contact for exact dates" },
              { icon: "♀", name: "Women's Weekend #137", date: "2025 — Contact for exact dates" },
            ].map((w) => (
              <div key={w.name} className="rounded-2xl bg-secondary-foreground/5 p-5 flex flex-col">
                <span className="text-2xl mb-2">{w.icon}</span>
                <h3 className="text-lg font-bold text-secondary-foreground mb-1" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  {w.name}
                </h3>
                <p className="text-sm text-secondary-foreground/70 mb-4">{w.date}</p>
                <Button asChild variant="outline" size="sm" className="rounded-full w-fit border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
                  <Link to="/documents">
                    REGISTER
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fourth Day */}
      <section className="py-12">
        <div className="container max-w-2xl">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>
            The Fourth Day
          </h2>
          <p className="text-muted-foreground leading-relaxed">
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
