import type { ButtonHTMLAttributes } from "react";
import "./Button.css";

// Figma component set "Button" → property `variant` = Primary | Secondary (default: Secondary).
export type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

function Button({ variant = "secondary", type = "button", className, ...rest }: ButtonProps) {
  const classes = ["ui-button", `ui-button--${variant}`, className].filter(Boolean).join(" ");
  return <button type={type} className={classes} {...rest} />;
}

export default Button;
