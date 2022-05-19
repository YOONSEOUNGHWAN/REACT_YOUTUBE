import React, { useRef } from "react";

import styles from "./searchbar.module.css";

// 대문자 작성 안 하면 hook 못 쓴다~ 명심하자
export default function Searchbar({ onSearch }) {
  const inputRef = useRef();

  const handleInput = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleInput();
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleInput();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
}
