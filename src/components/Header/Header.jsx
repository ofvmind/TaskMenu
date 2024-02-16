import { Link } from "react-router-dom";
import { BasketIcon } from "../UI/BasketIcon/BasketIcon";
import { BurgerMenu } from "../UI/BurgerIcon/Burger";
import { PhoneIcon } from "../UI/PhoneIcon/PhoneIcon";
import "./Header.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BackButton } from "../UI/BackButton/BackButton";

export default function Header() {
    const purchase = useSelector( state => state.purchase.purchase );
    const [menuPage, setMenuPage] = useState(true);

    return (
        <div className="header">
            <BurgerMenu />
            { menuPage 
              ?  <Link to="/basket" onClick={() => setMenuPage(false)}><div className={ purchase.length ? "marker active" : "marker" }/><BasketIcon /></Link>
              :  <Link to="/" onClick={() => setMenuPage(true)}><BackButton /></Link>
            }
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">+38(097)-XXX-XX-XX</li>
                    <li className="header__nav-item"><PhoneIcon /></li>
                </ul>
            </nav>
        </div>
    );
}