import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cafe, navLinks } from "@/data/cafe";
import { Cta } from "./Cta";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border/70 bg-background/90 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8 lg:py-4"
      >
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span
            aria-hidden
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/40 font-display text-[0.7rem] tracking-tight text-primary"
          >
            B&amp;B
          </span>
          <span className="truncate font-display text-xl tracking-tight sm:text-2xl">
            Brew <span className="italic">&amp;</span> Bloom
          </span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="mr-4 hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 text-sm text-foreground/75 transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Cta href="#reserve" className="hidden px-6 py-3.5 sm:inline-flex">
            Reserve a table
            <ArrowUpRight className="h-4 w-4" />
          </Cta>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-card/70 text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/70 bg-background lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-2 sm:px-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/50 py-4 font-display text-xl"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mx-auto flex max-w-7xl gap-3 px-5 pb-6 pt-2 sm:px-8">
            <Cta href="#reserve" onClick={() => setOpen(false)} className="flex-1">
              Reserve a Table
            </Cta>
            <Cta href={cafe.phoneHref} variant="outline" className="flex-1">
              Call Us
            </Cta>
          </div>
        </div>
      )}
    </header>
  );
}