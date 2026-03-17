import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState, useMemo } from "react";
import { X, Search, Users } from "lucide-react";

type WeekendPhoto = {
  src: string;
  title: string;
  number: number;
  date: string;
  location: string;
  gender: "men" | "women";
};

const weekendPhotos: WeekendPhoto[] = [
  // Men's Weekends
  { src: "/media/photos/weekends/men-56.jpg", title: "Men's Cursillo #56", number: 56, date: "May 14–17, 1992", location: "Camp St. John, Fla.", gender: "men" },
  { src: "/media/photos/weekends/men-58.jpg", title: "Men's Cursillo #58", number: 58, date: "Mar. 18–21, 1993", location: "Camp St. Johns", gender: "men" },
  { src: "/media/photos/weekends/men-60.jpg", title: "Men's Cursillo #60", number: 60, date: "October 14–17, 1993", location: "Camp St. Johns", gender: "men" },
  { src: "/media/photos/weekends/men-64.jpg", title: "Men's Cursillo #64", number: 64, date: "Oct 13–16, 1994", location: "Camp St. Johns", gender: "men" },
  { src: "/media/photos/weekends/men-67.jpg", title: "Men's Cursillo #67", number: 67, date: "Oct. 12–15, 1995", location: "Camp St. Johns", gender: "men" },
  { src: "/media/photos/weekends/men-69.jpg", title: "Men's Cursillo #69", number: 69, date: "April 11–14, 1996", location: "Camp St. Johns", gender: "men" },
  { src: "/media/photos/weekends/men-70.jpg", title: "Men's Cursillo #70", number: 70, date: "Oct. 17–20, 1996", location: "Camp St. Johns", gender: "men" },
  { src: "/media/photos/weekends/men-75.jpg", title: "Men's Cursillo #75", number: 75, date: "Oct 1–4, 1998", location: "Camp St. Johns", gender: "men" },
  { src: "/media/photos/weekends/men-78.jpg", title: "Men's Cursillo #78", number: 78, date: "Mar. 30 – Apr. 2, 2000", location: "Camp St. John, FL", gender: "men" },
  { src: "/media/photos/weekends/men-82.jpg", title: "Men's Cursillo #82", number: 82, date: "Mar. 22–25, 2001", location: "Camp St. John, FL", gender: "men" },
  { src: "/media/photos/weekends/men-126.jpg", title: "Men's Cursillo #126", number: 126, date: "2019", location: "Camp St. John", gender: "men" },
  { src: "/media/photos/weekends/men-133.jpg", title: "Men's Cursillo #133", number: 133, date: "Dec 7–10, 2023", location: "Camp St. John", gender: "men" },
  { src: "/media/photos/weekends/men-134.jpg", title: "Men's Cursillo #134", number: 134, date: "Apr 11–14, 2024", location: "Camp St. Johns", gender: "men" },
  { src: "/media/photos/weekends/men-135.jpg", title: "Men's Cursillo #135", number: 135, date: "Sept 12–15, 2024", location: "Camp St. John", gender: "men" },
  { src: "/media/photos/weekends/men-137.jpg", title: "Men's Cursillo #137", number: 137, date: "Sept 11–14, 2025", location: "Camp St. Johns", gender: "men" },

  // Women's Weekends
  { src: "/media/photos/weekends/women-55.jpg", title: "Women's Cursillo #55", number: 55, date: "October 22–25, 1992", location: "Camp St. John, Fla.", gender: "women" },
  { src: "/media/photos/weekends/women-62.jpg", title: "Women's Cursillo #62", number: 62, date: "Oct. 20–23, 1994", location: "Camp St. John", gender: "women" },
  { src: "/media/photos/weekends/women-63.jpg", title: "Women's Cursillo #63", number: 63, date: "March 2–5, 1995", location: "Camp St. Johns", gender: "women" },
  { src: "/media/photos/weekends/women-71.jpg", title: "Women's Cursillo #71", number: 71, date: "Oct. 23–26, 1997", location: "Camp St. Johns", gender: "women" },
  { src: "/media/photos/weekends/women-73.jpg", title: "Women's Cursillo #73", number: 73, date: "March 12–15, 1998", location: "Camp St. Johns", gender: "women" },
  { src: "/media/photos/weekends/women-80.jpg", title: "Women's Cursillo #80", number: 80, date: "Mar. 15–18, 2001", location: "Camp St. John, FL", gender: "women" },
  { src: "/media/photos/weekends/women-89.jpg", title: "Women's Cursillo #89", number: 89, date: "May 20–23, 2004", location: "Camp St. John, FL", gender: "women" },
  { src: "/media/photos/weekends/women-92.jpg", title: "Women's Cursillo #92", number: 92, date: "April 21–24, 2005", location: "Camp St. John, FL", gender: "women" },
  { src: "/media/photos/weekends/women-131.jpg", title: "Women's Cursillo #131", number: 131, date: "Nov 30 – Dec 3, 2023", location: "Camp St. John", gender: "women" },
  { src: "/media/photos/weekends/women-132.jpg", title: "Women's Cursillo #132", number: 132, date: "April 18–21, 2024", location: "Camp St. John", gender: "women" },
  { src: "/media/photos/weekends/women-133.jpg", title: "Women's Cursillo #133", number: 133, date: "Sept 19–22, 2024", location: "Camp St. John", gender: "women" },
  { src: "/media/photos/weekends/women-135.jpg", title: "Women's Cursillo #135", number: 135, date: "Sept 18–21, 2025", location: "Camp St. Johns", gender: "women" },
];

const PhotoGallery = () => {
  const reveal = useScrollReveal();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [tab, setTab] = useState<"men" | "women">("men");
  const [search, setSearch] = useState("");

  const isSearching = search.trim().length > 0;

  const filtered = useMemo(() => {
    const byGender = weekendPhotos.filter((p) => p.gender === tab);
    if (!search.trim()) return byGender;
    const q = search.toLowerCase().replace(/[^a-z0-9]/g, "");
    return byGender.filter((p) => {
      const searchable = `${p.title} ${p.number} ${p.date} ${p.location} weekend ${p.number}`.toLowerCase().replace(/[^a-z0-9]/g, "");
      return searchable.includes(q);
    });
  }, [tab, search]);

  const allFiltered = useMemo(() => weekendPhotos.filter((p) => p.gender === tab), [tab]);

  // Get index in full list for lightbox navigation
  const openLightbox = (photo: WeekendPhoto) => {
    const idx = weekendPhotos.indexOf(photo);
    setLightbox(idx);
  };

  return (
    <Layout>
      <PageHeader tag="Gallery" title="Weekend Group Photos" subtitle="Group photos from Men's and Women's Cursillo weekends at Camp St. Johns" />

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white/70 hover:text-white z-10" onClick={() => setLightbox(null)}>
            <X className="h-8 w-8" />
          </button>
          <img
            src={weekendPhotos[lightbox].src}
            alt={weekendPhotos[lightbox].title}
            className="max-h-[80vh] max-w-[92vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="mt-4 text-center" onClick={(e) => e.stopPropagation()}>
            <p className="text-white font-semibold font-sans text-lg">{weekendPhotos[lightbox].title}</p>
            <p className="text-white/60 text-sm font-sans">{weekendPhotos[lightbox].date} — {weekendPhotos[lightbox].location}</p>
          </div>
        </div>
      )}

      <section className="py-16 md:py-20">
        <div className="container max-w-5xl">
          {/* Tabs */}
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => { setTab("men"); setSearch(""); }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold font-sans transition-all duration-200 ${
                tab === "men"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <Users className="inline h-4 w-4 mr-1.5 -mt-0.5" />
              Men's Weekends
            </button>
            <button
              onClick={() => { setTab("women"); setSearch(""); }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold font-sans transition-all duration-200 ${
                tab === "women"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <Users className="inline h-4 w-4 mr-1.5 -mt-0.5" />
              Women's Weekends
            </button>
          </div>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Search ${tab === "men" ? "Men's" : "Women's"} weekends (e.g. "Weekend 75" or "1998")...`}
              className="w-full pl-10 pr-4 py-3 rounded-xl border bg-card text-foreground text-sm font-sans placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
          </div>

          {/* Photo Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <Users className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground font-sans text-sm">
                {allFiltered.length === 0
                  ? `No ${tab === "men" ? "Men's" : "Women's"} weekend photos uploaded yet. Check back soon!`
                  : `No results for "${search}". Try searching by weekend number or year.`
                }
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((photo, i) => (
                <div
                  key={photo.src}
                  ref={reveal}
                  className={`fade-up stagger-${(i % 6) + 1} cursor-pointer group overflow-hidden rounded-xl border bg-card transition-shadow duration-300 hover:shadow-lg`}
                  onClick={() => openLightbox(photo)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground text-sm font-sans mb-0.5">{photo.title}</h3>
                    <p className="text-xs text-muted-foreground font-sans">{photo.date}</p>
                    <p className="text-xs text-muted-foreground/70 font-sans">{photo.location}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="text-center text-sm text-muted-foreground font-sans mt-12 italic">
            More weekend photos will be added as they are uploaded. Check back for updates!
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default PhotoGallery;
