import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PreCursillo = () => {
  const reveal = useScrollReveal();

  return (
    <Layout>
      <PageHeader tag="Preparation" title="Pre-Cursillo" subtitle="Sponsoring candidates for the Cursillo weekend" />
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div ref={reveal} className="fade-up space-y-8">

            <div className="bg-card border rounded-xl p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3 font-serif">Sponsoring Candidates for the Cursillo Weekend</h2>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                Sponsoring candidates is one of the main aspects of the Pre-Cursillo, and the most important factor that contributes to the success of the Cursillo Weekend, and evidently to the evangelizing mission of the Catholic Church.
              </p>
            </div>

            {/* The Importance of the Pre-Cursillo */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground font-serif">The Importance of the Pre-Cursillo</h2>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                Our Fundamental Ideas (FI) assert that the three stages of our Cursillo Movement are so closely connected that they constitute an organic whole, and a failure in the functioning of any one of the three stages will have direct consequences on the other two, and therefore on the development of the Cursillo Movement as a whole (FI # 201).
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                The Fundamental Ideas of the Cursillo Movement state that, in the Pre-Cursillo stage, our Movement initiates the evangelizing process that it must complete in order to accomplish its purpose. The Pre-Cursillo consists of these steps:
              </p>
              <ul className="space-y-3 pl-4">
                {[
                  "Searching, selecting and preparing potential candidates for the Cursillo Weekend",
                  "Carefully preparing for the Cursillo Weekend by coordinating all the spiritual, personal and material elements involved",
                  "Making plans to accompany the new Cursillistas in the Post-Cursillo to help them get mature in their faith, deepen their Christian commitment through their Group Reunion and Ultreya, and take their apostolic place in the world",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-muted-foreground font-sans leading-[1.85]">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                Eduardo Bonnín, our founding father, focused on the person, but not on the environment. He keeps reminding us of converting ourselves and others, and consequently, the environments will be automatically and naturally transformed.
              </p>
              <div className="bg-cream rounded-xl p-6 border-l-4 border-primary">
                <p className="text-base text-muted-foreground leading-[1.85] font-sans italic">
                  Juan Capó Bosch used the following anecdote to illustrate the urgency of first "transforming the individual members and afterwards to place them where their talents are used wisely and they can apply themselves effectively to the transformation of their world." A boy, who was traveling with his father in a train compartment, kept asking his father questions about many things. His father, annoyed because he could not read his newspaper peacefully, noticed a full-page advertisement featuring a map of the world. He tore it into small pieces and challenged his son to put them together again with a promise of a monetary reward. Unfortunately, the boy successfully completed the puzzle in about 2 minutes. His father was amazed — the boy had put together the figure of a man in a tailor's ad on the other side of the map instead. The boy said it was much easier to remake the man and in that way to remake the world.
                </p>
              </div>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                Before Jesus leaves his disciples, He gives them this command: "Go and make disciples of all nations!" The Acts of the Apostles quoted Paul and Barnabas repeating the Lord's command: <em>"I have made you a light to the Gentiles, that you may be an instrument of salvation to the ends of the earth."</em> (Acts 13:44-52).
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                Father Frank S. Salmani in his book "Whom Shall I Send?" reminds us that Jesus commands his disciples to go out and not only spread the Good News, but to literally recruit others to continue to spread the message, to find other disciples, "students" of the Gospel who would continue the work of the first apostles. At the same time, Jesus does not ask everyone to embrace the same call. He calls all to accept the Gospel, but He calls certain people to be leaders to help others accept the call. It is not enough to just be followers. Some are called to lead others.
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                The Cursillo Movement's Fundamental Ideas Book strongly recommends that the Pre-Cursillo should be developed as a function of what is first, last, and always the goal of the Cursillo Movement: to make possible the living out, and the living out together what is fundamental for being Christian. The Fundamental Ideas also clarifies that the Pre-Cursillo grows out of the Post-Cursillo, and the work of Pre-Cursillo is accomplished above all through the word and witness of those who have made a Cursillo.
              </p>
            </div>

            {/* Sponsoring Candidates */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground font-serif">Sponsoring Candidates</h2>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                In addition to a prayerful and apostolic community as a witness to the authenticity of the Christian life, there is a great need for the personal influence and contact which the Cursillista has with those whom he wishes to invite to make a Cursillo. Such an invitation should be personal through a true friendship so that the relationship may last long in the best interests of our evangelizing endeavors as we are advised to <strong>make a friend, to be a friend and to bring that friend to Christ</strong>.
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                The Leader's Manual advises the sponsors to "explain to the potential candidates the reason for the Cursillo Weekend in such a way that they will become enthusiastic about it. Since those who are interested in becoming a better person should attend the Cursillo, it is necessary that they see the Cursillo Movement as a means for attaining their desires. In this way, they will be Cursillistas by desire before attending. Therefore, recruiting candidates through the advertisements of the Cursillo Weekends on parish and diocesan newsletters or through any secular media are seriously discouraged."
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                According to the Fundamental Ideas, the candidates should be informed that "the Cursillo Weekend is not something theoretical but a lived experience that is oriented toward the Church, toward community, toward real life" (FI # 231a).
              </p>
              <div className="bg-card border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 font-serif">Candidate Qualities (Leaders' Manual)</h3>
                <p className="text-sm text-muted-foreground mb-3 font-sans">The Cursillo candidates should be capable of:</p>
                <ul className="space-y-3">
                  {[
                    "Being open to discern and to understand the Gospel message",
                    "Being committed themselves to the love of God, of themselves and of their neighbors",
                    "Discovering their talents and potentials with a view towards serving the community",
                    "Having clean or cleansable circumstances",
                    "Living the grace through the Holy Sacraments they receive",
                    "Having an attitude of progressive conversion",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-sans">
                      <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                The suitable candidate, besides being a baptized Catholic, must have a "certain personality," i.e. capable of making his/her own decisions from his/her own motives, of moving others with his/her opinions, of giving impetus to others by his/her actions, of acting freely and lovingly, and in other words, of becoming salt, light and leaven through Christian core groups' support and encouragement.
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                The Fundamental Ideas Book states: <em>"It is indispensable to give the candidates an adequate preparation so that they can get the most from the Cursillo experience; such a preparation will also facilitate their entry or re-entry into a group, a nucleus, or a community, during the time of the Post-Cursillo"</em> (FI #230).
              </p>
            </div>

            {/* Responsibilities of the Sponsors */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground font-serif">Responsibilities of the Sponsors</h2>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                Candidates' selection for the Cursillo Weekend is very important and necessary, and so certainly is candidate preparation. The Leaders' Manual also states there is no better preparation and attraction for the candidates than a personal and authentic witness of our Fourth Day, <em>"See how they love one another."</em> Such preparation should be done by means of a sincere friendship established through personal contact.
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                Therefore, sponsors, preferably the whole Friendship Group, rather than individuals, are encouraged to provide their candidates with the necessary information about the Purpose of our Cursillo Movement, such as the booklet "Cursillo Movement: What Is It?".
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                Sponsors are responsible to tell their prospective candidates for the Cursillo what they are expected to do after their Weekend: Group Reunion and Ultreya, which will help them persevere in their conversion process and motivate them to live what is fundamental to being Christian through examples.
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                The sponsors' responsibilities should not stop as soon as their invited candidates enter the Cursillo Weekend, but they must definitely continue throughout the Fourth Day of both the sponsors and their new cursillistas, in prayers and in actions. The new Cursillistas need as much personal contact after the Cursillo Weekend as they received before and during the Cursillo Weekend. Probably even more!
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                We must make a conscientious effort to insure that we do all that can be done to insert them into a friendship group reunion. The sponsors themselves should help the new Cursillistas form or find a convenient Friendship Group, or join an existing one, preferably the sponsors' Friendship Group, and regularly accompany them to Ultreyas.
              </p>
              <div className="bg-cream rounded-xl p-6 border-l-4 border-primary">
                <p className="text-base text-muted-foreground leading-[1.85] font-sans italic">
                  "We do not find Total Security by attending Group Reunion and Ultreya, we find Total Security by coming to understand that God loves us, unconditionally — there is nothing that can separate us from the Love of God found in Christ Jesus. Total Security in this context does not mean that life is now free of worries and problems. It simply means that in finding friendship with Christ, we come to understand how God loves us. It is the Group Reunion and Ultreya that give us support and help us to continue the process of conversion in which we deepen our friendship with Christ, becoming more and more convinced of God's love which is where we find Total Security."
                </p>
                <p className="text-sm text-muted-foreground mt-2 font-sans">— Rollo "Total Security," Cursillo Manual 2006</p>
              </div>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                In the Gospel of St. John, Philip said to Jesus, "Master, show us the Father, and that will be enough for us." Jesus said to him, <em>"Have I been with you for so long a time and you still do not know me, Philip? Whoever has seen me has seen the Father."</em> (John 14: 8-9). And in another occasion, St. John repeated what Jesus said to his disciples, <em>"I give you a new commandment: love one another"</em> (John 15: 17).
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                Jesus' disciples lived with him and saw him every day, but they still insisted they wanted to see God the Father. We ourselves saw neither Jesus nor the Father! How can our faith survive so far? Truly, faith is a valuable gift from God that we must dearly treasure. The candidates for the Cursillo Weekend we are approaching may ask us to show Jesus to them. Is each one of us ready to say: "I am in Jesus and Jesus is in me" when people want to see Jesus? It is a real challenge to us!
              </p>
            </div>

            {/* What is Palanca? */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground font-serif">What is Palanca?</h2>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                "Palanca" is a Spanish word which means "lever." A lever is normally used to move something which one could not move by normal strength. Palanca then, helps us achieve something not possible without the grace of God. As Jesus states in the Gospel of John, without Him we can do nothing.
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                Palanca in the context of Cursillo is the same. All of our efforts to bring others to Christ can be of no avail without the prayers, sacrifices and spiritual works that are done with the help of the Holy Spirit which brings us the grace to be used to serve God.
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                We are to do Palanca constantly, in the form of morning offerings, personal prayer periods, Masses, visits to the Blessed Sacrament, Rosaries, Stations of the Cross, and Spiritual Reading done solely for the success of Candidates, Team Members and the Cursillo Movement in general.
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                The Palanca that we are familiar with from our own weekends is merely letting the people on the weekends know what we have done for them, and to encourage them in their spiritual journey.
              </p>
              <div className="bg-card border rounded-xl p-6">
                <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                  According to a National Cursillo Center Mailing from February 2008: <em>"The 'Fundamental Ideas of the Cursillo Movement' (FICM) strongly recognizes grace as principle and foundation of our Movement and considers Palanca as one of the basic elements of the Cursillo Strategy, known as the Mystery of the Palanca… Cursillo strategy has always given, as its most important characteristic, to Palanca (prayer, sacrifice, and works of mercy). Dependence on this has to be real, sincere and permanent, individual and communal, to guarantee the efficacy of any other steps one takes."</em>
                </p>
              </div>
              <p className="text-base text-muted-foreground leading-[1.85] font-sans">
                Palanca will be needed for our Diocese of St. Augustine Cursillo Weekends. There are a few ways to get your Palanca to a candidate. You will be advised how to get the Palanca to the weekends.
              </p>
            </div>

            <p className="text-xs text-muted-foreground font-sans pt-4 border-t">
              Copyright © 2008, National Cursillo Center. All rights reserved.
            </p>

            <Link
              to="/documents"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold font-sans hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              Download Sponsor's Guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PreCursillo;
