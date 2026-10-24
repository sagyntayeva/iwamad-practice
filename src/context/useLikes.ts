import { useContext } from "react";
import { LikesContext, type LikesContextValue } from "./LikesContext";

export function useLikes(): LikesContextValue {
  const context = useContext(LikesContext);
  if (context === undefined) {
    throw new Error("useLikes must be used inside a <LikesProvider>");
  }
  return context;
}
