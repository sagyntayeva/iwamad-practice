import { useState, type ReactNode } from "react";
import { LikesContext } from "./LikesContext";

type LikesProviderProps = {
  children: ReactNode;
};

export function LikesProvider({ children }: LikesProviderProps) {
  const [likes, setLikes] = useState(0);

  const addLike = () => setLikes((current) => current + 1);

  return <LikesContext value={{ likes, addLike }}>{children}</LikesContext>;
}
