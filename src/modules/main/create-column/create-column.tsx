import React, { useState, FC, FormEvent, FocusEvent } from "react";
import { toast } from "react-toastify";

import styles from "./create-column.module.scss";
import { useAppDispatch } from "@/store/store";
import { createColumn } from "@/store/columnSlice";

interface Props {
  onClose: () => void;
}

export const ColumnForm: FC<Props> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title.trim()) {
      dispatch(
        createColumn({
          title: title.trim(),
        })
      );
      setTitle("");
      toast("Task created successfully!");
      onClose();
    } else {
      setError(true);
    }
  };

  const handleBlur = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setError(!event.target.value.trim());
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.form_title}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Enter a task title"
          value={title}
          onChange={handleTitleChange}
          onBlur={handleBlur}
        />
        {error && !title.trim() && (
          <p className={styles.error}>Please enter a title.</p>
        )}
      </div>

      <div className={styles.buttons}>
        <button type="submit">Create Column</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};
