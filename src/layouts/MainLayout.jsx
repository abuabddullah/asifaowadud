import { Outlet } from "react-router-dom";
import StarterBanner from "../components/home/StarterBanner";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <StarterBanner />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
