import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Activities from "./components/Activities.jsx";
import Landingpage from "./components/Landingpage.jsx";
import Template from "./components/Template.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import Diet from "./components/Diet.jsx";
import Recipes from "./components/Recipes.jsx";
import MealsCard from "./components/MealsCard.jsx";
import Catagories from "./components/Catagories.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/landing",
    element: <Landingpage></Landingpage>,
    children: [
      {
        index: true,
        element: <Template></Template>,
      },
      {
        path: "home",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "activities",
        element: <Activities></Activities>,
      },
      {
        path: "diet",
        element: <Diet></Diet>,
      },
      {
        path: "recipes",
        element: <Recipes></Recipes>,
        children: [
          {
            index: true,
            element:<Catagories></Catagories>,
          },
          {
            path: ":meals",
            element: <MealsCard></MealsCard>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
