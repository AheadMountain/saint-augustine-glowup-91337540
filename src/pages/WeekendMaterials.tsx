import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, FileText } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CORRECT_PASSWORD = "dosacursillo";

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
            <div ref={reveal} className="fade-up space-y-6">
              <div className="bg-card border rounded-xl p-6 flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm font-sans">Weekend Materials</h3>
                  <p className="text-xs text-muted-foreground mt-0.5 font-sans">
                    Content coming soon. Check back for updated weekend materials.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default WeekendMaterials;
