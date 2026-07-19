import './Footer.css';

export default function Footer({ orgName = 'Northstar Learning Collective', links = [], year = new Date().getFullYear() }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <span className="footer__org">{orgName}</span>
          <ul className="footer__links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="footer__link">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">© {year} {orgName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}