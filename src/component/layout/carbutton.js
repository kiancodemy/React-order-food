import CartIcon from "../../card/card";
import classes from "./cardbutton.module.css";

const HeaderCartButton = (props) => {
  
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
