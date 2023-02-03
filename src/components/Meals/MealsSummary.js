import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered to You</h2>
      <p>
        Choose your favorite meal from our broad selection of available Meals
        and enjoy a delicious Food at home.
      </p>
      <p>
        All our meals aaare cooked with high-quality ingredients, just-in-time
        and of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
