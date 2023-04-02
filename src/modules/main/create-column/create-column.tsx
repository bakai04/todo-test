import React, { FC,} from "react";
import * as Yup from "yup";
import styles from "./create-column.module.scss";
import { useAppDispatch } from "@/store/store";
import { createColumn, IColumn } from "@/store/columnSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";

interface Props {
  onClose: () => void;
}

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Обязательное поле").max(100, "Название не должно превышать 100 символов"),
})

export const ColumnForm: FC<Props> = ({ onClose }) => {
  const dispatch = useAppDispatch();

  const onCreateColumn = (values: Omit<IColumn, "id">, resetForm: () => void) => {
    dispatch(createColumn(values));
    resetForm()
    onClose();
    toast.success("You succesfully created column")
  };

  return (
    <Formik
      initialValues={{
        title: "",
      }}
      validateOnBlur
      validateOnChange
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onCreateColumn(values, resetForm);
      }}
    >
      {() => (
        <Form className={styles.form}>
          <div className={styles.form_title}>
            <label htmlFor="title">Title:</label>
            <Field name="title" placeholder="Enter a column title" />
            <ErrorMessage name="title" className={styles.error} component={"p"} />
          </div>
          <div className={styles.buttons}>
            <button type="submit">Create Column</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
};
