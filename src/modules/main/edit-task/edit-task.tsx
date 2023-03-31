import React, { useState } from "react";
import { addTask, editTask, ITask } from "@/store/tasksSlice";
import styles from "./edit-task.module.scss";
import { useAppDispatch } from "@/store/store";

interface IEditFormProps {
  onClose: () => void;
  task: ITask;
}
const EditForm: React.FC<IEditFormProps> = ({ onClose, task }) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>(task.title);
  const [description, setDescription] = useState<string>(task.description);
  const [error, setError] = useState<boolean>(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target.value.trim() === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (title.trim() !== "" && description.trim() !== "") {
      dispatch(
        editTask({
          title: title.trim(),
          description: description.trim(),
          id: task.id,
        })
      );
      setTitle("");
      setDescription("");
      onClose();
    } else {
      setError(true);
    }
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
      </div>
      {error && title.trim() === "" && (
        <p className={styles.error}>Please enter a title.</p>
      )}
      <div className={styles.form_description}>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          placeholder="Enter a task description"
          value={description}
          onChange={handleDescriptionChange}
          onBlur={handleBlur}
        />
      </div>
      {error && description.trim() === "" && (
        <p className={styles.error}>Please enter a description.</p>
      )}
      <div className={styles.buttons}>
        <button type="submit">Add Task</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditForm;
