import { ArrowDown, ArrowUpRight, CalendarDays, Clock, MapPin, Phone } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { cafe } from "@/data/cafe";
import { Cta } from "./Cta";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-butter/50 pt-24 sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-40 h-[42rem] w-[42rem] rounded-full bg-blush/45 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-72 h-[32rem] w-[32rem] rounded-full bg-butter blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="eyebrow">A little café in the heart of Pune</p>
          <h1 className="mt-6 font-display text-[2.7rem] leading-[1.02] sm:text-6xl lg:text-[4.6rem]">
            Good coffee.
            <br />
            <span className="italic text-rose">Good food.</span>
            <br />
            Good moments.
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Come for the slow mornings, stay for the warm conversations. {cafe.name} is your
            neighbourhood pause, poured with care.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Cta href="#menu" className="w-full sm:w-auto">
              View our menu
              <ArrowUpRight className="h-4 w-4" />
            </Cta>
            <Cta href="#reserve" variant="outline" className="w-full sm:w-auto">
              Reserve a table
              <CalendarDays className="h-4 w-4" />
            </Cta>
          </div>
        </div>

        <div className="animate-in fade-in duration-1000">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -bottom-5 -right-4 hidden h-full w-full rounded-t-[14rem] bg-blush/40 sm:block"
            />
            <div className="relative overflow-hidden rounded-t-[14rem] shadow-lift">
              <img
                src={heroImg}
                alt="Warmly lit café counter with hanging bulbs and a chalkboard menu"
                width={1408}
                height={1760}
                fetchPriority="high"
                className="h-[24rem] w-full object-cover sm:h-[32rem] lg:h-[36rem]"
              />
            </div>
            <div className="absolute -left-2 bottom-10 flex max-w-[15rem] -rotate-3 items-center gap-3 bg-primary px-5 py-4 text-primary-foreground shadow-lift sm:-left-10">
              <span className="font-display text-2xl leading-none">✳</span>
              <span className="font-display text-lg leading-tight">Handcrafted every day</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-6 sm:px-8">
        <a
          href="#about"
          className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-primary"
        >
          Scroll to explore
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 lg:pb-24">
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-soft sm:grid-cols-3">
          {[
            { icon: Clock, label: "Open today", value: "8:00 AM – 10:00 PM", href: "#contact" },
            { icon: MapPin, label: "Find us", value: cafe.shortAddress, href: cafe.maps },
            { icon: Phone, label: "Call us", value: cafe.phone, href: cafe.phoneHref },
          ].map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="bg-card">
              <a
                href={href}
                className="flex min-w-0 items-center gap-4 px-6 py-5 transition-colors hover:bg-secondary/50"
              >
                <Icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                    {label}
                  </span>
                  <span className="block truncate font-medium">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}