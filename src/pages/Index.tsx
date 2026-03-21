import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { usePageTitle } from "@/hooks/use-page-title";
import CursilloLogo from "@/components/CursilloLogo";

const Index = () => {
  usePageTitle();
  const reveal = useScrollReveal();

  return (
    <Layout>
      {/* ═══════════════════════════════════════════
          HERO BANNER
         ═══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "hsl(var(--charcoal))",
          padding: "72px 24px 80px",
        }}
      >
        {/* Radial ambient glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-40%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 800,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(201,168,76,0.1) 0%, rgba(139,26,43,0.06) 40%, transparent 70%)",
          }}
        />
        {/* Bottom conic rainbow ring */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: -200,
            left: "50%",
            transform: "translateX(-50%)",
            width: 900,
            height: 400,
            borderRadius: "50%",
            border: "3px solid transparent",
            opacity: 0.7,
            background: `
              linear-gradient(hsl(var(--charcoal)), hsl(var(--charcoal))) padding-box,
              conic-gradient(from 200deg,
                rgba(192,57,43,0.15),
                rgba(230,126,34,0.12),
                rgba(241,196,15,0.12),
                rgba(39,174,96,0.1),
                rgba(41,128,185,0.1),
                rgba(142,68,173,0.08),
                transparent 60%
              ) border-box
            `,
          }}
        />

        <div className="relative z-10 container grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          {/* Left column */}
          <div className="flex flex-col items-start fade-up" ref={reveal}>
            {/* Logo mark */}
            <div className="mb-7">
              <CursilloLogo width={72} height={92} variant="light" />
            </div>

            <h1 className="font-serif text-[2rem] sm:text-[2.6rem] lg:text-[3.4rem] font-bold text-white leading-[1.1] mb-1.5 tracking-tight">
              Cursillos <em className="not-italic font-normal text-gold">in</em>
              <br />
              Christianity
            </h1>

            <p className="text-[0.95rem] text-white/55 font-medium font-sans mb-1.5">
              Diocese of St. Augustine — Jacksonville, Florida
            </p>

            <div className="font-serif italic text-[1.5rem] sm:text-[1.2rem] md:text-[1.5rem] font-medium mb-7 text-rainbow-gradient">
              De Colores!
            </div>

            <p className="text-[1.05rem] text-white/65 max-w-[460px] mb-9 leading-[1.75] font-sans">
              Changing lives through three-day weekends of faith, community, and friendship since 1974.
            </p>

            <div className="flex flex-wrap gap-3.5">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg text-[0.95rem] font-semibold font-sans hover:brightness-110 hover:-translate-y-px transition-all duration-250"
              >
                View Upcoming Events
              </Link>
              <Link
                to="/documents"
                className="inline-flex items-center gap-2 text-white/85 px-7 py-3.5 rounded-lg text-[0.95rem] font-semibold font-sans border-[1.5px] border-white/20 hover:border-white/50 hover:text-white transition-all duration-250"
              >
                Apply for a Weekend
              </Link>
            </div>
          </div>

          {/* Right column — Quote card */}
          <div className="relative fade-up" ref={reveal}>
            <div
              className="relative rounded-2xl backdrop-blur-sm overflow-hidden"
              style={{
                padding: "44px 36px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Rainbow top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{
                  background: "linear-gradient(90deg, hsl(4,65%,48%), hsl(28,80%,52%), hsl(46,88%,50%), hsl(145,63%,42%), hsl(204,60%,44%), hsl(282,44%,47%))",
                }}
              />
              {/* Quote cross icon */}
              <div className="mb-5">
                <CursilloLogo width={32} height={41} variant="gold" />
              </div>
              <blockquote className="font-serif text-[1.2rem] sm:text-[1.45rem] italic text-white/90 leading-[1.5] mb-4 font-normal">
                "Make a friend, be a friend, bring a friend to Christ."
              </blockquote>
              <cite className="not-italic text-[0.82rem] text-white/40 font-sans tracking-wide">
                — The Cursillo motto
              </cite>

              <div className="flex gap-8 mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                {[
                  { num: "50+", label: "Years" },
                  { num: "139", label: "Weekends" },
                  { num: "1974", label: "Founded" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-serif text-[1.8rem] font-semibold text-gold leading-none">
                      {stat.num}
                    </div>
                    <div className="text-[0.75rem] text-white/40 mt-1 uppercase tracking-[0.06em] font-sans">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHAT IS CURSILLO — Three pillars
         ═══════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-cream">
        <div className="container">
          <div ref={reveal} className="fade-up">
            <p className="text-[0.75rem] uppercase tracking-[0.12em] text-primary font-semibold mb-3 font-sans">
              What is Cursillo?
            </p>
            <h2 className="font-serif text-[1.7rem] sm:text-[2.2rem] font-semibold text-charcoal mb-4 leading-tight">
              Three pillars of the movement
            </h2>
            <p className="text-base text-muted-foreground max-w-[520px] leading-[1.7] mb-12 font-sans">
              Cursillo is a movement within the Catholic Church that helps people deepen their faith through community, study, and action.
            </p>
          </div>

          <div ref={reveal} className="fade-up grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "The Weekend",
                desc: "A three-day experience of living in Christian community — filled with talks, discussions, worship, and lasting friendships.",
                color: "hsl(4, 65%, 48%)",
              },
              {
                num: "02",
                title: "Group Reunion",
                desc: "Small groups that meet regularly to share their journey, support one another, and stay accountable in faith.",
                color: "hsl(145, 63%, 42%)",
              },
              {
                num: "03",
                title: "Ultreya",
                desc: "Larger gatherings where cursillistas come together to share, encourage, and celebrate what God is doing in their lives.",
                color: "hsl(204, 60%, 44%)",
              },
            ].map((item, i) => (
              <div
                key={item.num}
                className="relative bg-card rounded-xl border border-border/40 overflow-hidden hover-lift fade-child"
              >
                <div
                  className="absolute top-0 left-0 w-1 h-full"
                  style={{ background: item.color }}
                />
                <div className="font-serif text-[2.5rem] font-light text-gold leading-none mb-4" style={{ padding: "36px 28px 0" }}>
                  {item.num}
                </div>
                <div style={{ padding: "0 28px 36px" }}>
                  <h3 className="font-serif text-[1.35rem] font-semibold text-charcoal mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-[0.92rem] text-muted-foreground leading-[1.7] font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          UPCOMING EVENTS
         ═══════════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="container">
          <div ref={reveal} className="fade-up">
            <p className="text-[0.75rem] uppercase tracking-[0.12em] text-primary font-semibold mb-3 font-sans">
              Upcoming
            </p>
            <h2 className="font-serif text-[1.7rem] sm:text-[2.2rem] font-semibold text-charcoal mb-4 leading-tight">
              Cursillo Weekends &amp; Events
            </h2>
            <p className="text-base text-muted-foreground max-w-[520px] leading-[1.7] mb-12 font-sans">
              Find the next weekend retreat or gathering near you. Space is limited — register early.
            </p>
          </div>

          <div ref={reveal} className="fade-up grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { month: "Sep", day: "3", type: "English Weekend", title: "Men's #140", detail: "September 3–6, 2026", action: "Register →", to: "/documents" },
              { month: "Mar", day: "12", type: "English Weekend", title: "Women's #137", detail: "March 12–15, 2026", action: "Register →", to: "/documents" },
              { month: "Jun", day: "20", type: "Special Event", title: "Day of Reflection", detail: "June 20, 2026 · 9:00 AM – 3:00 PM\nChrist the King Catholic Church", action: "Learn more →", to: "/events" },
              { month: "Sep", day: "—", type: "Spanish Weekend", title: "Men's & Women's", detail: "September 2026 · Dates TBA", action: "Stay updated →", to: "/events" },
            ].map((event, i) => (
              <Link
                key={event.title}
                to={event.to}
                className="fade-child flex gap-5 no-underline text-foreground border border-light-tan rounded-xl hover:border-primary hover:shadow-lg"
                style={{ padding: 28, background: "hsl(var(--warm-white))" }}
              >
                <div className="flex flex-col items-center justify-center min-w-[60px] bg-cream rounded-[10px] py-3 px-2">
                  <span className="text-[0.7rem] uppercase tracking-[0.08em] text-primary font-semibold font-sans">
                    {event.month}
                  </span>
                  <span className="font-serif text-[1.8rem] font-semibold text-charcoal leading-[1.1]">
                    {event.day}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="text-[0.78rem] uppercase tracking-[0.08em] text-primary font-semibold font-sans block mb-1.5">
                    {event.type}
                  </span>
                  <h3 className="text-[1.05rem] font-semibold text-charcoal mb-1 font-sans">
                    {event.title}
                  </h3>
                  <p className="text-[0.88rem] text-muted-foreground whitespace-pre-line font-sans">
                    {event.detail}
                  </p>
                  <span className="text-[0.85rem] text-primary font-semibold mt-2 inline-flex items-center gap-1 font-sans">
                    {event.action}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WELCOME & MISSION
         ═══════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-cream relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div ref={reveal} className="fade-up">
              <p className="text-[0.75rem] uppercase tracking-[0.12em] text-primary font-semibold mb-3 font-sans">
                Welcome
              </p>
              <h2 className="font-serif text-[1.7rem] sm:text-[2.2rem] font-semibold text-charcoal mb-4 leading-tight">
                Changing lives since 1974
              </h2>
              <p className="text-[1.05rem] text-muted-foreground leading-[1.85] mb-5 font-sans">
                The Catholic Cursillo Movement in the Diocese of St. Augustine has been transforming lives for over fifty years. Whether you've attended a weekend or are just learning about Cursillo for the first time, you're welcome here.
              </p>
              <p className="text-[1.05rem] text-muted-foreground leading-[1.85] font-sans">
                This site is how we keep in touch with all who have attended the three-day weekend and want to stay connected. Come back often to find upcoming events, download resources, and see what's happening in the community.
              </p>
            </div>

            <div ref={reveal} className="fade-up">
              <div
                className="relative bg-card border border-border/60 rounded-[14px] overflow-hidden"
                style={{ padding: "40px 32px" }}
              >
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-[14px]"
                  style={{
                    background: "linear-gradient(to bottom, hsl(4,65%,48%), hsl(28,80%,52%), hsl(46,88%,50%), hsl(145,63%,42%), hsl(204,60%,44%), hsl(282,44%,47%))",
                  }}
                />
                <h3 className="font-serif text-[1.5rem] font-semibold text-charcoal mb-4">
                  Our Mission
                </h3>
                <p className="text-[0.95rem] text-muted-foreground leading-[1.8] font-sans">
                  Each individual lay person must stand before the world as a witness to the resurrection and life of the Lord Jesus — and as a sign that God lives. The laity must nourish the world with spiritual fruits, and joyfully spread that spirit to encourage, support, and affirm those the Lord calls "blessed."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA — Crimson with cross pattern
         ═══════════════════════════════════════════ */}
      <section
        className="relative py-20 px-6 overflow-hidden text-center"
        style={{ background: "hsl(var(--primary))" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div ref={reveal} className="fade-up relative z-10 container max-w-lg mx-auto">
          <h2 className="font-serif text-[1.8rem] sm:text-[2.4rem] font-semibold text-white mb-3 leading-tight">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-[1.05rem] text-white/85 mb-9 max-w-[480px] mx-auto leading-[1.7] font-sans">
            Whether you're considering your first Cursillo weekend or looking to stay connected with fellow cursillistas, we welcome you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/documents"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3.5 rounded-lg text-[0.95rem] font-semibold font-sans hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-250"
            >
              Apply for a Weekend
            </Link>
            <Link
              to="/secretariat"
              className="inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-lg text-[0.95rem] font-semibold font-sans border-[1.5px] border-white/40 hover:border-white hover:bg-white/10 transition-all duration-250"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
