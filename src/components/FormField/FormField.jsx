import { useId } from 'react';
import './FormField.css';

export default function FormField({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  helperText,
  required = false,
  disabled = false,
}) {
  const id = useId();

  return (
    <div className="field">
      <label htmlFor={id} className="field__label">
        {label}
        {required && <span className="field__required" aria-hidden="true"> *</span>}
      </label>

      <input
        id={id}
        type={type}
        className={`field__input ${error ? 'field__input--error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
      />

      {error && (
        <p id={`${id}-error`} className="field__message field__message--error" role="alert">
          {error}
        </p>
      )}

      {!error && helperText && (
        <p id={`${id}-helper`} className="field__message field__message--helper">
          {helperText}
        </p>
      )}
    </div>
  );
}