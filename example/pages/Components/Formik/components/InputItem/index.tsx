import React from "react";
import { useFormikContext } from "formik";
import "./index.less";

interface InputItemProps {
  value?: string | number;
  type?: string;
  id?: string;
  name: string;
  onChange?: (value: string) => void;
  label?: string;
}

export const InputItem: React.FC<InputItemProps> = (props: InputItemProps) => {
  const { label, name, id, type } = props;
  const { getFieldProps, setFieldValue } = useFormikContext();
  // 获取输入框的数据
  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(name, e.target.value);
  };
  // 获取formik的value值
  const value = getFieldProps(name).value;
  return (
    <div className="bufang-inputItem" style={{ display: "flex" }}>
      <div className="bufang-inputItem-label">
        <label htmlFor={id}>{label}：</label>
      </div>
      <div className="bufang-inputItem-input">
        <input type={type} name={name} id={id} onChange={_onChange} value={value} />
      </div>
    </div>
  );
};
InputItem.defaultProps = {
  type: "text"
};
