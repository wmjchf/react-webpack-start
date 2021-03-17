import React from "react";
import { RouteConfig } from "react-router-config";
import Home from "@/pages/Home";
import Component from "@/pages/Components";
import Test from "@/pages/Components/Formik";
import { Redirect } from "react-router-dom";

const generateRedirect = (url: string) => <Redirect to={url} />;

const routes: Array<RouteConfig> = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/component",
    component: Component,
    routes: [
      {
        path: "/component",
        exact: true,
        render: () => generateRedirect("/component/test")
      },
      {
        path: "/component/test",
        component: Test
      }
    ]
  }
];

export default routes;
