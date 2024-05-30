import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/shared/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllBlogs from "../pages/AllBlogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [{
        index: true,
        element: <Home />,
      },{
        path: "/allBlogs",
        element: <AllBlogs />,
      },
      /* {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }, */
    ],
  },
]);
