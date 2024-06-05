import { useState } from "react";
import AllRoutes from "./Routes/AllRoutes";
import AdminNavigation from "./components/AdminNavigation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <AdminNavigation />
      <AllRoutes />
      <Footer />
    </>
  );
};

export default App;
