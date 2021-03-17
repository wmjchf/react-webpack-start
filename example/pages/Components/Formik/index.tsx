import React from "react";
import { useFormik } from "formik";
import { PageHeader } from "@/components/PageHeader";
import "./index.less";
const Test: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: "wang",
      age: 12
    },
    onSubmit(value) {
      console.log(value);
    }
  });
  return (
    <div className="formikComponent">
      <PageHeader title="Formik组件" />
      <form>
        <div className="bufang-inputItem" style={{ display: "flex" }}>
          <div className="bufang-inputItem-label">姓名：</div>
          <div className="bufang-inputItem-input">
            <input type="text" name="name" id="name" />
          </div>
        </div>
        <div className="inputItem">
          <label htmlFor="age">年龄：</label>
          <input type="text" name="age" id="age" />
        </div>
      </form>
    </div>
  );
};

export default Test;
