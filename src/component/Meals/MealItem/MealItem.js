import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import { useContext } from "react";
import { Book } from "../../../store/context";

const MealItem = (props) => {
  const { add } = useContext(Book);
  const price = `$${props.price.toFixed(2)}`;
  const addtocart = (items) => {
    add({ id: props.id, amount: items, name: props.name, price: props.price });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm addtocart={addtocart} />
      </div>
    </li>
  );
};

export default MealItem;
