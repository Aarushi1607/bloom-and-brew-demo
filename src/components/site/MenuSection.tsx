import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { menu } from "@/data/cafe";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function MenuSection() {
  const [active, setActive] = useState(menu[0]!.id);
  const category = menu.find((c) => c.id === active) ?? menu[0]!;

  return (
    <section id="menu" className="scroll-mt-24 bg-blush/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">The menu</p>
            <h2 className="mt-5 font-display text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
              Something lovely,
              <br />
              <span className="italic text-rose">every hour.</span>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Comforting classics, bright little surprises, and coffee worth slowing down for.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Menu categories"
            className="-mb-px flex flex-wrap gap-x-8 gap-y-2 border-b border-primary/15 lg:justify-end"
          >
            {menu.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={c.id === active}
                onClick={() => setActive(c.id)}
                className={cn(
                  "-mb-px border-b-2 pb-3 text-sm transition-colors",
                  c.id === active
                    ? "border-primary font-semibold text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                {c.title}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-x-16 border-t border-primary/15 sm:mt-14 md:grid-cols-2">
          {category.items.map((item, i) => (
            <div
              key={item.name}
              className="flex items-start gap-5 border-b border-primary/15 py-7"
            >
              <span className="pt-2 text-xs tracking-widest text-primary/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl sm:text-2xl">{item.name}</h3>
                  <span className="shrink-0 font-display text-lg text-primary">₹{item.price}</span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            All day breakfast · Vegetarian friendly · {category.note}
          </p>
          <p className="flex items-center gap-3 text-sm text-muted-foreground">
            Want to enjoy it here?
            <a
              href="#reserve"
              className="inline-flex items-center gap-2 border-b border-primary/40 pb-1 font-semibold text-primary transition-colors hover:border-primary"
            >
              Reserve a table
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}