import { gallery } from "@/data/cafe";
import { Reveal } from "./Reveal";

const spanClass: Record<string, string> = {
  tall: "sm:row-span-2 h-64 sm:h-full",
  wide: "sm:col-span-2 h-56 sm:h-64",
  normal: "h-56 sm:h-64",
};

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            A look inside Bloom Street
          </h2>
        </Reveal>

        <Reveal
          delay={80}
          className="mt-10 grid auto-rows-[14rem] grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5"
        >
          {gallery.map((g) => (
            <figure
              key={g.alt}
              className={`group overflow-hidden rounded-2xl shadow-soft ${spanClass[g.span]}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}