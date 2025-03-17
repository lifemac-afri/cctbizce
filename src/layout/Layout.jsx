import { Outlet } from "react-router-dom";
import FirstHeader from "../components/headers/FirstHeader";
import NavHeader from "../components/headers/NavHeader";
import Footer from "../components/common/Footer";
import { HelmetProvider } from "react-helmet-async";

const Layout = () => {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <div className="flex flex-col min-h-screen">
        <FirstHeader />
        <NavHeader />
        <main className="flex-grow w-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Layout;
