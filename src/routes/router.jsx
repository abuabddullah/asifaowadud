import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/shared/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import AllBlogs from "../pages/AllBlogs";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";

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
        path: `/projectDetails/:id`,
        element: <ProjectDetails />,
      },
      {
        path: "/allBlogs",
        element: <AllBlogs />,
      },
    ],
  },
]);
