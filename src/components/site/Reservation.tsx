import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { toast } from "sonner";
import { cafe } from "@/data/cafe";
import { Cta, CtaButton } from "./Cta";
import { Reveal } from "./Reveal";
import * as Dialog from "@radix-ui/react-dialog";
import { MessageCircle, X } from "lucide-react";

const field =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";
const fieldError = "border-destructive focus:border-destructive";
const labelCls = "mb-1.5 block text-sm font-medium";
const errorCls = "mt-1.5 text-xs text-destructive";

type FormValues = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
};

function getTodayLocaleISO() {
  return new Date().toLocaleDateString("en-CA");
}

function formatDate(iso: string) {
  const [yearStr, monthStr, dayStr] = iso.split("-");
  const year = Number(yearStr ?? 0);
  const month = Number(monthStr ?? 0) - 1;
  const day = Number(dayStr ?? 0);
  const date = new Date(year, month, day);
  return date.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatTime(time24: string) {
  const [hourStr, minuteStr] = time24.split(":");
  const h = Number(hourStr ?? 0);
  const m = Number(minuteStr ?? 0);
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return `${h12}:${String(m).padStart(2, "0")} ${ampm}`;
}

function generateTimeSlots() {
  const slots: { value: string; label: string }[] = [];
  for (let h = 10; h <= 22; h++) {
    for (let m = 0; m < 60; m += 15) {
      const value = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
      slots.push({ value, label: formatTime(value) });
    }
  }
  return slots;
}

const timeSlots = generateTimeSlots();

function validate(values: FormValues, today: string) {
  const next: Partial<Record<keyof FormValues, string>> = {};

  const name = values.name.trim();
  if (!name) {
    next.name = "Please enter your name.";
  } else if (name.length > 100) {
    next.name = "Name must be less than 100 characters.";
  }

  const phone = values.phone.trim();
  if (!phone) {
    next.phone = "Please enter your phone number.";
  } else if (!/^[\d\s+()-]{7,}$/.test(phone)) {
    next.phone = "Please enter a valid phone number.";
  } else if ((phone.match(/\d/g) ?? []).length < 10) {
    next.phone = "Phone number must include at least 10 digits.";
  } else if (phone.length > 25) {
    next.phone = "Phone number is too long.";
  }

  if (!values.date) {
    next.date = "Please select a date.";
  } else if (values.date < today) {
    next.date = "Date cannot be in the past.";
  }

  if (!values.time) {
    next.time = "Please select a time.";
  }

  if (!values.guests) {
    next.guests = "Please select the number of guests.";
  }

  return next as Record<keyof FormValues, string>;
}

export function Reservation() {
  const today = useMemo(getTodayLocaleISO, []);
  const [values, setValues] = useState<FormValues>({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [open, setOpen] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof FormValues];
        return next;
      });
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values, today);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setOpen(true);
  }

  function handleConfirm() {
    const { name, phone, date, time, guests, message } = values;
    const body = [
      "Hi Brew & Bloom! I'd like to request a table reservation.",
      "",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Date: ${formatDate(date)}`,
      `Time: ${formatTime(time)}`,
      `Guests: ${guests}`,
      message.trim() ? `Special request: ${message.trim()}` : "",
      "",
      "Please let me know if the reservation can be confirmed. Thank you!",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${cafe.whatsappNumber}?text=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
    toast.success("WhatsApp opened — send the message to complete your request.");
  }

  const guestLabel = `${values.guests} ${values.guests === "1" ? "guest" : "guests"}`;

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
              <Cta href={cafe.whatsapp} target="_blank" rel="noopener noreferrer" variant="outline">
                Contact on WhatsApp
              </Cta>
              <Cta href={cafe.phoneHref} variant="outline">
                Call Us
              </Cta>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className={labelCls} htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    className={`${field} ${errors.name ? fieldError : ""}`}
                    placeholder="Aarushi T."
                  />
                  {errors.name && <p className={errorCls}>{errors.name}</p>}
                </div>
                <div>
                  <label className={labelCls} htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange}
                    aria-invalid={!!errors.phone}
                    className={`${field} ${errors.phone ? fieldError : ""}`}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <p className={errorCls}>{errors.phone}</p>}
                </div>
                <div>
                  <label className={labelCls} htmlFor="date">
                    Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    min={today}
                    value={values.date}
                    onChange={handleChange}
                    aria-invalid={!!errors.date}
                    className={`${field} ${errors.date ? fieldError : ""}`}
                  />
                  {errors.date && <p className={errorCls}>{errors.date}</p>}
                </div>
                <div>
                  <label className={labelCls} htmlFor="time">
                    Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={values.time}
                    onChange={handleChange}
                    aria-invalid={!!errors.time}
                    className={`${field} ${errors.time ? fieldError : ""}`}
                  >
                    <option value="" disabled>
                      Select a time
                    </option>
                    {timeSlots.map((slot) => (
                      <option key={slot.value} value={slot.value}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                  {errors.time && <p className={errorCls}>{errors.time}</p>}
                </div>
                <div>
                  <label className={labelCls} htmlFor="guests">
                    Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={values.guests}
                    onChange={handleChange}
                    className={field}
                  >
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
                    value={values.message}
                    onChange={handleChange}
                    className={`${field} resize-none`}
                    placeholder="Birthday cake, high chair, quiet corner…"
                  />
                </div>
              </div>
              <CtaButton type="submit" className="mt-6 w-full">
                Reserve a Table
              </CtaButton>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                We confirm every booking by phone or WhatsApp.
              </p>
            </form>
          </Reveal>
        </div>
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-all duration-300 data-[state=open]:opacity-100 data-[state=closed]:opacity-0" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-border bg-card p-6 shadow-lift transition-all duration-300 data-[state=open]:opacity-100 data-[state=closed]:opacity-0 data-[state=open]:scale-100 data-[state=closed]:scale-95 sm:p-8">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <Dialog.Title className="mt-5 text-center font-display text-2xl leading-tight">
              Reservation Request Ready
            </Dialog.Title>
            <Dialog.Description className="mt-3 text-center leading-relaxed text-muted-foreground">
              Your request for {guestLabel} at {formatTime(values.time)} on{" "}
              {formatDate(values.date)} is ready.
            </Dialog.Description>
            <p className="mt-3 text-center leading-relaxed text-muted-foreground">
              Please send the request through WhatsApp to contact Brew & Bloom. The café will
              confirm your reservation via WhatsApp.
            </p>
            <div className="mt-7 flex flex-col gap-3">
              <CtaButton onClick={handleConfirm} className="w-full">
                <MessageCircle className="h-5 w-5" />
                Continue to WhatsApp
              </CtaButton>
              <Dialog.Close asChild>
                <CtaButton variant="outline" onClick={() => setOpen(false)} className="w-full">
                  Go Back / Edit Details
                </CtaButton>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close"
                className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
