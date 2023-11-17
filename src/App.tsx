import "./App.css";
import { RouterProvider } from "react-router-dom";
import { QRCODEFN } from "./helpers/Routes.tsx";

function App() {
  return (
    <>
      <RouterProvider router={QRCODEFN} />
    </>
  );
}

export default App;
