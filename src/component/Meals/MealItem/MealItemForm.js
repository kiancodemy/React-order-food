import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef } from "react";
import { useState } from "react";

const MealItemForm = (props) => {
  const [valid, setvalid] = useState(true);
  const mealref = useRef();
  const submitform = (e) => {
    e.preventDefault();
    const amountnumber = Number(mealref.current.value);
    console.log(amountnumber);
    if (amountnumber < 1 || amountnumber > 5) {
      setvalid(false);
      return;
    }
    props.addtocart(amountnumber);
  };
  return (
    <form className={classes.form} onSubmit={submitform}>
      <Input
        ref={mealref}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!valid && <p>enter a valid number</p>}
    </form>
  );
};

export default MealItemForm;
