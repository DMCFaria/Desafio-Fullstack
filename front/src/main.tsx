import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {Dashboard} from "./Pages/Dashboard.tsx";
import { GlobalReset } from "./style/reset.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalReset/>
        <Dashboard/>
    </BrowserRouter>
  </React.StrictMode>
);
