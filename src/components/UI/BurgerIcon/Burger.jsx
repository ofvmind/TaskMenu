import icon from "../../../images/icons/burger2.png";
import "./Burger.css";

export const BurgerMenu = (props) => {
    return <img {...props} src={icon} alt="image not found" className="burger" />
};