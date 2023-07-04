import { useOnClickOutside } from "@/shared/lib";
import { Button, Icons } from "@/shared/ui";
import { IColumn } from "@/store/column/columnSlice";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import styles from "./column-header.module.scss";

interface ColumnHeaderProps {
  columnData: IColumn;
  tasksLength: number;
  setSearch: (value: string | ((value: string) => string)) => void;
  search: string
}

export const ColumnHeader: React.FC<ColumnHeaderProps> = ({ columnData, tasksLength, setSearch, search }) => {
  const [searchInputOpen, setSearchInputOpen] = useState(false);
  const searchRef = useRef(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const toggleInput = () => {
    setSearch("");
    setSearchInputOpen(!searchInputOpen)
  }

  useOnClickOutside(searchRef, toggleInput)
  return (
    <div className={styles.header}>
      {!searchInputOpen &&
        <p
          className={styles.title}>
          {columnData.title}
          {tasksLength && `(${tasksLength})`}
        </p>}
      {searchInputOpen &&
        <input
          value={search}
          ref={searchRef}
          onChange={handleChange}
          placeholder={"search"}
          className={styles.search_input}
        />}

      <Button type={"secondary"} className={styles.search_button} onClick={toggleInput}>
        <Icons.Search height={22} />
      </Button>
    </div>
  );
};
