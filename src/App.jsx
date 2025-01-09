import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import {
  About,
  Contact,
  Home,
  NotFound,
  ServiceDetails,
  Services,
} from "./pages";
import Layout from "./layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          index: true,
          element: <Home />, // Home page
        },
        {
          path: "about",
          element: <About />, // About page
        },
        {
          path: "services",
          element: <Services />, // Services page
          children: [
            {
              path: ":serviceId", // Dynamic route for service details
              element: <ServiceDetails />,
            },
          ],
        },
        {
          path: "contact",
          element: <Contact />, // Contact page
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
