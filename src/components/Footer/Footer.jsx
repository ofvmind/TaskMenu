import { Logo } from "../UI/Logo/Logo";
import { Brand } from "../UI/Restoran_Brand/Brand";
import { Footer__Brand } from "../UI/Restoran_Brand/Footer__Brand";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__row">
        <div className="footer__row-logo">
          <Footer__Brand />
        </div>
        <div className="footer__row-technology">
          <p>Powered By</p>
          <Logo />
          <span>React</span>
        </div>
        <p className="corp">MenuSTORE ltd</p>
        <p className="year">2024</p>
      </div>
    </div>
  );
}

export default Footer;
