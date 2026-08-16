import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-[3px] px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  solid:
    "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:bg-clay hover:shadow-lift",
  outline:
    "border border-border bg-transparent text-foreground hover:-translate-y-0.5 hover:border-primary hover:text-primary",
  ghost: "text-foreground/80 hover:text-primary",
};

export function Cta({
  variant = "solid",
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return <a {...props} className={cn(base, variants[variant], className)} />;
}

export function CtaButton({
  variant = "solid",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button {...props} className={cn(base, variants[variant], className)} />;
}