import React from "react";

interface IButtonProps {
  label: string | null;
  color: string;
  borderColor: string;
  onClick: () => void;
}

export const Button = ({
  label,
  color,
  borderColor,
  onClick,
}: IButtonProps) => {
  return (
    <button
      style={{
        color: color,
        border: `2px solid ${borderColor}`,
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
