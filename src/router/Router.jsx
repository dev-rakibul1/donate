import Donate from "../pages/donate/Donate";

const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../layout/Root");
const { default: Home } = require("../pages/home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/donate", element: <Donate /> },
    ],
  },
]);

export default router;
