import classes from "./Logo.module.css";
import logo from "../../../images/logo/react.svg";

export const Logo = () => {
  return <img className={classes.logo} src={logo} alt="image not found" />
};