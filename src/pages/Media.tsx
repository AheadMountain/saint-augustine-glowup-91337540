import Layout from "@/components/Layout";
import { Video, Image, Music } from "lucide-react";

const mediaItems = [
  { title: "Cursillo Weekend Highlights", type: "video", icon: Video, description: "Highlights from recent Cursillo weekends" },
  { title: "De Colores Song", type: "audio", icon: Music, description: "The traditional Cursillo song" },
  { title: "Community Photos", type: "gallery", icon: Image, description: "Photos from Ultreyas and gatherings" },
  { title: "Testimonials", type: "video", icon: Video, description: "Cursillistas share their experiences" },
  { title: "Retreat Center Gallery", type: "gallery", icon: Image, description: "Images of the retreat facilities" },
  { title: "Music & Worship", type: "audio", icon: Music, description: "Worship music from Cursillo events" },
];

const Media = () => {
  return (
    <Layout>
      <section className="py-12 bg-muted/40">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Media
          </h1>
          <p className="text-muted-foreground">
            Videos, photos, and music from the Cursillo community
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mediaItems.map((item) => (
              <div key={item.title} className="rounded-2xl border bg-card p-5 cursor-pointer hover:border-primary/30 transition-colors group">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1" style={{ fontFamily: 'system-ui, sans-serif' }}>{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
