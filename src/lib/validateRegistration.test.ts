import { describe, expect, it } from "vitest";
import { validateRegistration, type RegistrationValues } from "./validateRegistration";

const valid: RegistrationValues = {
  fullName: "Ranida Sagyntayeva",
  email: "ranida@example.com",
  password: "secret123",
  confirmPassword: "secret123",
  acceptTerms: true,
};

describe("validateRegistration", () => {
  it("returns no errors for valid values", () => {
    expect(validateRegistration(valid)).toEqual({});
  });

  it("requires a full name", () => {
    expect(validateRegistration({ ...valid, fullName: "   " })).toEqual({
      fullName: "Full name is required.",
    });
  });

  it("rejects a full name shorter than 2 characters", () => {
    expect(validateRegistration({ ...valid, fullName: "R" })).toEqual({
      fullName: "Full name must be at least 2 characters.",
    });
  });

  it("requires an email", () => {
    expect(validateRegistration({ ...valid, email: "" })).toEqual({
      email: "Email is required.",
    });
  });

  it("rejects an email without @ and domain", () => {
    expect(validateRegistration({ ...valid, email: "ranida.example.com" })).toEqual({
      email: "Enter a valid email address.",
    });
  });

  it("rejects a password shorter than 8 characters", () => {
    expect(
      validateRegistration({ ...valid, password: "short1", confirmPassword: "short1" })
    ).toEqual({
      password: "Password must be at least 8 characters.",
    });
  });

  it("rejects a confirm password that does not match", () => {
    expect(validateRegistration({ ...valid, confirmPassword: "secret124" })).toEqual({
      confirmPassword: "Passwords do not match.",
    });
  });

  it("requires the terms to be accepted", () => {
    expect(validateRegistration({ ...valid, acceptTerms: false })).toEqual({
      acceptTerms: "You must accept the terms.",
    });
  });
});
