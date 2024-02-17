import { Logo } from "../UI/Logo/Logo";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__row">
        <p>Awesome Footer</p>
        <p>2024</p>
        <div className="footer__row-logo">
          <p>Powered By</p>
          <Logo />
        </div>
      </div>
    </div>
  );
}

export default Footer;
