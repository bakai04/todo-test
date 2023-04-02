import React, { useState } from "react";
import { editTask, ITask } from "@/store/tasksSlice";
import styles from "./edit-task.module.scss";
import { useAppDispatch } from "@/store/store";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

interface IEditFormProps {
  onClose: () => void;
  task: ITask;
}

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Обязательное поле").max(100, "Название не должно превышать 100 символов"),
  description: Yup.string().required("Обязательное поле")
})

const EditForm: React.FC<IEditFormProps> = ({ onClose, task }) => {
  const dispatch = useAppDispatch();

  const handleSubmit = (values: Omit<ITask, "id" | "createdAt" | "status">, resetForm: () => void) => {
    dispatch(
      editTask({
        ...task,
        ...values
      })
    );
    onClose();
    resetForm();
    toast.success("You successfully changed task")
  };

  return (
    <Formik
      initialValues={{
        title: task.title || "",
        description: task.description || "",
      }}
      validateOnBlur
      validateOnChange
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values, resetForm);
      }}
    >
      {() => (
        <Form className={styles.form}>
          <div className={styles.form_title}>
            <label htmlFor="title">Title:</label>
            <Field name="title" placeholder="Enter a task title" />
            <ErrorMessage name="title" className={styles.error} component={"p"} />
          </div>

          <div className={styles.form_description}>
            <label htmlFor="description">Description:</label>
            <Field as="textarea" placeholder="Enter a task description" name="description" />
            <ErrorMessage name="description" className={styles.error} component={"p"} />
          </div>

          <div className={styles.buttons}>
            <button type="submit">Edit</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditForm;
