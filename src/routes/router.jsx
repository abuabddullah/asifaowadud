import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/shared/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import AllBlogs from "../pages/AllBlogs";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/allBlogs",
        element: <AllBlogs />,
      },
    ],
  },
]);
