import React, { useState, FC, FormEvent, FocusEvent } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "@/store/tasksSlice";
import { toast } from "react-toastify";

import styles from "./create-task.module.scss";

interface Props {
  onClose: () => void;
}

export const TaskForm: FC<Props> = ({ onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (title.trim() && description.trim()) {
      dispatch(
        addTask({
          title: title.trim(),
          description: description.trim(),
        })
      );

      setTitle("");
      setDescription("");

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

      <div className={styles.form_description}>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          placeholder="Enter a task description"
          value={description}
          onChange={handleDescriptionChange}
          onBlur={handleBlur}
        />
        {error && !description.trim() && (
          <p className={styles.error}>Please enter a description.</p>
        )}
      </div>

      <div className={styles.buttons}>
        <button type="submit">Add Task</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};
