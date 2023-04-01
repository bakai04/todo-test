import { TaskForm } from "@/modules/main/create-task";
import { Button, Modal } from "@/shared/ui";
import { IColumn } from "@/store/columnSlice";
import React, { useState } from "react";
import styles from "./column-footer.module.scss";

interface ColumnFooterProps {
  columnData: IColumn;
}

export const ColumnFooter: React.FC<ColumnFooterProps> = ({ columnData }) => {
  const [isOpenTaskModal, setIsOpenTaskModal] = useState<boolean>(false);
  
  const toggleTaskModal = () => {
    setIsOpenTaskModal(!isOpenTaskModal);
  };

  return (
    <>
      <div className={styles.column_footer}>
        <Button onClick={toggleTaskModal} type={"secondary"} className={styles.button}>
          Добавить карточку
        </Button>
      </div>
      {isOpenTaskModal && (
        <Modal onClose={toggleTaskModal}>
          <TaskForm column={columnData} onClose={toggleTaskModal} />
        </Modal>
      )}
    </>
  );
};