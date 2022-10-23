import './index.scss';

import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import Layout from './components/Layout';
import Converter from "./pages/Converter";
import Home from "./pages/Home";

import { useDispatch } from 'react-redux';
import { changeLang } from './store/slices/lang';
import { fetchCurrency } from './store/slices/currency';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let language = window.navigator ? (window.navigator.language ||
      window.navigator.systemLanguage ||
      window.navigator.userLanguage) : "ru";
    language = language.substr(0, 2).toLowerCase();
    dispatch(changeLang(language));
    
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await dispatch(fetchCurrency()).unwrap();
      return data;
    };

    fetchData().catch(console.error);
  }, []);
  

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/converter" element={<Converter />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
