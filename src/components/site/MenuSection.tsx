import { menu, type MenuCategory } from "@/data/cafe";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";

function Category({ category, flip }: { category: MenuCategory; flip: boolean }) {
  return (
    <Reveal className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
      <div className={flip ? "lg:order-2" : undefined}>
        <img
          src={category.image}
          alt={category.imageAlt}
          width={1000}
          height={1000}
          loading="lazy"
          className="h-56 w-full rounded-2xl object-cover shadow-soft transition-transform duration-500 hover:scale-[1.02] sm:h-72 lg:h-full lg:max-h-[26rem]"
        />
      </div>
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="font-display text-2xl sm:text-3xl">{category.title}</h3>
          <p className="text-sm text-muted-foreground">{category.note}</p>
        </div>
        <ul className="mt-6 divide-y divide-border/70">
          {category.items.map((item) => (
            <li key={item.name} className="flex items-start gap-4 py-4">
              <div className="min-w-0 flex-1">
                <h4 className="font-display text-lg leading-snug">{item.name}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <span className="shrink-0 pt-0.5 font-display text-lg text-primary">
                ₹{item.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function MenuSection() {
  return (
    <section id="menu" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">The menu</p>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Brewed, baked and plated in-house
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            A short menu, done properly. Prices include taxes; ask us about the day&apos;s special
            bake at the counter.
          </p>
        </Reveal>

        <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-20">
          {menu.map((c, i) => (
            <Category key={c.id} category={c} flip={i % 2 === 1} />
          ))}
        </div>

        <Reveal className="mt-16 rounded-3xl bg-blush/50 px-6 py-10 text-center sm:px-12 sm:py-14">
          <h3 className="font-display text-2xl sm:text-3xl">Want to enjoy it here?</h3>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Tables fill up fast on weekends. Book yours in under a minute.
          </p>
          <Cta href="#reserve" className="mt-7">
            Reserve a Table
          </Cta>
        </Reveal>
      </div>
    </section>
  );
}