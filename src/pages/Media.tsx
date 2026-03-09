import Layout from "@/components/Layout";
import { Video, Image, Music } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const mediaItems = [
  { title: "Cursillo Weekend Highlights", icon: Video, description: "Highlights from recent Cursillo weekends", color: "hsl(4, 65%, 48%)" },
  { title: "De Colores Song", icon: Music, description: "The traditional Cursillo song", color: "hsl(28, 80%, 52%)" },
  { title: "Community Photos", icon: Image, description: "Photos from Ultreyas and gatherings", color: "hsl(46, 88%, 50%)" },
  { title: "Testimonials", icon: Video, description: "Cursillistas share their experiences", color: "hsl(145, 63%, 42%)" },
  { title: "Retreat Center Gallery", icon: Image, description: "Images of the retreat facilities", color: "hsl(204, 60%, 44%)" },
  { title: "Music & Worship", icon: Music, description: "Worship music from Cursillo events", color: "hsl(282, 44%, 47%)" },
];

const Media = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <section className="py-12 md:py-16" style={{ background: "hsl(18, 8%, 16%)" }}>
        <div className="container">
          <p className="text-xs uppercase tracking-[0.12em] text-white/40 font-semibold mb-2 font-sans animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}>Gallery</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 font-serif animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}>Media</h1>
          <p className="text-white/55 font-sans text-lg animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}>
            Videos, photos, and music from the Cursillo community
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mediaItems.map((item, i) => (
              <div
                key={item.title}
                ref={reveal}
                className={`fade-up stagger-${i + 1} bg-card border rounded-xl p-6 cursor-pointer hover-lift group`}
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.color}15`, color: item.color }}
                >
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1.5 font-sans">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
