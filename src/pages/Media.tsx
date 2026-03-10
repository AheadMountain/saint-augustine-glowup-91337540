import Layout from "@/components/Layout";
import { Video, Image, Music, Play, Camera } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { usePageTitle } from "@/hooks/use-page-title";
import { Link } from "react-router-dom";

const mediaItems = [
  { title: "Photo Gallery", icon: Camera, description: "Browse photos from weekends, Ultreyas, and community events", color: "hsl(4, 65%, 48%)", to: "/photo-gallery" },
  { title: "Videos", icon: Play, description: "Watch highlights and testimonials from the Cursillo community", color: "hsl(28, 80%, 52%)", to: "/videos" },
  { title: "Regional Encounter", icon: Image, description: "Photos from the 2016 Regional Encounter gathering", color: "hsl(46, 88%, 50%)", to: "/regional-encounter-photos" },
  { title: "De Colores Song", icon: Music, description: "The traditional and beloved Cursillo song", color: "hsl(145, 63%, 42%)", to: "#" },
  { title: "Community Memories", icon: Image, description: "A collection of moments from our Cursillo family", color: "hsl(204, 60%, 44%)", to: "/photo-gallery" },
  { title: "Worship Music", icon: Music, description: "Music from Cursillo weekends and worship gatherings", color: "hsl(282, 44%, 47%)", to: "#" },
];

const Media = () => {
  usePageTitle("Media");
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
            {mediaItems.map((item, i) => {
              const inner = (
                <div
                  ref={reveal}
                  className={`fade-up stagger-${i + 1} bg-card border rounded-xl p-6 hover-lift group h-full`}
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
              );

              if (item.to === "#") {
                return <div key={item.title} className="cursor-default">{inner}</div>;
              }

              return (
                <Link key={item.title} to={item.to} className="no-underline block">
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
