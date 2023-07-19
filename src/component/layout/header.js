import { Fragment } from "react";
import React from "react";
import pic from "../../assets/meals.jpg";
import classes from "./header.module.css";
import HeaderCartButton from "./carbutton";
export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>react meal</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img alt="main_pic" src={pic}></img>
      </div>
    </Fragment>
  );
}
