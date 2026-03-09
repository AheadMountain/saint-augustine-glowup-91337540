import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Banner - Dark */}
      <section
        className="relative overflow-hidden py-[72px] px-6 md:py-20"
        style={{ background: "hsl(18, 8%, 16%)" }}
      >
        {/* Subtle radial glow */}
        <div
          className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, hsla(43,50%,54%,0.1) 0%, hsla(348,70%,33%,0.06) 40%, transparent 70%)",
          }}
        />

        <div className="relative z-10 container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col items-start">
            {/* Logo mark */}
            <svg width="64" height="82" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-7">
              <rect x="12" y="0" width="8" height="42" rx="1" fill="hsl(348, 70%, 33%)" />
              <rect x="0" y="10" width="32" height="8" rx="1" fill="hsl(348, 70%, 33%)" />
              <rect x="13" y="1" width="6" height="40" rx="0.5" fill="hsl(43, 50%, 54%)" opacity="0.3" />
            </svg>

            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.1] mb-1.5 tracking-tight font-serif">
              Cursillos in{" "}
              <em className="not-italic text-gold">Christianity</em>
            </h1>
            <p className="text-white/55 text-base font-medium font-sans mb-1.5">
              Diocese of St. Augustine — Jacksonville, Florida
            </p>
            <p
              className="font-serif italic text-2xl font-medium mb-7"
              style={{
                background: "linear-gradient(90deg, hsl(4,65%,48%), hsl(28,80%,52%), hsl(46,88%,50%), hsl(145,63%,42%), hsl(204,60%,44%), hsl(282,44%,47%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              De Colores!
            </p>
            <p className="text-white/65 text-base md:text-lg max-w-[460px] mb-9 leading-relaxed font-sans">
              Changing lives through three-day weekends of faith, community, and friendship since 1974.
            </p>

            <div className="flex flex-wrap gap-3.5">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg text-[0.95rem] font-semibold font-sans hover:brightness-110 transition-all"
              >
                View Upcoming Events
              </Link>
              <Link
                to="/documents"
                className="inline-flex items-center gap-2 text-white/85 px-7 py-3.5 rounded-lg text-[0.95rem] font-semibold font-sans border border-white/20 hover:border-white/50 hover:text-white transition-all"
              >
                Apply for a Weekend
              </Link>
            </div>
          </div>

          {/* Right - Quote card */}
          <div className="relative">
            <div
              className="relative rounded-2xl p-10 md:p-11 backdrop-blur-sm overflow-hidden"
              style={{
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
              {/* Cross icon */}
              <svg width="24" height="32" viewBox="0 0 32 42" fill="none" className="mb-5 opacity-40">
                <rect x="12" y="0" width="8" height="42" rx="1" fill="white" />
                <rect x="0" y="10" width="32" height="8" rx="1" fill="white" />
              </svg>
              <blockquote className="font-serif text-2xl md:text-[1.45rem] italic text-white/90 leading-snug mb-4 font-normal">
                "Make a friend, be a friend, bring a friend to Christ."
              </blockquote>
              <cite className="not-italic text-sm text-white/40 font-sans tracking-wide">
                — The Cursillo motto
              </cite>

              <div className="flex gap-8 mt-8 pt-6 border-t border-white/[0.08]">
                {[
                  { num: "50+", label: "Years" },
                  { num: "139", label: "Weekends" },
                  { num: "1974", label: "Founded" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-serif text-3xl font-semibold text-gold leading-none">
                      {stat.num}
                    </div>
                    <div className="text-xs text-white/40 mt-1 uppercase tracking-widest font-sans">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Cursillo */}
      <section className="py-20 bg-cream">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.12em] text-primary font-semibold mb-3 font-sans">
            What is Cursillo?
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 font-serif">
            Three pillars of the movement
          </h2>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed mb-12 font-sans">
            Cursillo is a movement within the Catholic Church that helps people deepen their faith through community, study, and action.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "The Weekend",
                desc: "A three-day experience of living in Christian community — filled with talks, discussions, worship, and lasting friendships.",
                borderColor: "hsl(4, 65%, 48%)",
              },
              {
                num: "02",
                title: "Group Reunion",
                desc: "Small groups that meet regularly to share their journey, support one another, and stay accountable in faith.",
                borderColor: "hsl(145, 63%, 42%)",
              },
              {
                num: "03",
                title: "Ultreya",
                desc: "Larger gatherings where cursillistas come together to share, encourage, and celebrate what God is doing in their lives.",
                borderColor: "hsl(204, 60%, 44%)",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="relative bg-card rounded-xl border p-9 hover:-translate-y-1 hover:shadow-lg transition-all overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-1 h-full"
                  style={{ background: item.borderColor }}
                />
                <div className="font-serif text-4xl font-light text-gold leading-none mb-4">
                  {item.num}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.12em] text-primary font-semibold mb-3 font-sans">
            Upcoming
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 font-serif">
            Cursillo Weekends & Events
          </h2>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed mb-12 font-sans">
            Find the next weekend retreat or gathering near you. Space is limited — register early.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { month: "Mar", day: "5", type: "English Weekend", title: "Men's #139", detail: "March 5–8, 2026", action: "Register →", to: "/documents" },
              { month: "Mar", day: "12", type: "English Weekend", title: "Women's #137", detail: "March 12–15, 2026", action: "Register →", to: "/documents" },
              { month: "Jun", day: "20", type: "Special Event", title: "Day of Reflection", detail: "June 20, 2026 · 9:00 AM – 3:00 PM\nChrist the King Catholic Church", action: "Learn more →", to: "/events" },
              { month: "Sep", day: "—", type: "Spanish Weekend", title: "Men's & Women's", detail: "September 2026 · Dates TBA", action: "Stay updated →", to: "/events" },
            ].map((event) => (
              <Link
                key={event.title}
                to={event.to}
                className="flex gap-5 p-7 bg-card border border-border rounded-xl no-underline text-foreground hover:border-primary hover:shadow-md transition-all"
              >
                <div className="flex flex-col items-center justify-center min-w-[60px] bg-cream rounded-xl py-3 px-2">
                  <span className="text-[0.7rem] uppercase tracking-widest text-primary font-semibold font-sans">
                    {event.month}
                  </span>
                  <span className="font-serif text-3xl font-semibold text-foreground leading-tight">
                    {event.day}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="text-xs uppercase tracking-widest text-primary font-semibold font-sans">
                    {event.type}
                  </span>
                  <h3 className="text-base font-semibold text-foreground mt-1 font-sans">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 whitespace-pre-line font-sans">
                    {event.detail}
                  </p>
                  <span className="text-sm text-primary font-semibold mt-2 inline-flex items-center gap-1 font-sans">
                    {event.action}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome & Mission */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-primary font-semibold mb-3 font-sans">
                Welcome
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 font-serif">
                Changing lives since 1974
              </h2>
              <p className="text-base text-muted-foreground leading-[1.85] mb-5 font-sans">
                The Catholic Cursillo Movement in the Diocese of St. Augustine has been transforming lives for over fifty years. Whether you've attended a weekend or are just learning about Cursillo for the first time, you're welcome here.
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                This site is how we keep in touch with all who have attended the three-day weekend and want to stay connected. Come back often to find upcoming events, download resources, and see what's happening in the community.
              </p>
            </div>

            <div
              className="relative bg-card border rounded-2xl p-10 overflow-hidden"
            >
              {/* Rainbow left bar */}
              <div
                className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                style={{
                  background: "linear-gradient(to bottom, hsl(4,65%,48%), hsl(28,80%,52%), hsl(46,88%,50%), hsl(145,63%,42%), hsl(204,60%,44%), hsl(282,44%,47%))",
                }}
              />
              <h3 className="text-2xl font-semibold text-foreground mb-4 font-serif">
                Our Mission
              </h3>
              <p className="text-[0.95rem] text-muted-foreground leading-[1.8] font-sans">
                Each individual lay person must stand before the world as a witness to the resurrection and life of the Lord Jesus — and as a sign that God lives. The laity must nourish the world with spiritual fruits, and joyfully spread that spirit to encourage, support, and affirm those the Lord calls "blessed."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden" style={{ background: "hsl(348, 70%, 33%)" }}>
        {/* Subtle cross pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3 font-serif">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-base text-white/85 mb-9 max-w-md mx-auto leading-relaxed font-sans">
            Whether you're considering your first Cursillo weekend or looking to stay connected with fellow cursillistas, we welcome you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/documents"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3.5 rounded-lg text-[0.95rem] font-semibold font-sans hover:-translate-y-0.5 hover:shadow-xl transition-all"
            >
              Apply for a Weekend
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/secretariat"
              className="inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-lg text-[0.95rem] font-semibold font-sans border border-white/40 hover:border-white hover:bg-white/10 transition-all"
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
