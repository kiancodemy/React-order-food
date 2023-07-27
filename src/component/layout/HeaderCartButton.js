import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useState, useEffect } from "react";
import { Book } from "../../store/context";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const [buttonn, setbutton] = useState(false);
  const btnclass = `${classes.button} ${buttonn ? classes.bump : " "}`;
  const { items } = useContext(Book);
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbutton(true);
  }, [items]);
  return (
    <button
      onClick={() => {
        props.onshow();
      }}
      className={btnclass}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
