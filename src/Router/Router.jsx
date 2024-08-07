import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Login/Login";
import { Abouts } from "../Home/About";








const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/about",
        element: <Abouts />
    },

  

]);

export default router;