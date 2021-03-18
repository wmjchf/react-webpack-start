import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { InputItem } from "./components/InputItem";
import { Form, FormValues } from "./components/Form";
import "./index.less";

const Test: React.FC = () => {
  const initialValues = {
    name: "wang",
    age: "12"
  };
  const onSubmit = (value: FormValues) => {
    console.log(value);
  };
  return (
    <div className="formikComponent">
      <PageHeader title="Formik组件" />
      <Form initialValues={initialValues} onSubmit={onSubmit}>
        <InputItem label="姓名" name="name" id="name" />
        <InputItem label="年龄" name="age" id="age" />
        <div className="submitBtn">
          <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
  );
};

export default Test;
