import React from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import "./index.less";

interface ComponentProps {
  name: string;
}
const Component: React.FC<RouteConfigComponentProps<ComponentProps>> = (
  props: RouteConfigComponentProps<ComponentProps>
) => {
  return <div className="component">{renderRoutes(props.route?.routes)}</div>;
};

export default Component;
