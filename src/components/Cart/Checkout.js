import React from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefualt();
  };
  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <lable htmlFor="name">Your Name</lable>
        <input type="text" id="name"></input>
      </div>
      <div className={classes.control}>
        <lable htmlFor="street">Street</lable>
        <input type="text" id="street"></input>
      </div>
      <div className={classes.control}>
        <lable htmlFor="postal">Postal Code</lable>
        <input type="text" id="postal"></input>
      </div>
      <div className={classes.control}>
        <lable htmlFor="city">City</lable>
        <input type="text" id="city"></input>
      </div>
      <button>Confirm</button>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default Checkout;
