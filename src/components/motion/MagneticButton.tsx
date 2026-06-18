import { createElement, type ElementType, type ReactNode } from "react";
import { cn } from "../../lib/cn";
import { useMagnetic } from "../../hooks/useMagnetic";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  variant?: "solid" | "ghost";
  to?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export function MagneticButton({ as = "button", children, className, variant = "solid", ...props }: Props) {
  const Component = as as ElementType;
  const magnetic = useMagnetic<HTMLElement>();
  return createElement(
    Component,
    {
      ref: magnetic.ref as any,
      onMouseMove: magnetic.onMouseMove as any,
      onMouseLeave: magnetic.onMouseLeave as any,
      className: cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] transition duration-300",
        variant === "solid" ? "bg-[var(--accent)] text-black shadow-glow hover:scale-[1.02]" : "border border-[var(--line)] text-[var(--ink)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]",
        className,
      ),
      ...props,
    },
    children,
  );
}
