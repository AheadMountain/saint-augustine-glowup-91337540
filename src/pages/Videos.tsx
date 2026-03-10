import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Download } from "lucide-react";

const youtubeVideos = [
  { title: "Serving through Cursillo", speaker: "Dennis, St. Patrick's Catholic Church", id: "16Z72d_4hXw" },
  { title: "The Cursillo Impact", speaker: "Dennis, St. Patrick's Catholic Church", id: "YosecKhhBt4" },
  { title: "The History of Cursillo", speaker: "Dennis, St. Patrick's Catholic Church", id: "DqJCa7mEnEY" },
  { title: "What Happens at Cursillo?", speaker: "Dennis, St. Patrick's Catholic Church", id: "U3Wik8zB9CI" },
  { title: "What is Cursillo?", speaker: "Brian, St. Paul's Catholic Church", id: "Jp8Z9p2nr1A" },
  { title: "God's Plans vs My Plans", speaker: "Brian, St. Paul's Catholic Church", id: "rGe0K6OXNsU" },
];

const downloadableVideos = [
  { title: "Cursillo Recording", file: "/media/videos/cursillo-recording.mp4" },
  { title: "Cursillo Video Invitación", file: "/media/videos/cursillo-video-invitacion.mp4" },
];

const Videos = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Media" title="Videos" subtitle="Testimonials, history, and highlights from the Cursillo community" />

      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground font-serif mb-6">Cursillo Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {youtubeVideos.map((video, i) => (
              <div
                key={video.id}
                ref={reveal}
                className={`fade-up stagger-${(i % 4) + 1} bg-card border rounded-xl overflow-hidden`}
              >
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground text-sm font-sans mb-1">{video.title}</h3>
                  <p className="text-xs text-muted-foreground font-sans">{video.speaker}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-foreground font-serif mb-6 mt-16">Downloadable Videos</h2>
          <div className="space-y-3">
            {downloadableVideos.map((video, i) => (
              <a
                key={i}
                href={video.file}
                download
                ref={reveal}
                className="fade-up flex items-center gap-4 bg-card border rounded-xl p-4 hover-lift no-underline group"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Download className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground font-sans">{video.title}</p>
                  <p className="text-xs text-muted-foreground font-sans">MP4 — Click to download</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Videos;
