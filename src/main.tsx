import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={routes} />
);
