import { RouterProvider } from "react-router-dom";
import RoutesConfig from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={RoutesConfig} />
    </>
  );
}

export default App;
