import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { cafe } from "@/data/cafe";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Visit us</p>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Find us on Bloom Street
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <Reveal className="space-y-7">
            <div className="flex gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <h3 className="font-display text-lg">Address</h3>
                <p className="mt-1 text-muted-foreground">{cafe.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <h3 className="font-display text-lg">Opening hours</h3>
                <ul className="mt-1 space-y-1 text-muted-foreground">
                  {cafe.hours.map((h) => (
                    <li key={h.days}>
                      <span className="text-foreground">{h.days}:</span> {h.time}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <h3 className="font-display text-lg">Phone</h3>
                <a href={cafe.phoneHref} className="mt-1 block text-muted-foreground hover:text-primary">
                  {cafe.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <h3 className="font-display text-lg">Email</h3>
                <a
                  href={`mailto:${cafe.email}`}
                  className="mt-1 block truncate text-muted-foreground hover:text-primary"
                >
                  {cafe.email}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Cta href={cafe.maps} target="_blank" rel="noopener noreferrer">
                <MapPin className="h-4 w-4" /> Get Directions
              </Cta>
              <Cta href={cafe.whatsapp} target="_blank" rel="noopener noreferrer" variant="outline">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </Cta>
              <Cta href={cafe.instagram} target="_blank" rel="noopener noreferrer" variant="outline">
                <Instagram className="h-4 w-4" /> Instagram
              </Cta>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title={`Map showing ${cafe.name} on Bloom Street, Pune`}
                src={cafe.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[22rem] w-full sm:h-[30rem]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}