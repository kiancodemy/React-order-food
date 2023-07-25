import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import { Book } from "../../store/context";

const Cart = (props) => {
  const { items, totalamout } = useContext(Book);
  const total = `$${totalamout.toFixed(2)}`;
  const hasitem = items.length > 0;
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((a) => (
        <li key={a.name}>{a.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal close={props.close}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{total}</span>
      </div>
      <div className={classes.actions}>
        <button
          onClick={() => {
            props.close();
          }}
          className={classes["button--alt"]}
        >
          Close
        </button>
        {hasitem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
