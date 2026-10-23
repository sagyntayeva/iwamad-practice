import { createContext } from "react";

export type LikesContextValue = {
  likes: number;
  addLike: () => void;
};

export const LikesContext = createContext<LikesContextValue | undefined>(undefined);
