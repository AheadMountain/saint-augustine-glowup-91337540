import Layout from "@/components/Layout";
import { Video, Image, Music } from "lucide-react";

const mediaItems = [
  { title: "Cursillo Weekend Highlights", icon: Video, description: "Highlights from recent Cursillo weekends", color: "bg-rainbow-red/10 text-rainbow-red" },
  { title: "De Colores Song", icon: Music, description: "The traditional Cursillo song", color: "bg-rainbow-orange/10 text-rainbow-orange" },
  { title: "Community Photos", icon: Image, description: "Photos from Ultreyas and gatherings", color: "bg-rainbow-yellow/10 text-rainbow-yellow" },
  { title: "Testimonials", icon: Video, description: "Cursillistas share their experiences", color: "bg-rainbow-green/10 text-rainbow-green" },
  { title: "Retreat Center Gallery", icon: Image, description: "Images of the retreat facilities", color: "bg-rainbow-blue/10 text-rainbow-blue" },
  { title: "Music & Worship", icon: Music, description: "Worship music from Cursillo events", color: "bg-rainbow-purple/10 text-rainbow-purple" },
];

const Media = () => {
  return (
    <Layout>
      <section className="py-10 bg-primary text-primary-foreground">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Media
          </h1>
          <p className="opacity-80">
            Videos, photos, and music from the Cursillo community
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mediaItems.map((item) => (
              <div key={item.title} className="bg-card border rounded-xl p-5 cursor-pointer hover:shadow-md transition-shadow group">
                <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-lg ${item.color}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-1" style={{ fontFamily: 'system-ui, sans-serif' }}>{item.title}</h3>
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
