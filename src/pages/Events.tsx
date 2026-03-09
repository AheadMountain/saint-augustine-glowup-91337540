import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Clock, Calendar } from "lucide-react";

const englishEvents = [
  {
    name: "Jacksonville Ultreya",
    location: "San Juan Del Rio Catholic Church, Jacksonville",
    schedule: "2nd Saturday of each month, 6:00 PM",
  },
  {
    name: "St. Augustine Ultreya",
    location: "St. Ambrose Catholic Church, Elkton",
    schedule: "3rd Saturday of each month, 10:00 AM",
  },
  {
    name: "School of Leaders (English)",
    location: "San Juan Del Rio Catholic Church, Jacksonville",
    schedule: "1st Saturday of each month, 10:00 AM",
  },
];

const spanishEvents = [
  {
    name: "Ultreya en Español",
    location: "San Juan Del Rio Catholic Church, Jacksonville",
    schedule: "4th Saturday of each month, 6:00 PM",
  },
  {
    name: "Escuela de Dirigentes",
    location: "San Juan Del Rio Catholic Church, Jacksonville",
    schedule: "1st Saturday of each month, 12:00 PM",
  },
];

const upcomingWeekends = [
  { name: "Men's Weekend #139", date: "2025 — Contact for exact dates", type: "English" },
  { name: "Women's Weekend #137", date: "2025 — Contact for exact dates", type: "English" },
];

const Events = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-secondary-foreground mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Events & Schedule
          </h1>
          <p className="text-secondary-foreground/70 text-lg">
            Ultreyas, School of Leaders, and upcoming Cursillo Weekends
          </p>
        </div>
      </section>

      {/* Events Tabs */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Tabs defaultValue="english" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="english" style={{ fontFamily: 'system-ui, sans-serif' }}>English</TabsTrigger>
              <TabsTrigger value="spanish" style={{ fontFamily: 'system-ui, sans-serif' }}>Español</TabsTrigger>
            </TabsList>

            <TabsContent value="english" className="space-y-4">
              {englishEvents.map((event) => (
                <Card key={event.name} className="shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg" style={{ fontFamily: 'system-ui, sans-serif' }}>{event.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.schedule}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="spanish" className="space-y-4">
              {spanishEvents.map((event) => (
                <Card key={event.name} className="shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg" style={{ fontFamily: 'system-ui, sans-serif' }}>{event.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.schedule}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Upcoming Weekends */}
      <section className="py-16 bg-accent/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Upcoming Cursillo Weekends
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingWeekends.map((weekend) => (
              <Card key={weekend.name} className="overflow-hidden shadow-md">
                <div className="h-2 bg-primary" />
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>{weekend.type}</span>
                  </div>
                  <CardTitle style={{ fontFamily: 'system-ui, sans-serif' }}>{weekend.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{weekend.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4th Day Info */}
      <section className="py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
            The Fourth Day
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
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
