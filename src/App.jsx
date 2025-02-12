import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import {
  About,
  Blog,
  Contact,
  Home,
  NotFound,
  ServiceDetails,
  Services,
  ResourceDocs,
  BlogDetailPage,
} from "./pages";
import Layout from "./layout/Layout";
//forms
import BirthCertificationForm from "./pages/forms/BirthCertificateForm";
import CompanyForm from "./pages/forms/CompanyForm";
import SoleProprietorshipForm from "./pages/forms/SoleProprietorshipForm";
import PassportApplicationForm from "./pages/forms/PassportApplicationForm";

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
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "blog/:id",
          element: <BlogDetailPage />,
        },
        {
          path: "resource_docs",
          element: <ResourceDocs />,
        },
        //Routes for forms
        {
          path: "forms/company",
          element: <CompanyForm />,
        },
        {
          path: "forms/sole_proprietorship",
          element: <SoleProprietorshipForm />,
        },
        {
          path: "forms/passport_application",
          element: <PassportApplicationForm />,
        },
        {
          path: "forms/birth_certificate",
          element: <BirthCertificationForm />,
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
