import { Clock, MapPin, Phone } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { cafe } from "@/data/cafe";
import { Cta } from "./Cta";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-32 h-[28rem] w-[28rem] rounded-full bg-butter/70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-64 h-80 w-80 rounded-full bg-blush/60 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="eyebrow">Est. 2016 · Pune</p>
          <h1 className="mt-4 font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
            Good Coffee.
            <br />
            Good Food.
            <br />
            <span className="text-primary">Good Moments.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            {cafe.name} is a small neighbourhood café on Bloom Street — slow-roasted coffee,
            all-day breakfast and desserts baked before the sun is properly up.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Cta href="#menu" className="w-full sm:w-auto">
              View Menu
            </Cta>
            <Cta href="#reserve" variant="outline" className="w-full sm:w-auto">
              Reserve a Table
            </Cta>
          </div>
        </div>

        <div className="animate-in fade-in duration-1000">
          <div className="relative overflow-hidden rounded-[1.75rem] shadow-lift">
            <img
              src={heroImg}
              alt="Guest enjoying a latte in the sunlit interior of Brew & Bloom café"
              width={1600}
              height={1200}
              fetchPriority="high"
              className="h-[22rem] w-full object-cover sm:h-[30rem] lg:h-[34rem]"
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-24">
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