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
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "services/:serviceId",
          element: <ServiceDetails />,
        },
        {
          path: "contact",
          element: <Contact />,
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
