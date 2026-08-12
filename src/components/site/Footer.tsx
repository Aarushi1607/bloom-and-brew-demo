import { Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { cafe, navLinks } from "@/data/cafe";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:py-16">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="" width={512} height={512} loading="lazy" className="h-9 w-9" />
            <span className="font-display text-xl">{cafe.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A neighbourhood café in Pune serving slow-roasted coffee, all-day breakfast and
            desserts baked every morning.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={cafe.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={cafe.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="font-display text-base">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#reserve" className="hover:text-primary">
                Reserve a Table
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-base">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={cafe.phoneHref} className="hover:text-primary">
                {cafe.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${cafe.email}`} className="break-all hover:text-primary">
                {cafe.email}
              </a>
            </li>
            <li>{cafe.address}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base">Hours</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {cafe.hours.map((h) => (
              <li key={h.days}>
                <span className="block text-foreground">{h.days}</span>
                {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <p className="mx-auto max-w-7xl px-5 py-5 text-center text-xs text-muted-foreground sm:px-8">
          © {new Date().getFullYear()} {cafe.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}