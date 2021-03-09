import React from "react";
import { TestInterface } from "./interface";

const prefixCls = "happy-alert";

const Test: React.FC<TestInterface> = ({ title }: TestInterface) => (
  <div className={prefixCls}>{title}</div>
);

Test.defaultProps = {
  title: ""
};

export default Test;
