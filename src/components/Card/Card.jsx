import './Card.css';

export default function Card({
  title,
  description,
  imageUrl,
  imageAlt = '',
  footer,
  onClick,
}) {
  const isInteractive = !!onClick;

  return (
    <div
      className={`card ${isInteractive ? 'card--interactive' : ''}`}
      onClick={onClick}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onKeyDown={
        isInteractive
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {imageUrl && (
        <img className="card__image" src={imageUrl} alt={imageAlt} />
      )}

      <div className="card__body">
        {title && <h3 className="card__title">{title}</h3>}
        {description && <p className="card__description">{description}</p>}
      </div>

      {footer && <div className="card__footer">{footer}</div>}
    </div>
  );
}