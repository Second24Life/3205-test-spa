import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./CurrencyList.module.scss";

function CurrencyList() {
  const lang = useSelector((state) => state.lang.language);
  const currency = useSelector((state) => state.currency.currency.items);
  const [currentCurrency, setCurrentCurrency] = useState("USD");

  useEffect(() => {
    if (lang === "ru") {
      setCurrentCurrency("RUB");
    }
  }, []);

  return (
    <div className={styles.CurrencyList}>
      <div className={styles.CurrencyList_wrapper}>
        <h2 className={styles.CurrencyList_current}>
          {`Current currency ${currentCurrency}`}
        </h2>
        {Object.keys(currency).length > 0 &&
          Object.keys(currency).map((cur, index) => (
            <div className={styles.CurrencyList_item} key={index}>
              <span>{cur}</span>
              <span>
                {(currency[currentCurrency] / currency[cur]).toFixed(3)}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CurrencyList;
