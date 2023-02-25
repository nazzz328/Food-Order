import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

export default function MealItemForm(props) {
  const cartAmountRef = useRef();
  const [amountisValid, setAmountisValid] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
    const cartAmount = +cartAmountRef.current.value;
    if (cartAmount < 1 || cartAmount > 5) {
      setAmountisValid(false);
      return;
    }
    props.onAddToCart(cartAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={cartAmountRef}
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
      {!amountisValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
}
