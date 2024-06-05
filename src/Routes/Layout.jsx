import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import AdminHeader from "../components/AdminHeader";
import AdminNavigation from "../components/AdminNavigation";

const Layout = () => {
  return (
    <div>
      <AdminHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
