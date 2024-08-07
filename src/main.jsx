import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import router from './Router/Router';
import { ThemeProvider } from "./Home/ThemeContext"; // Importing ThemeProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>  {/* Wrapping RouterProvider with ThemeProvider */}
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
