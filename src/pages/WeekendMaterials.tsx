import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, FileText, Download } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CORRECT_PASSWORD = "dosacursillo";

const materials = [
  { title: "Rector's Guide", href: "https://drive.google.com/file/d/1SQ0gQdtpell-fKg92JOBeKQihjbq0vpo/view?usp=sharing" },
  { title: "Rector's Guide Appendix", href: "https://drive.google.com/file/d/17JdMawJp84M6q2KF2X8pWijOF1NdDtYK/view?usp=sharing" },
  { title: "Rector's Guide FAQ", href: "https://drive.google.com/file/d/1vE1Zzsh5ODFIJ2V4uifBeVQ7zLZZMToN/view?usp=sharing" },
  { title: "Weekend Rollos", href: "https://drive.google.com/file/d/1yH2o5SPrCgo56uhw-x02p5fJ0u75lQ4j/view?usp=sharing" },
  { title: "Rector(a) Notebook 2022", href: "https://docs.google.com/document/d/1iNLEi_PvwXGTu9M_cBgkJWiIbNkiABZr/edit?usp=sharing&ouid=112378510783152767028&rtpof=true&sd=true" },
  { title: "Men's Schedule 2022", href: "https://docs.google.com/spreadsheets/d/1GctWpTPuOV6hNTOnquMeecAW7P5JuueB/edit?usp=sharing&ouid=112378510783152767028&rtpof=true&sd=true" },
];

const WeekendMaterials = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const reveal = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <Layout>
      <PageHeader tag="Resources" title="Weekend Materials" subtitle="Materials needed for the Cursillo weekend" />

      <section className="py-16 md:py-20">
        <div className="container max-w-2xl">
          {!isAuthenticated ? (
            <div ref={reveal} className="fade-up bg-card border rounded-xl p-8 md:p-10 text-center space-y-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent mx-auto">
                <Lock className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-foreground font-serif">Password Required</h2>
                <p className="text-sm text-muted-foreground font-sans">
                  Please enter the password to access weekend materials.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 max-w-xs mx-auto">
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  className="text-center"
                  autoFocus
                />
                {error && <p className="text-sm text-destructive">{error}</p>}
                <Button type="submit" className="w-full">
                  Access Materials
                </Button>
              </form>
            </div>
          ) : (
            <div className="space-y-3">
              {materials.map((mat, i) => (
                <a
                  key={mat.title}
                  href={mat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={reveal}
                  className={`block no-underline fade-up stagger-${Math.min(i + 1, 6)}`}
                >
                  <div className="bg-card border rounded-xl p-5 flex items-center gap-4 hover-lift group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <h3 className="flex-1 font-semibold text-foreground text-sm font-sans">{mat.title}</h3>
                    <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default WeekendMaterials;
