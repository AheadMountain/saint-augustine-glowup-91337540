import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Heart } from "lucide-react";

const names = [
  "Nestor Armando Gil", "Maritza Del Valle", "Ana Zometa", "Bob Litza",
  "Donna Langford", "Rose Frangie", "Bill Bellamy", 'Katherine "Kitty" Ludwig',
  "Pat Hale", "Raymond Gormally, Sr", "Trish Strecker", "Doug Pickett",
  "JC Casagrande", "Father Dan DePascale", "Pat and Tom Seifert",
  "Lowe Ann & Page Emory", "Ruth Fitzgerald", "Ralph Carlyles", "Bev Evjen",
  "Millie Hale", 'John "Sparky" Cornell', "Paul and Lucille Trahan",
  "Mike and Georgiann Pokriefka", "Bo and Pat Brown", "Lorraine Losch",
  "Bill Demers", "Annette Arp", "Gina Giovinco", "Msgr R. Joseph James",
  "Father David Barnhardt", "Bob and Kittie Atkins", "Miki Rose",
  "Ed and Shirley Shute", "Charles Dell", "Lou Gill", "Dom Christiano",
  "Al, Maggie and Sue Voorneveld", "Cliff and Bea Riordan", "Ada Gutierrez",
  "Leticia Moreno", "Tereza Gonzales", "Sybil Jones", "Bill Heard",
  "Fr. René Robert", "Maria Diaz", "Jerri Hurtt", "Kathy Roman",
  "Romanita Garcia", "Nancy Hawtin", "Gay Connell", "Steve Turner",
  "Pete Lasher", "Myrna Douglas", "Yvonne Robinson", "Paul Trahan",
  "Fr. Bob Napier", "Al Miller", "Gwen Umlauf", "Tom Umlauf",
  "Kay Finch", "George Diehl", "Michael Knipping", "Dick Hurtt",
  "Deacon Harry Brodeur", "Patricia Bennett", "Lucille M. Trahan",
  "Peter Royal", "Lorraine Anne Gailey Losch",
];

const InRemembrance = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Memorial" title="In Remembrance" subtitle="For those who are no longer with us..." />
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div ref={reveal} className="fade-up text-center mb-10">
            <Heart className="h-10 w-10 text-primary/40 mx-auto mb-4" />
            <p className="text-base text-muted-foreground font-serif italic leading-relaxed max-w-md mx-auto">
              We remember with gratitude and love our fellow cursillistas who have completed their earthly journey.
            </p>
          </div>

          <div ref={reveal} className="fade-up bg-card border rounded-xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {names.map((name) => (
                <p key={name} className="text-sm text-muted-foreground font-sans py-1 border-b border-border/40 last:border-0">
                  {name}
                </p>
              ))}
            </div>
          </div>

          <div ref={reveal} className="fade-up mt-8 text-center">
            <p className="text-sm text-muted-foreground font-sans italic">
              Eternal rest grant unto them, O Lord, and let perpetual light shine upon them.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InRemembrance;
