import React from "react";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider } from "react-router-dom";
import App from "./Root";
import router from "./Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
/* root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
 */
root.render(<RouterProvider router={router} />);
