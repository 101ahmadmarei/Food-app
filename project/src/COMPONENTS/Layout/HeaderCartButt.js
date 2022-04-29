import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButt.module.css";
import { useContext, useState, useEffect } from "react";
import CartContext from "../Store/cart-context";
const HeaderCartButt = (props) => {
  const [btnHeightLighted, setBtnHeightLighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItem = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${
    btnHeightLighted ? classes.bump : ""
  }`;
  const { items } = cartCtx;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnHeightLighted(true);
    const timer = setTimeout(() => {
      setBtnHeightLighted(false);
      return clearTimeout(timer);
    }, 300);
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButt;
