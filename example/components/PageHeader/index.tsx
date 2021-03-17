import React from "react";
import "./index.less";
interface PageHeaderProps {
  title: string;
}
export const PageHeader: React.FC<PageHeaderProps> = (props: PageHeaderProps) => {
  return <div className="title">{props.title}</div>;
};
