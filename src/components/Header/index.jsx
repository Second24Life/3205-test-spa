import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.Header_title}>
        <h1>For 3205</h1>
      </div>
      <nav className={styles.Header_nav}>
        <Link to={"/"} className={styles.Header_nav_item}>Home</Link>
        <Link to={"/converter"} className={styles.Header_nav_item}>Converter</Link>
      </nav>
    </header>
  );
}

export default Header;
