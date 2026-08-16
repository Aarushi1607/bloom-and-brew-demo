import { ArrowUpRight } from "lucide-react";
import interiorImg from "@/assets/interior2.jpg";
import botanicalImg from "@/assets/botanical.jpg";
import { Reveal } from "./Reveal";

const pillars = [
  { title: "Made with care", body: "Seasonal ingredients, considered recipes." },
  { title: "Room to breathe", body: "A calm corner for your everyday rituals." },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative pb-16 pl-4 sm:pb-20 sm:pl-10">
            <div className="relative ml-auto w-[78%]">
              <img
                src={interiorImg}
                alt="Sunlit café window seat with green tiles, iced coffees and plants"
                width={1200}
                height={1504}
                loading="lazy"
                className="h-[26rem] w-full object-cover shadow-soft sm:h-[32rem]"
              />
            </div>
            <div className="absolute left-0 top-0 max-w-[13rem] bg-sage/25 px-6 py-5 font-display text-lg italic leading-snug">
              A soft place
              <br />
              to land
            </div>
            <img
              src={botanicalImg}
              alt="Botanical illustration of a wildflower stem"
              width={800}
              height={1104}
              loading="lazy"
              className="absolute bottom-0 left-0 h-56 w-36 object-cover shadow-soft sm:h-64 sm:w-44"
            />
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-5 max-w-lg font-display text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
              A table for every
              <br />
              <span className="italic text-rose">kind of day.</span>
            </h2>
            <p className="mt-7 max-w-xl leading-relaxed text-muted-foreground">
              Brew &amp; Bloom started with a simple belief: the best parts of a day deserve a
              beautiful place to happen.
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              We pair thoughtfully sourced beans with ingredients from people we trust, then serve
              them in a room made for lingering. From your first coffee to your last little sweet,
              everything here is unhurried, honest and made in small batches.
            </p>

            <dl className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <div key={p.title}>
                  <span className="text-xs tracking-widest text-primary/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <dt className="mt-2 font-display text-xl">{p.title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.body}</dd>
                </div>
              ))}
            </dl>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 border-b border-primary/40 pb-1 font-medium text-primary transition-colors hover:border-primary"
            >
              Come say hello
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}