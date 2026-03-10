interface PageHeaderProps {
  tag: string;
  title: string;
  subtitle: string;
}

const PageHeader = ({ tag, title, subtitle }: PageHeaderProps) => (
  <section className="py-12 md:py-16" style={{ background: "hsl(18, 8%, 16%)" }}>
    <div className="container">
      <p className="text-xs uppercase tracking-[0.12em] text-white/40 font-semibold mb-2 font-sans animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}>{tag}</p>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 font-serif animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}>{title}</h1>
      <p className="text-white/55 font-sans text-lg animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}>{subtitle}</p>
    </div>
  </section>
);

export default PageHeader;
