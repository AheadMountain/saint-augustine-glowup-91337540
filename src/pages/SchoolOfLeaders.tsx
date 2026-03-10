import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { MapPin, Calendar } from "lucide-react";

const SchoolOfLeaders = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Formation" title="School of Leaders" subtitle="Growing together as leaders in the Cursillo movement" />
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div ref={reveal} className="fade-up space-y-6">
            <p className="text-base text-muted-foreground leading-[1.85] font-sans">
              What is the School of Leaders? If we remember the last talk on the Saturday of our Cursillo weekend, we were told that we are already leaders. Leaders who have been identified and invited by our sponsors to live a Cursillo weekend and then use the Cursillo method to live out our Fourth Day.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-sans">
              The School of Leaders is like a school of fish. We are all leaders and we get together in a group to learn more about the Cursillo movement, how it works, what its place is in the Church, and especially what its role is in our diocese. And just like in a school of fish, we take turns "leading" the sessions.
            </p>

            <div ref={reveal} className="fade-up bg-card border rounded-xl p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3 font-serif">Meeting Schedule</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans mb-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>Third Saturday of each month · 9:00 AM</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Assumption Parish — Kohl's Hall</span>
              </div>
              <p className="text-sm text-muted-foreground mt-3 font-sans italic">
                Except when there are Cursillo weekends or other conflicting events.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SchoolOfLeaders;
