import React from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "./routes";
import "./styles/global.less";
const App: React.FC = () => {
  return <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>;
};

export default App;
