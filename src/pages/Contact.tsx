import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Mail, MapPin, Send, Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";

const Contact = () => {
  const reveal = useScrollReveal();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoLink = `mailto:staugustinecursillo@gmail.com?subject=${encodeURIComponent(subject || "Contact from Website")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Layout>
      <PageHeader tag="Get in Touch" title="Contact Us" subtitle="We'd love to hear from you — reach out to the Cursillo community" />

      <section className="py-16 md:py-20">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info Sidebar */}
            <div className="md:col-span-2 space-y-6">
              <div ref={reveal} className="fade-up stagger-1 bg-card border rounded-xl p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4 font-serif">Contact Information</h2>

                <div className="space-y-5">
                  <a
                    href="mailto:staugustinecursillo@gmail.com"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground font-sans">Email</p>
                      <p className="text-sm text-muted-foreground font-sans group-hover:text-primary transition-colors">
                        staugustinecursillo@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground font-sans">Mailing Address</p>
                      <p className="text-sm text-muted-foreground font-sans">
                        Cursillos in Christianity<br />
                        P.O. Box 5565<br />
                        Jacksonville, FL 32247
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={reveal} className="fade-up stagger-2 bg-accent/30 border border-accent rounded-xl p-6">
                <p className="text-sm text-muted-foreground font-sans italic leading-relaxed">
                  "Make a friend, be a friend, bring that friend to Christ."
                </p>
                <p className="text-xs text-muted-foreground/70 font-sans mt-2">— Cursillo motto</p>
              </div>
            </div>

            {/* Contact Form */}
            <div ref={reveal} className="fade-up stagger-2 md:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card border rounded-xl p-6 md:p-8 space-y-5">
                <h2 className="text-lg font-semibold text-foreground font-serif">Send us a Message</h2>
                <p className="text-sm text-muted-foreground font-sans -mt-3">
                  Fill out the form and it will open in your email client, ready to send.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground font-sans mb-1.5">Your Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm font-sans placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground font-sans mb-1.5">Your Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm font-sans placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground font-sans mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm font-sans placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="General Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground font-sans mb-1.5">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm font-sans placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm font-sans hover:bg-primary/90 transition-colors shadow-sm"
                >
                  <Send className="h-4 w-4" />
                  Open in Email Client
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
