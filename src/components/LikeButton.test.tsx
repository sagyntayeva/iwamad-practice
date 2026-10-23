import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LikesProvider } from "../context/LikesProvider";
import LikeButton from "./LikeButton";

describe("LikeButton", () => {
  it("shows the like count and increases it after a click", async () => {
    const user = userEvent.setup();

    render(
      <LikesProvider>
        <LikeButton />
      </LikesProvider>
    );

    const button = screen.getByRole("button", { name: /like: 0/i });
    expect(button).toHaveTextContent("Like: 0");

    await user.click(button);

    expect(screen.getByRole("button", { name: /like: 1/i })).toHaveTextContent("Like: 1");
  });
});
