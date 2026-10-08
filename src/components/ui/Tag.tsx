import type { ReactNode } from "react";
import "./Tag.css";

type TagProps = {
  children: ReactNode;
};

// Figma component "Tag": pill with a 1px border.
function Tag({ children }: TagProps) {
  return <span className="ui-tag">{children}</span>;
}

export default Tag;
