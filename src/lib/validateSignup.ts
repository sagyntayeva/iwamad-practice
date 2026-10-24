export type SignupValues = {
  fullName: string;
  email: string;
  tickets: string;
};

export type SignupErrors = Partial<Record<keyof SignupValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateSignup(values: SignupValues, seatsLeft: number): SignupErrors {
  const errors: SignupErrors = {};
  const fullName = values.fullName.trim();
  const email = values.email.trim();
  const tickets = Number(values.tickets);

  if (fullName.length < 2) {
    errors.fullName = "Enter your full name";
  }

  if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Enter a valid email, like name@example.com";
  }

  if (!Number.isInteger(tickets) || tickets < 1 || tickets > 4) {
    errors.tickets = "Choose 1 to 4 tickets";
  } else if (tickets > seatsLeft) {
    errors.tickets = `Only ${seatsLeft} seats left`;
  }

  return errors;
}
