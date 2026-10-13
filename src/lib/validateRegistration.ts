export type RegistrationValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};

// One message per invalid field. A valid field has no key at all.
export type RegistrationErrors = Partial<Record<keyof RegistrationValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Pure function: same values in → same errors out. No React, no DOM, easy to test.
export function validateRegistration(values: RegistrationValues): RegistrationErrors {
  const errors: RegistrationErrors = {};
  const fullName = values.fullName.trim();
  const email = values.email.trim();

  if (fullName === "") {
    errors.fullName = "Full name is required.";
  } else if (fullName.length < 2) {
    errors.fullName = "Full name must be at least 2 characters.";
  }

  if (email === "") {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (values.password === "") {
    errors.password = "Password is required.";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }

  if (values.confirmPassword === "") {
    errors.confirmPassword = "Please confirm your password.";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match.";
  }

  if (!values.acceptTerms) {
    errors.acceptTerms = "You must accept the terms.";
  }

  return errors;
}
