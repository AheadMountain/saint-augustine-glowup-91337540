import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Image, Music } from "lucide-react";

const mediaItems = [
  { title: "Cursillo Weekend Highlights", type: "video", icon: Video, description: "Highlights from recent Cursillo weekends" },
  { title: "De Colores Song", type: "audio", icon: Music, description: "The traditional Cursillo song" },
  { title: "Community Photos", type: "gallery", icon: Image, description: "Photos from Ultreyas and community gatherings" },
  { title: "Testimonials", type: "video", icon: Video, description: "Cursillistas share their experiences" },
  { title: "Retreat Center Gallery", type: "gallery", icon: Image, description: "Images of the retreat facilities" },
  { title: "Music & Worship", type: "audio", icon: Music, description: "Worship music from Cursillo events" },
];

const Media = () => {
  return (
    <Layout>
      <section className="bg-secondary py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-secondary-foreground mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Media
          </h1>
          <p className="text-secondary-foreground/70 text-lg">
            Videos, photos, and music from the Cursillo community
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaItems.map((item) => (
              <Card key={item.title} className="shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-xl bg-accent group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-base" style={{ fontFamily: 'system-ui, sans-serif' }}>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
