import React, { useState } from "react";
import styles from "./header.module.scss";
import { Modal } from "@/shared/ui";
import { TaskForm } from "@/modules/main/create-task";

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleTaskModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <h1 className={styles.logo}>Logo</h1>
        <button className={styles.button} onClick={toggleTaskModal}>
          Создать
        </button>
      </div>
      {isOpen && (
        <Modal onClose={toggleTaskModal}>
          <TaskForm onClose={toggleTaskModal} />
        </Modal>
      )}
    </React.Fragment>
  );
};
