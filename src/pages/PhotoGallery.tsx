import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Image, Camera } from "lucide-react";

const galleryCategories = [
  { title: "Cursillo Weekends", count: "Photos coming soon", color: "hsl(4, 65%, 48%)" },
  { title: "Ultreya Gatherings", count: "Photos coming soon", color: "hsl(28, 80%, 52%)" },
  { title: "School of Leaders", count: "Photos coming soon", color: "hsl(46, 88%, 50%)" },
  { title: "Special Events", count: "Photos coming soon", color: "hsl(145, 63%, 42%)" },
  { title: "Day of Reflection", count: "Photos coming soon", color: "hsl(204, 60%, 44%)" },
  { title: "Community Life", count: "Photos coming soon", color: "hsl(282, 44%, 47%)" },
];

const PhotoGallery = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Gallery" title="Photo Gallery" subtitle="Photos from Cursillo weekends, Ultreyas, and community gatherings" />
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryCategories.map((cat, i) => (
              <div
                key={cat.title}
                ref={reveal}
                className={`fade-up stagger-${i + 1} bg-card border rounded-xl overflow-hidden group`}
              >
                <div
                  className="h-32 flex items-center justify-center"
                  style={{ background: `${cat.color}10` }}
                >
                  <Camera
                    className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: `${cat.color}40` }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground text-sm font-sans mb-1">{cat.title}</h3>
                  <p className="text-xs text-muted-foreground font-sans">{cat.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PhotoGallery;
