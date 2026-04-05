import type { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import "./Button.css";

type Variant = "primary" | "secondary" | "danger" | "info" | "ghost";
type Size = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  asChild = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const classes = ["btn", `btn--${variant}`, `btn--${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Comp className={classes} {...props}>
      {children}
    </Comp>
  );
}
