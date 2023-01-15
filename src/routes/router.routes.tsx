import { createBrowserRouter } from "react-router-dom";
import Bugs from "../components/bugs/Bugs";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/dashboard/bugs",
    element: <Bugs />
  },
  {
    path: "/dashboard",
    element: <Bugs />
  },
]);

export default router;
