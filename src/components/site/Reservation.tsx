import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { cafe } from "@/data/cafe";
import { Cta, CtaButton } from "./Cta";
import { Reveal } from "./Reveal";

const field =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";
const labelCls = "mb-1.5 block text-sm font-medium";

export function Reservation() {
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = [
      `Table request for ${cafe.name}`,
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Date: ${data.get("date")} at ${data.get("time")}`,
      `Guests: ${data.get("guests")}`,
      data.get("message") ? `Note: ${data.get("message")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setSending(true);
    window.open(`${cafe.whatsapp.split("?")[0]}?text=${encodeURIComponent(text)}`, "_blank");
    toast.success("Request ready — send it on WhatsApp and we'll confirm within the hour.");
    setSending(false);
  }

  return (
    <section id="reserve" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Reservations</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Save your table
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              Tell us when you&apos;re coming and we&apos;ll keep a seat by the window. For groups
              of eight or more, please call us directly.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Cta href={cafe.phoneHref} variant="outline">
                Call Us
              </Cta>
              <Cta href={cafe.whatsapp} target="_blank" rel="noopener noreferrer" variant="outline">
                Order on WhatsApp
              </Cta>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className={labelCls} htmlFor="name">
                    Name
                  </label>
                  <input id="name" name="name" required className={field} placeholder="Aarushi T." />
                </div>
                <div>
                  <label className={labelCls} htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className={field}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className={labelCls} htmlFor="date">
                    Date
                  </label>
                  <input id="date" name="date" type="date" required className={field} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="time">
                    Time
                  </label>
                  <input id="time" name="time" type="time" required className={field} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="guests">
                    Guests
                  </label>
                  <select id="guests" name="guests" defaultValue="2" className={field}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "guest" : "guests"}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls} htmlFor="message">
                    Message <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className={`${field} resize-none`}
                    placeholder="Birthday cake, high chair, quiet corner…"
                  />
                </div>
              </div>
              <CtaButton type="submit" disabled={sending} className="mt-6 w-full">
                Reserve a Table
              </CtaButton>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                We confirm every booking by phone or WhatsApp.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}