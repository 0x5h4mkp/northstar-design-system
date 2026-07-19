import './Button.css';

export default function Button({
  children,
  variant = 'primary',    // primary | secondary | ghost
  size = 'md',             // sm | md | lg
  disabled = false,
  type = 'button',
  onClick,
}) {
  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}