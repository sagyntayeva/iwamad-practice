import type { InputHTMLAttributes } from "react";
import "./TextField.css";

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "name"> & {
  label: string;
  name: string;
  error?: string;
};

// Label + input + error message. The input points at its message with
// aria-describedby and says it is invalid with aria-invalid.
function TextField({ label, name, error, type = "text", ...rest }: TextFieldProps) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;

  return (
    <div className="text-field">
      <label htmlFor={id} className="text-field__label">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className="text-field__input"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      {error && (
        <p id={errorId} className="text-field__error">
          {error}
        </p>
      )}
    </div>
  );
}

export default TextField;
