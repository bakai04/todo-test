import { useAppDispatch } from "@/store/store";
import { changeTaskStatus, ITask, TaskStates } from "@/store/tasksSlice";
import React, { DragEvent, useMemo } from "react";
import { Task } from "../task";
import styles from "./column.module.scss";

interface ColumnProps {
  name: string;
  tasks: ITask[];
  columnName: TaskStates;
}

export const Column: React.FC<ColumnProps> = ({ name, tasks, columnName }) => {
  const dispatch = useAppDispatch();
  const filteredTasks: ITask[] = useMemo(() => {
    return tasks.filter((task: ITask) => task.status === columnName);
  }, [tasks, columnName]);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    const dropedTask = JSON.parse(e.dataTransfer.getData('application/json'));
    dispatch(changeTaskStatus({ id: dropedTask.id, nextColumn: columnName }));
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={styles.content}
    >
      <div className={styles.content__block}>
        <p className={styles.title}>{name}</p>
        <p className={styles.number}>{filteredTasks.length}</p>
      </div>
      {filteredTasks.map((task: ITask) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
