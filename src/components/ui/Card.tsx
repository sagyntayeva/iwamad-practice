import type { ReactNode } from "react";
import "./Card.css";

type CardProps = {
  as?: "section" | "article" | "div";
  className?: string;
  children: ReactNode;
};

// Figma component "PostCard": vertical auto layout card.
function Card({ as: Tag = "section", className, children }: CardProps) {
  const classes = ["ui-card", className].filter(Boolean).join(" ");
  return <Tag className={classes}>{children}</Tag>;
}

export default Card;
