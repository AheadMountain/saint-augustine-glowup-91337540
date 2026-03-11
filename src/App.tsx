// Cursillo App
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Newsletters from "./pages/Newsletters";
import Media from "./pages/Media";
import Documents from "./pages/Documents";
import Secretariat from "./pages/Secretariat";
import Contact from "./pages/Contact";
import MailList from "./pages/MailList";
import MailListEspanol from "./pages/MailListEspanol";
import The3DayWeekend from "./pages/The3DayWeekend";
import UpcomingWeekends from "./pages/UpcomingWeekends";
import MemorialMass from "./pages/MemorialMass";
import SchoolOfLeaders from "./pages/SchoolOfLeaders";
import Ultreya from "./pages/Ultreya";
import PreCursillo from "./pages/PreCursillo";
import PostCursillo from "./pages/PostCursillo";
import YourFourthDay from "./pages/YourFourthDay";
import GroupReunions from "./pages/GroupReunions";
import DayOfReflection from "./pages/DayOfReflection";
import RegionalEncounterPhotos from "./pages/RegionalEncounterPhotos";
import Testimonials from "./pages/Testimonials";
import InRemembrance from "./pages/InRemembrance";
import PhotoGallery from "./pages/PhotoGallery";
import Links from "./pages/Links";
import Videos from "./pages/Videos";
import WeekendMaterials from "./pages/WeekendMaterials";
import WixTest from "./pages/WixTest";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/newsletters" element={<Newsletters />} />
          <Route path="/media" element={<Media />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/secretariat" element={<Secretariat />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mail-list" element={<MailList />} />
          <Route path="/mail-list-espanol" element={<MailListEspanol />} />
          <Route path="/the-3-day-weekend" element={<The3DayWeekend />} />
          <Route path="/upcoming-weekends" element={<UpcomingWeekends />} />
          <Route path="/memorial-mass" element={<MemorialMass />} />
          <Route path="/school-of-leaders" element={<SchoolOfLeaders />} />
          <Route path="/ultreya" element={<Ultreya />} />
          <Route path="/pre-cursillo" element={<PreCursillo />} />
          <Route path="/post-cursillo" element={<PostCursillo />} />
          <Route path="/your-4th-day" element={<YourFourthDay />} />
          <Route path="/group-reunions" element={<GroupReunions />} />
          <Route path="/day-of-reflection" element={<DayOfReflection />} />
          <Route path="/regional-encounter-photos" element={<RegionalEncounterPhotos />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/in-remembrance" element={<InRemembrance />} />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          <Route path="/links" element={<Links />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/weekend-materials" element={<WeekendMaterials />} />
          <Route path="/wix-test" element={<WixTest />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
