import { Logo } from "../UI/Logo/Logo";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__row">
        <div className="footer__row-logo">
          <p>Powered By</p>
          <Logo />
        </div>
        <p>Awesome Footer</p>
        <p>2024</p>
      </div>
    </div>
  );
}

export default Footer;
