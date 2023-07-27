import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import { Book } from "../../store/context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { items, totalamout } = useContext(Book);
  const total = `$${totalamout.toFixed(2)}`;
  const hasitem = items.length > 0;
  const { add } = useContext(Book);
  const onRemove = () => {};
  const onAdd = (item) => {
    add({ ...item, amount: 1 });
  };

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={onRemove}
          onAdd={onAdd.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal close={props.close}>
      {cartItem}
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
