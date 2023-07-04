import { Task } from "@/entities/task";
import { ITask } from "@/store/task/tasksSlice";
import React, { useState } from "react";
import styles from "./column-content.module.scss";

interface ColumnContentProps {
  tasks: ITask[]
}

export const ColumnContent: React.FC<ColumnContentProps> = ({ tasks }) => {
  return (
    <div className={styles.wrapper}>
      {
        tasks?.map((task: ITask) => (
          <Task key={task.id} task={task} />
        ))
      }
    </div>
  );
};
