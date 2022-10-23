import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Block from '../Block/Block';
import styles from './CurrencyConverter.module.scss';

function CurrencyConverter() {
  const lang = useSelector((state) => state.lang.language);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('RUB');
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1);
  const currency = useSelector((state) => state.currency.currency.items);

  useEffect(() => {
    if (lang === 'ru') {
      setFromCurrency('RUB');
      setToCurrency('USD');
    }
    onChangeToPrice(1);
  }, []);
  
  const onChangeFromPrice = (value) => {
    const price = value / currency[fromCurrency]
    const result = price / currency[toCurrency]
    console.log(fromCurrency, toCurrency, fromPrice, toPrice, result.toFixed(3));
    setToPrice(result.toFixed(3));
    setFromPrice(value);
  }

  const onChangeToPrice = (value) => {
    const result = (currency[fromCurrency] / currency[toCurrency]) * value;
    console.log(fromCurrency, toCurrency, fromPrice, toPrice, result.toFixed(3));
    setFromPrice(result.toFixed(3));
    setToPrice(value);
  }

  const handleFromCurrency = (cur) => {
    console.log(fromCurrency, toCurrency, fromPrice, toPrice,);
    setFromCurrency(cur);
  }

  const handleToCurrency = (cur) => {
    console.log(fromCurrency, toCurrency, fromPrice, toPrice,);
    setToCurrency(cur);
  }

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);


  return (
    <div className={styles.CurrencyConverter}>
      <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={handleFromCurrency} onChangeValue={onChangeFromPrice} />
      <Block value={toPrice} currency={toCurrency} onChangeCurrency={handleToCurrency} onChangeValue={onChangeToPrice} />
    </div>
  )
}

export default CurrencyConverter;