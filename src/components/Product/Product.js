import React, { useEffect } from "react";
import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";

const Product = ({ product, onChange, onDecrement, onIncrement, onDelete }) => {
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className={styles.product}>
      <p>product name : {product.title}</p>
      <p>product price : {product.price}</p>
      <p>product discout : {product.discout}</p>
      <span className={styles.quantity}>{product.quantity}</span>
      <input
        className={styles.input}
        type="text"
        onChange={onChange}
        value={product.title}
      />
      <button
        className={`${styles.button} ${styles.dec} ${
          product.quantity === 1 && styles.remove
        }`}
        onClick={onDecrement}
      >
        {product.quantity > 1 ? "- " : <BiTrash />}
      </button>

      <button
        className={`${styles.button} ${styles.inc}`}
        onClick={onIncrement}
      >
        +
      </button>

      <button className={`${styles.button} ${styles.del}`} onClick={onDelete}>
        delete
      </button>
    </div>
  );
};

export default Product;