import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const [cartChanged, setCartChanged] = useState(false);
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setCartChanged(true);
    const timer = setTimeout(() => {
      setCartChanged(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  const btnClasses = `${classes.button} ${cartChanged ? classes.bump : ""}`;
  const numberOfItemsInCart = cartCtx.items.reduce(
    (currNumber, item) => currNumber + item.amount,
    0
  );
  return (
    <button className={btnClasses} onClick={props.onCartButtonClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfItemsInCart}</span>
    </button>
  );
}
