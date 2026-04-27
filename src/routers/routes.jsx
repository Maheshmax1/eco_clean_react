import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Events from "../pages/Events";
import CustomerSupport from "../pages/CustomerSupport";
import Profile from "../pages/Profile";
import Admin from "../pages/Admin";
import DetailEvent from "../pages/DetailEvent";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path:"events/:id",
        element:<DetailEvent/>
      },
      {
        path: "contact",
        element: <CustomerSupport />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "*",
        element: <div className="p-10 text-center">Page not found</div>,
      },
    ],
  },
]);

export default MainRoutes;

