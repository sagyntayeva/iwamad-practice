import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
import Button from "./ui/Button";
import TextField from "./ui/TextField";
import type { CampusEvent } from "../data/events";
import { validateSignup, type SignupValues } from "../lib/validateSignup";

type FieldName = keyof SignupValues;

type EventSignupFormProps = {
  event: CampusEvent;
};

const initialValues: SignupValues = {
  fullName: "",
  email: "",
  tickets: "1",
};

export function EventSignupForm({ event }: EventSignupFormProps) {
  const [seatsLeft, setSeatsLeft] = useState(event.seats);
  const [values, setValues] = useState<SignupValues>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [booking, setBooking] = useState<{ tickets: string; name: string } | null>(null);

  const errors = validateSignup(values, seatsLeft);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    const { name } = e.target;
    setTouched((current) => ({ ...current, [name]: true }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitAttempted(true);

    if (Object.keys(errors).length === 0) {
      const count = Number(values.tickets);
      setSeatsLeft((current) => current - count);
      setBooking({ tickets: values.tickets, name: values.fullName.trim() });
      setValues(initialValues);
      setTouched({});
      setSubmitAttempted(false);
    }
  }

  function visibleError(field: FieldName) {
    return touched[field] || submitAttempted ? errors[field] : undefined;
  }

  return (
    <div>
      <p className="text-body">Seats left: {seatsLeft}</p>

      <form className="register-form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          autoComplete="name"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError("fullName")}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError("email")}
        />
        <TextField
          label="Tickets"
          name="tickets"
          type="number"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError("tickets")}
        />

        <Button type="submit" variant="primary" className="self-start">
          Book
        </Button>
      </form>

      {booking && (
        <p className="register-success" role="status">
          Booked: {booking.tickets} for {booking.name}.
        </p>
      )}
    </div>
  );
}

export default EventSignupForm;
