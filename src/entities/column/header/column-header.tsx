import { Button, Icons } from "@/shared/ui";
import { IColumn } from "@/store/columnSlice";
import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./column-header.module.scss";

interface ColumnHeaderProps {
  columnData: IColumn;
  tasksLength: number;
  setSearch: (value: string | ((value: string) => string)) => void;
  search: string
}

export const ColumnHeader: React.FC<ColumnHeaderProps> = ({ columnData, tasksLength, setSearch, search }) => {
  const [searchInputOpen, setSearchInputOpen] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  return (
    <div className={styles.header}>
      {!searchInputOpen && <p className={styles.title}>
        {columnData.title}
        {tasksLength && `(${tasksLength})`}
      </p>}
      {searchInputOpen && <input className={styles.search_input} value={search} onChange={handleChange} placeholder={"search"} />}

      <Button type={"secondary"} className={styles.search_button} onClick={() => setSearchInputOpen(!searchInputOpen)}>
        <Icons.Search height={22} />
      </Button>

    </div>
  );
};
