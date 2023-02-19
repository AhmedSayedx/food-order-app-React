import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/Cart-context";

const HeaderCartButton = (props) => {
  const [btnhighlighted, setbtnhighlighted] = useState(false);
  const cartCTX = useContext(CartContext);
  const numberOfCartItems = cartCTX.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnhighlighted ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCTX.items.length === 0) {
      return;
    }
    setbtnhighlighted(true);
    const timer = setTimeout(() => {
      setbtnhighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCTX.items]);

  return (
    <button className={btnClasses} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
