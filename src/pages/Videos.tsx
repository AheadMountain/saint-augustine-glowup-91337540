import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Video, Play } from "lucide-react";

const videoCategories = [
  {
    title: "Weekend Highlights",
    description: "Highlights and recaps from recent Cursillo weekends in the Diocese of St. Augustine.",
    color: "hsl(4, 65%, 48%)",
  },
  {
    title: "Testimonials",
    description: "Cursillistas share how the weekend transformed their faith and daily life.",
    color: "hsl(145, 63%, 42%)",
  },
  {
    title: "Music & Worship",
    description: "Worship music and the beloved De Colores song from Cursillo gatherings.",
    color: "hsl(28, 80%, 52%)",
  },
  {
    title: "Community Events",
    description: "Recordings from Ultreyas, School of Leaders, and special community events.",
    color: "hsl(204, 60%, 44%)",
  },
];

const Videos = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Media" title="Videos" subtitle="Videos from the Cursillo community" />
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {videoCategories.map((cat, i) => (
              <div
                key={cat.title}
                ref={reveal}
                className={`fade-up stagger-${i + 1} relative bg-card border rounded-xl overflow-hidden group`}
              >
                {/* Thumbnail placeholder */}
                <div
                  className="h-36 flex items-center justify-center relative"
                  style={{ background: `${cat.color}12` }}
                >
                  <div
                    className="h-14 w-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${cat.color}20`, color: cat.color }}
                  >
                    <Play className="h-6 w-6 ml-0.5" />
                  </div>
                  <div className="absolute top-3 right-3 text-xs font-semibold font-sans px-2 py-1 rounded-md" style={{ background: `${cat.color}18`, color: cat.color }}>
                    Coming Soon
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground text-sm font-sans mb-1">{cat.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Videos;
