import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";

const RoutesConfig = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default RoutesConfig;
