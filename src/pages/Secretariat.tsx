import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { User, Mail, Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const secretariatMembers = [
  { role: "Spiritual Director", name: "Fr. Ron Camarda" },
  { role: "Lay Coordinator", name: "Stephen Turner", email: "laydirector@staugustinecursillo.org" },
  { role: "Post Cursillo (English)", name: "John Viggiani", email: "postcursillo@staugustinecursillo.org" },
  { role: "Post Cursillo (Spanish)", name: "Jacqueline Santiesteban" },
  { role: "Treasurer", name: "Paul Halter", email: "staugustinecursillotreasurer@gmail.com" },
  { role: "Communications (English)", name: "Pattie Halle", email: "staugustinecursillo@gmail.com" },
  { role: "School of Leaders (English)", name: "Carl Ludwig", email: "cl2465@att.com" },
  { role: "School of Leaders (Spanish)", name: "Elia Vega" },
  { role: "Asst. Spiritual Director (Spanish)", name: "Fr. Heriberto Vergara" },
  { role: "3-Day Coordinator (English)", name: "Mona Coppedge" },
  { role: "3-Day Coordinator (Spanish)", name: "María Escamilla", email: "spanish@staugustinecursillo.org" },
  { role: "Pre Cursillo (English)", name: "Mary Kay Preston", email: "staugustinecursilloweekend@gmail.com" },
  { role: "Pre Cursillo (Spanish)", name: "Carlos & Zulma Arango" },
  { role: "Communications (Spanish)", name: "Jose Escamilla", phone: "904-240-9420", email: "spanishcursillostaugustine@gmail.com" },
];

const Secretariat = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Leadership" title="Diocesan Secretariat" subtitle="Leadership of the Cursillo Movement — Diocese of St. Augustine" />

      {/* Bishop Quote */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container max-w-3xl">
          <div ref={reveal} className="fade-up text-center">
            <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground/60 font-semibold mb-3 font-sans">
              Bishop Emeritus of St. Augustine
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-1 font-serif">
              Most Rev. Felipe J. Estevez
            </h2>
            <blockquote className="mt-6 border-l-4 border-primary/30 pl-5 italic text-muted-foreground font-serif text-base md:text-lg leading-relaxed">
              "When I was 18 I made a Cursillo and that made a difference to my future. Cursillo is an opportunity to live fully The Christian way."
              <footer className="mt-2 text-sm not-italic text-muted-foreground/70">
                — Most Rev. Felipe J. Estevez, Bishop of St. Augustine
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* About the Secretariat */}
      <section className="py-14 md:py-18">
        <div className="container max-w-3xl">
          <p ref={reveal} className="fade-up text-base text-muted-foreground mb-10 leading-relaxed font-sans">
            The Diocesan Secretariat is composed of clergy and laity, men and women. The whole Secretariat is entrusted by the Bishop with the responsibility of promoting, developing and directing the Cursillo Movement in a diocese. The authority entrusted to the Secretariat is to embrace, study, and promote the Charism of the Movement. The Lay Director should always be a lay person responsible for the organization and methodology of the Movement. The Spiritual Advisor, always a priest, deacon or vowed religious, is responsible for matters concerning doctrine and conscience. Other Secretariat members include the Chairperson for the School of Leaders, Precursillo, Cursillo, and Postcursillo sections and a Treasurer and Secretary. All Secretariat members have voice and vote. The members of the Secretariat come from the School of Leaders. Their selection places them in a position to be of greater service to the Movement.
          </p>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-14 md:py-18 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 ref={reveal} className="fade-up text-2xl md:text-3xl font-semibold text-foreground mb-8 font-serif text-center">
            Secretariat Members
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {secretariatMembers.map((member, i) => (
              <div
                key={member.role}
                ref={reveal}
                className={`fade-up stagger-${Math.min(i + 1, 6)} bg-card border rounded-xl p-5 hover-lift`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground font-sans">{member.role}</h3>
                    <p className="text-xs text-muted-foreground font-sans">{member.name}</p>
                  </div>
                </div>
                {member.email && (
                  <a href={`mailto:${member.email}`} className="flex items-center gap-1.5 text-xs text-primary hover:underline mt-2 font-sans">
                    <Mail className="h-3 w-3" />
                    {member.email}
                  </a>
                )}
                {member.phone && (
                  <a href={`tel:${member.phone}`} className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1 font-sans">
                    <Phone className="h-3 w-3" />
                    {member.phone}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-14 md:py-18">
        <div className="container max-w-3xl">
          <h2 ref={reveal} className="fade-up text-2xl md:text-3xl font-semibold text-foreground mb-6 font-serif">
            The Responsibilities of the Secretariat Members and School of Leaders
          </h2>
          <div ref={reveal} className="fade-up space-y-5 text-sm text-muted-foreground leading-relaxed font-sans">
            <p>
              The Fundamental Ideas of the Cursillo Movement strongly affirm that "The Secretariat will be in a position to set up a Cursillo Weekend only when there is a sufficient number of persons – preferably, groups of persons who, possessing the qualities outlined above, offer a well-founded hope that by working with other people of good will, they will be able to Christianize their environments" (FI # 229). With the above advice, some diocesan Cursillo leaders have started to realize the necessity of finding time to evaluate the progress of their service to the Movement, namely the Cursillistas in their evangelizing mission in their 'Fourth Day' or Post-Cursillo. These leaders are commended for their brave efforts to modify, adjust, or change their direction in the best interests of their local Cursillo Movement.
            </p>
            <p>
              There is always room for improvement in order to effectively serve the Cursillistas who strive to live what is fundamental for being Christian in their environments. This commendable practice, by analogy, is like that of James and John, the sons of Zebedee, who were 'mending their nets' on the shore to be ready for the next catch when they were called by Jesus to follow Him (Mc. 1:19).
            </p>
            <p>
              The leaders may help their Cursillo Community revive and deepen its knowledge of the purpose, mentality, essence, and Foundational Charism of our Cursillo Movement through various workshops administered either by national, regional service teams or by its own diocesan Secretariat members and School of Leaders. There should be a requirement also for the sponsors to attend a Sponsoring Workshop given by the Diocesan Secretariat and School of Leaders in addition to their being Cursillistas in good standing, i.e. actively participating in a Friendship Group and frequently attending Ultreyas.
            </p>
            <p>
              Some people, unfortunately, still consider the Cursillo Weekend as the most important activity in our Movement and, therefore, the Weekend becomes indispensable. Others even believe the Cursillo Movement will be "dead" in a diocese if there are no Three-Day Cursillo Weekends put on every year.
            </p>
            <p className="border-l-4 border-primary/20 pl-4 italic">
              "Jesus told his disciples to have a boat ready for him because of the crowd, so that they would not crush him. He had cured many and as a result, those who had diseases were pressing upon him to touch him" (Mk 3:9-10).
            </p>
            <p>
              Likewise, our Three-Day Cursillo Weekend has been so much overwhelmed by the enthusiasm and passion of both the Cursillo leaders as team members and the candidates that the Weekend casts a foggy shadow over the Pre-Cursillo and Post-Cursillo stages in our Cursillo Movement! If the Cursillo leaders gave excessive attention, time, energy and enthusiasm to the Three-Day Cursillo Weekend, the whole Movement would probably be crushed very soon.
            </p>
            <p>
              In conclusion, Jesus' command "Go and make disciples of all nations" must be the natural outcome of our Cursillo Weekend if it is administered properly and effectively by a team knowledgeable of the essence, the mentality, the purpose and the methods of Cursillos de Christiandad. Dostoevski says that the worst enemies of a movement are those who become its promoters without understanding its mentality.
            </p>
            <p className="text-primary font-semibold text-base font-serif">Ultreya!</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="container max-w-lg">
          <div ref={reveal} className="fade-up-scale text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 font-serif">Get in Touch</h2>
            <p className="text-muted-foreground text-sm mb-6 font-sans">
              For questions about the Cursillo Movement in the Diocese of St. Augustine, please reach out.
            </p>
            <a
              href="mailto:info@staugustinecursillo.org"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold font-sans hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              <Mail className="h-4 w-4" />
              info@staugustinecursillo.org
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Secretariat;
