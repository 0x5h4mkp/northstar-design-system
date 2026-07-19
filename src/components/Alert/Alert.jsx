import './Alert.css';

const ICONS = {
  success: '✓',
  error: '✕',
  info: 'ℹ',
};

export default function Alert({
  variant = 'info',   // success | error | info
  title,
  children,
  onDismiss,
}) {
  return (
    <div
      className={`alert alert--${variant}`}
      role={variant === 'error' ? 'alert' : 'status'}
    >
      <span className="alert__icon" aria-hidden="true">{ICONS[variant]}</span>

      <div className="alert__content">
        {title && <p className="alert__title">{title}</p>}
        <p className="alert__message">{children}</p>
      </div>

      {onDismiss && (
        <button
          type="button"
          className="alert__dismiss"
          onClick={onDismiss}
          aria-label="Dismiss alert"
        >
          ✕
        </button>
      )}
    </div>
  );
}