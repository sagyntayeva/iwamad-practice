import { describe, expect, it } from "vitest";
import { validateSignup, type SignupValues } from "./validateSignup";

const valid: SignupValues = {
  fullName: "Aliya Nurlanovna",
  email: "aliya@example.com",
  tickets: "2",
};

describe("validateSignup", () => {
  it("returns no errors when everything is valid", () => {
    expect(validateSignup(valid, 10)).toEqual({});
  });

  it("rejects 0 tickets", () => {
    expect(validateSignup({ ...valid, tickets: "0" }, 10)).toEqual({
      tickets: "Choose 1 to 4 tickets",
    });
  });

  it("rejects more than 4 tickets", () => {
    expect(validateSignup({ ...valid, tickets: "5" }, 10)).toEqual({
      tickets: "Choose 1 to 4 tickets",
    });
  });

  it("rejects non-integer tickets", () => {
    expect(validateSignup({ ...valid, tickets: "1.5" }, 10)).toEqual({
      tickets: "Choose 1 to 4 tickets",
    });
  });

  it("accepts 4 tickets when enough seats are left", () => {
    expect(validateSignup({ ...valid, tickets: "4" }, 10)).toEqual({});
  });

  it("rejects tickets when asking for more than seatsLeft", () => {
    expect(validateSignup({ ...valid, tickets: "3" }, 2)).toEqual({
      tickets: "Only 2 seats left",
    });
  });
});
