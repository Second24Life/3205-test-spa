import React from "react";
import styles from "./Block.module.scss";

const defaultCurrencies = ["RUB", "USD", "EUR"];

function Block({ value, currency, onChangeValue, onChangeCurrency }) {
  return (
    <div className={styles.Block}>
      <ul className={styles.Block_currencies}>
        {defaultCurrencies.map((cur) => (
          <li
            onClick={() => onChangeCurrency(cur)}
            className={currency === cur ? styles.Block_currencies_active : ""}
            key={cur}>
            {cur}
          </li>
        ))}
      </ul>
      <input
        onChange={(e) => onChangeValue(e.target.value)}
        value={value}
        type="number"
        placeholder={0}
      />
    </div>
  );
}

export default Block;
