import { FC } from "react";
import { Column, Task } from "@/entities";
import { useAppSelector } from "@/store/store";
import styles from "./task-list.module.scss";
import { IColumn, TaskStates } from "@/store/tasksSlice";





export const TaskList: FC = () => {
  const tasks = useAppSelector((state) => state.tasks);
  return (
    <div className={styles.container}>
      {
        columns.map((elem) => (
          <Column name={elem.title} key={elem.id} columnName={elem.id} tasks={tasks} />
        ))
      }
    </div>
  );
};
