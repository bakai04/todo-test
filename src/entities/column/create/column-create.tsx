import { ColumnForm } from "@/features/create-column";
import { Icons, Modal } from "@/shared/ui";
import React, { useState } from "react";
import styles from "./column-create.module.scss";

interface CreateColumnProps {
}

export const CreateColumn: React.FC<CreateColumnProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className={styles.create_column} onClick={onToggleModal}>
        <Icons.Plus />
        <span>Добавить ещё одну колонку</span>
      </div>
      {
        isOpen &&
        <Modal onClose={onToggleModal}>
          <ColumnForm onClose={onToggleModal}/>
        </Modal>
      }
    </>
  );
};
