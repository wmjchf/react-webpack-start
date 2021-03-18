import React from "react";
import { Formik, FormikConfig, FormikValues, Form as Form1 } from "formik";

interface FormProps extends FormikConfig<FormikValues> {
  children?: React.ReactNode;
}
export type FormValues = FormikValues;

export const Form: React.FC<FormProps> = (props: FormProps) => {
  return (
    <Formik {...props}>
      <Form1>{props.children}</Form1>
    </Formik>
  );
};
