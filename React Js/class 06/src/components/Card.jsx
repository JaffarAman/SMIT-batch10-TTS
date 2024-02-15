import react from "react";
import styles from "./Card.module.css";

const Card = ({ imgSrc, price, desc, redBg, bgColor = "white" }) => {
  console.log("redBg", redBg);
  return (
    <div
      //   className={redBg ? styles.productCardWrapper2 : styles.productCardWrapper}
      style={{
        background: bgColor,
      }}
    >
      <img
        // className={styles.productImage}
        width={200}
        height={200}
        src={imgSrc}
        alt=""
      />
      <h1 className={styles.productPrice}>PRICE: {price}$ </h1>
      <h1>DESC:{desc} </h1>
    </div>
  );
};

export default Card;
