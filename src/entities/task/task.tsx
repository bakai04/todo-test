import React, { DragEvent, useMemo, useState } from "react";
import EditForm from "@/modules/main/edit-task/edit-task";

import { Button, Modal } from "@/shared/ui";
import { useAppDispatch } from "@/store/store";
import { changeTaskStatus, deleteTask, ITask } from "@/store/tasksSlice";
import styles from "./task.module.scss";
import { getTaskStatusStyles } from "@/shared/lib";

interface TaskProps {
  task: ITask;
}

export const Task: React.FC<TaskProps> = ({ task }) => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTask(task));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const dropedTask = JSON.parse(e.dataTransfer.getData('application/json'));
  }

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('application/json', JSON.stringify(task));
  }

  return (
    <div
      draggable={true}
      className={styles.container}
      onDragStart={handleDragStart}
      onDrop={handleDrop}
    >
      <span className={styles.title}>{task.title}</span>
      <div className={styles.buttons}>
        <Button type="secondary" onClick={handleDelete}>Удалить</Button>
        <Button type="secondary" onClick={toggleModal}>Edit</Button>
      </div>
      {isModalOpen && task && (
        <Modal onClose={toggleModal}>
          <EditForm onClose={toggleModal} task={task} />
        </Modal>
      )}
    </div>
  );
};

export default Task;
