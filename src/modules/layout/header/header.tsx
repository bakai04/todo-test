import React, { useState } from "react";
import styles from "./header.module.scss";

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.logo}>Logo</h1>
    </div>
  );
};
