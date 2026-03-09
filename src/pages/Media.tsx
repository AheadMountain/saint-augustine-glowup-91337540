import Layout from "@/components/Layout";
import { Video, Image, Music } from "lucide-react";

const mediaItems = [
  { title: "Cursillo Weekend Highlights", icon: Video, description: "Highlights from recent Cursillo weekends", color: "hsl(4, 65%, 48%)" },
  { title: "De Colores Song", icon: Music, description: "The traditional Cursillo song", color: "hsl(28, 80%, 52%)" },
  { title: "Community Photos", icon: Image, description: "Photos from Ultreyas and gatherings", color: "hsl(46, 88%, 50%)" },
  { title: "Testimonials", icon: Video, description: "Cursillistas share their experiences", color: "hsl(145, 63%, 42%)" },
  { title: "Retreat Center Gallery", icon: Image, description: "Images of the retreat facilities", color: "hsl(204, 60%, 44%)" },
  { title: "Music & Worship", icon: Music, description: "Worship music from Cursillo events", color: "hsl(282, 44%, 47%)" },
];

const Media = () => {
  return (
    <Layout>
      <section className="py-12" style={{ background: "hsl(18, 8%, 16%)" }}>
        <div className="container">
          <p className="text-xs uppercase tracking-[0.12em] text-white/40 font-semibold mb-2 font-sans">Gallery</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-serif">Media</h1>
          <p className="text-white/55 font-sans">
            Videos, photos, and music from the Cursillo community
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mediaItems.map((item) => (
              <div key={item.title} className="bg-card border rounded-xl p-6 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all group">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
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
