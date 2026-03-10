import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { MapPin, Clock } from "lucide-react";

const ultreyas = [
  { name: "Jacksonville Ultreya", schedule: "Second Friday of each month · 7:00 PM", location: "Assumption Parish, Kohl's Hall", note: "Bring a dish to share", contact: "Sandra David, 904-252-6761" },
  { name: "Gainesville Ultreya", schedule: "Second Friday of each month · 6:00 PM", location: "Queen of Peace Catholic Church", note: "Bring a dish to share" },
  { name: "Palm Coast Ultreya", schedule: "Third Tuesday of each month · 6:30 PM", location: "St. Elizabeth Ann Seton — Russo Room" },
  { name: "Fleming Island Ultreya", schedule: "Third Thursday of each month · 6:00 PM", location: "Sacred Heart, Fleming Island — Activity Center" },
];

const Ultreya = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Community" title="Ultreya" subtitle="The Reunion of Group Reunions — come receive unsuspected blessings" />
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div ref={reveal} className="fade-up space-y-4 mb-10">
            <p className="text-base text-muted-foreground leading-[1.85] font-sans">
              Could you use an "unsuspected blessing"? Please plan to attend the next Ultreya in your area! It is in the "witnessing" environment of the Ultreya where those who have just started their conversion process can meet and develop true friendships with other, likeminded people already on the journey.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-sans">
              The Ultreya remains primarily a kind of meeting place where individuals can go to make new acquaintances, to make and be friends — and develop friendships of the type that will drive, strengthen, direct and sustain the conversion process and all its unsuspected blessings.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-sans font-medium">
              Whether you are a new Babe Chick, or a veteran Cursillista, please join us! Unsuspected blessings are waiting for you!
            </p>
          </div>

          <div className="space-y-4">
            {ultreyas.map((u, i) => (
              <div
                key={u.name}
                ref={reveal}
                className={`fade-up stagger-${i + 1} bg-card border rounded-xl p-5 hover-lift`}
              >
                <h3 className="text-base font-semibold text-foreground font-sans mb-2">{u.name}</h3>
                <div className="space-y-1.5 text-sm text-muted-foreground font-sans">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <span>{u.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <span>{u.location}</span>
                  </div>
                  {u.note && <p className="text-xs italic text-muted-foreground pl-5.5">{u.note}</p>}
                  {u.contact && <p className="text-xs text-primary pl-5.5">Contact: {u.contact}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ultreya;
