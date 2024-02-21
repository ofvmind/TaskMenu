import { Link } from "react-router-dom";
import { BasketIcon } from "../UI/BasketIcon/BasketIcon";
import { BurgerMenu } from "../UI/BurgerIcon/Burger";
import { PhoneIcon } from "../UI/PhoneIcon/PhoneIcon";
import "./Header.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BackButton } from "../UI/BackButton/BackButton";
import { Modal } from "../UI/Modal/Modal";
import { BasketWindow } from "../Basket_Components/BasketWiindow";
import { Brand } from "../UI/Restoran_Brand/Brand";

export default function Header() {
  const purchase = useSelector((state) => state.purchase.purchase);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  return (
    <div className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <BurgerMenu />
          </li>
          <li className="header__nav-item">
            <p>+38 (097)-XXX-XX-XX</p>
          </li>
          <li className="header__nav-item">
            <a href="tel: +38(097)-XXX-XX-XX"><PhoneIcon /></a>
          </li>
        </ul>
      </nav>
      <Brand />
      <div
        onClick={() => setIsBasketOpen(true)}
        className={purchase.length ? "basket__div active" : "basket__div"}
      >
        <div className={purchase.length ? "marker active" : "marker"} />
        <BasketIcon />
      </div>
      <Modal visible={isBasketOpen} setVisible={setIsBasketOpen}>
        <BasketWindow />
      </Modal>
    </div>
  );
}
