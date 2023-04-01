import React, { CSSProperties } from "react";
import cx from "classnames";
import styles from "./button.module.scss";

interface IButtonProps {
  children: React.ReactNode
  style?: CSSProperties;
  className?: string
  variant?: "outlined" | "fulfilled",
  type?: "primary" | "secondary" | "error"
  onClick: () => void;
}

export const Button = (props: IButtonProps) => {
  return (
    <button
      style={props.style}
      onClick={props.onClick}
      className={cx(
        styles.button,
        props.type === "primary" && styles.primary,
        props.type === "secondary" && styles.secondary,
        props.type === "error" && styles.error,
        props.className,
      )}
    >
      {props.children}
    </button>
  );
};
