import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import TextField from "../components/ui/TextField";
import {
  validateRegistration,
  type RegistrationValues,
} from "../lib/validateRegistration";

type FieldName = keyof RegistrationValues;

const initialValues: RegistrationValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

function RegisterPage() {
  // All five controlled inputs live in one state object.
  const [values, setValues] = useState<RegistrationValues>(initialValues);
  // Fields the user has already left (blur).
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  // Becomes true after the first submit attempt.
  const [submitted, setSubmitted] = useState(false);
  const [registeredName, setRegisteredName] = useState<string | null>(null);

  const errors = validateRegistration(values);

  // One handler for every input: the input's name says which key to update.
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
    setRegisteredName(null);
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    if (Object.keys(errors).length === 0) {
      setRegisteredName(values.fullName.trim());
    }
  }

  // A field shows its error once the user has left it or has tried to submit.
  function visibleError(field: FieldName) {
    return touched[field] || submitted ? errors[field] : undefined;
  }

  const termsError = visibleError("acceptTerms");

  return (
    <Card className="max-w-md mx-auto w-full">
      <h2 className="page-title">Register</h2>

      <form className="register-form" noValidate onSubmit={handleSubmit}>
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
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError("password")}
        />
        <TextField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError("confirmPassword")}
        />

        <div className="checkbox-field">
          <div className="checkbox-field__row">
            <input
              id="field-acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={values.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(termsError)}
              aria-describedby={termsError ? "field-acceptTerms-error" : undefined}
            />
            <label htmlFor="field-acceptTerms">I accept the terms and conditions</label>
          </div>
          {termsError && (
            <p id="field-acceptTerms-error" className="text-field__error">
              {termsError}
            </p>
          )}
        </div>

        <Button type="submit" variant="primary" className="self-start">
          Register
        </Button>
      </form>

      {/* The live region is always in the DOM so screen readers announce the change */}
      <p className="register-success" role="status">
        {registeredName ? `Thanks, ${registeredName}. You are registered.` : ""}
      </p>
    </Card>
  );
}

export default RegisterPage;
