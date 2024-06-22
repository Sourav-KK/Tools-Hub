import { createBrowserRouter } from "react-router-dom";
import QRGen from "./pages/QR/QRGen";
import Draw from "./pages/Draw";
import Error from "./pages/Error";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/qrcodegenerator",
    element: <QRGen />,
  },
  {
    path: "/draw",
    element: <Draw />,
  },
]);

export { router };
