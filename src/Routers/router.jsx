import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Regester/Register";
import CollegeCard from "../Pages/CollegeCard/CollegeCard";
import CollegeDetails from "../Pages/CollegeCard/CollegeDetails";
import CollegeDetailsLayout from "../Layouts/CollegeDetailsLayout";
import Details from "../Pages/CollegeCard/Details";
import HomeDetails from "../Layouts/HomeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/colleges",
        element: <CollegeCard />,
      },
    ],
  },
  {
    path: "/collegeDetails",
    element: <CollegeDetailsLayout />,
    children: [
      {
        path: ":id",
        element: <CollegeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/sixCard/${params.id}`),
      },
    ],
  },
  {
    path: "/HomeDetails",
    element: <HomeDetails/>,
    children: [
      {
        path: ":id",
        element: <Details/>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/threeCard/${params.id}`),
      },
    ],
  },

]);

export default router;
