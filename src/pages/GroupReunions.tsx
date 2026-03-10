import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const GroupReunions = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Community" title="Group Reunions" subtitle="Friendship Groups — weekly gatherings of cursillista friends" />
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div ref={reveal} className="fade-up space-y-6">
            <p className="text-base text-muted-foreground leading-[1.85] font-sans">
              Group Reunions (also known as Friendship Groups) consist of a weekly gathering of a small group of Cursillista friends who meet to discuss efforts in Study, Piety and Action, and to encourage each other. This meeting uses the tripod to do this.
            </p>

            <div className="bg-card border rounded-xl p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3 font-serif">How to Join a Group Reunion</h2>
              <ol className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted-foreground font-sans">
                  <span className="font-bold text-primary">1.</span>
                  <span><strong>Ask your sponsor</strong> — it is part of their responsibility to help you get started.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground font-sans">
                  <span className="font-bold text-primary">2.</span>
                  <span><strong>Ask other Cursillistas at an Ultreya</strong> — they can connect you with existing groups in your area.</span>
                </li>
              </ol>
            </div>

            <div className="bg-cream rounded-xl p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3 font-serif">The Tripod</h2>
              <p className="text-sm text-muted-foreground leading-[1.85] font-sans mb-3">
                Each Group Reunion follows the "tripod" structure, sharing about three key areas:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { title: "Piety", desc: "Your prayer life and relationship with God" },
                  { title: "Study", desc: "What you're learning about your faith" },
                  { title: "Action", desc: "How you're living your faith in daily life" },
                ].map((item) => (
                  <div key={item.title} className="bg-card border rounded-lg p-4">
                    <h3 className="text-sm font-bold text-primary font-sans mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GroupReunions;
