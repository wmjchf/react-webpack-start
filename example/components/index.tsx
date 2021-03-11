import React from "react";

interface TestProps {
  title: string;
}
export const Test: React.FC<TestProps> = ({ title }: TestProps) => {
  return <div>{title}</div>;
};
