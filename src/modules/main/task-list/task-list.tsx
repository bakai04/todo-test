import { FC } from "react";
import { useAppSelector } from "@/store/store";
import styles from "./task-list.module.scss";
import { Column } from "@/entities";
import { CreateColumn } from "@/entities/column/create";

export const TaskList: FC = () => {
  const columns = useAppSelector((state) => state.column);
  return (
    <div className={styles.container}>
      {
        columns.map((elem) => (
          <Column columnData={elem} key={elem.id}/>
        ))
      }
      <CreateColumn/>
    </div>
  );
};
