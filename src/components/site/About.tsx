import interiorImg from "@/assets/interior2.jpg";
import baristaImg from "@/assets/barista.jpg";
import { Reveal } from "./Reveal";

const pillars = [
  {
    title: "Beans with a name",
    body: "Single-estate arabica from Chikmagalur, roasted in small batches and used within ten days.",
  },
  {
    title: "Made the slow way",
    body: "Bread proofed overnight, cakes baked at 6 AM, chai brewed cup by cup — never in advance.",
  },
  {
    title: "A room to stay in",
    body: "Warm light, soft seating, plenty of plug points. Stay for one cup or the whole afternoon.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 max-w-lg font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              A corner of Pune that smells like fresh coffee and warm butter
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              We opened in 2016 with six tables, one espresso machine and a stubborn belief that a
              neighbourhood café should feel like someone&apos;s living room. Nine years later the
              tables have doubled, the regulars have names on their cups, and the belief hasn&apos;t
              changed at all.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Everything on the menu is made here — from the sourdough under your avocado to the
              compote on your cheesecake.
            </p>

            <dl className="mt-10 space-y-6">
              {pillars.map((p) => (
                <div key={p.title} className="border-l-2 border-primary/40 pl-5">
                  <dt className="font-display text-lg">{p.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-4 sm:gap-5">
            <img
              src={interiorImg}
              alt="Rattan chairs and hanging plants in the Brew & Bloom seating corner"
              width={1200}
              height={900}
              loading="lazy"
              className="col-span-2 h-56 w-full rounded-2xl object-cover shadow-soft sm:h-72"
            />
            <img
              src={baristaImg}
              alt="Barista pouring steamed milk into an espresso"
              width={1200}
              height={900}
              loading="lazy"
              className="h-44 w-full rounded-2xl object-cover shadow-soft sm:h-56"
            />
            <div className="flex flex-col justify-center rounded-2xl bg-butter/70 p-6">
              <span className="font-display text-4xl text-clay">9 yrs</span>
              <span className="mt-2 text-sm leading-relaxed text-muted-foreground">
                of pouring coffee on Bloom Street, seven days a week.
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}