import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { events } from "../data/events";
import EventsPage from "./EventsPage";

describe("EventsPage", () => {
  it("renders one card per event", () => {
    render(
      <MemoryRouter>
        <EventsPage />
      </MemoryRouter>
    );

    expect(screen.getAllByRole("article")).toHaveLength(events.length);
  });
});
