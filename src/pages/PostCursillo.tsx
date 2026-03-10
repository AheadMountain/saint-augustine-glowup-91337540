import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const PostCursillo = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="After the Weekend" title="Post-Cursillo" subtitle="Everything leads to the Post-Cursillo — the rest of your life" />
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div ref={reveal} className="fade-up space-y-6">
            <p className="text-base text-muted-foreground leading-[1.85] font-sans">
              Everything that is done in terms of the Cursillo purpose and methodology has the Post-Cursillo as its final objective. The Pre-Cursillo and the Cursillo are only preliminary steps toward the Post-Cursillo. Like everything else in life, it involves a process:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { phase: "Pre-Cursillo", desc: "The person seeks Christ", color: "hsl(28, 80%, 52%)" },
                { phase: "3-Day Cursillo", desc: "The person encounters Christ", color: "hsl(348, 70%, 33%)" },
                { phase: "Post-Cursillo", desc: "The person follows Christ", color: "hsl(145, 63%, 42%)" },
              ].map((p) => (
                <div key={p.phase} className="relative bg-card border rounded-xl p-5 overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full" style={{ background: p.color }} />
                  <h3 className="text-sm font-bold text-foreground font-sans mb-1">{p.phase}</h3>
                  <p className="text-xs text-muted-foreground font-sans">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-cream rounded-xl p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3 font-serif">Purpose of the Post-Cursillo</h2>
              <p className="text-sm text-muted-foreground leading-[1.85] font-sans">
                The basic purpose of the Post-Cursillo is to renew, accelerate and continue the conversion of each individual, and as a consequence provide a continuous transformation of the environments for which those individuals are responsible — especially their families, neighborhoods, places of work, associations and other secular situations.
              </p>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3 font-serif">Means of Perseverance</h2>
              <p className="text-sm text-muted-foreground leading-[1.85] font-sans mb-4">
                From the very beginning, the Cursillo Movement has taken responsibility for providing a community for those who have lived the Cursillo. There are two basic means of growth and perseverance:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted-foreground font-sans">
                  <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <div><strong>Group Reunion</strong> — primarily for the good of the individual</div>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground font-sans">
                  <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <div><strong>Ultreya</strong> — primarily for the good of the community</div>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground leading-[1.85] font-sans mt-4 italic">
                "An isolated Christian is a paralyzed Christian. So, too, is a group if it is not tied to other groups."
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PostCursillo;
