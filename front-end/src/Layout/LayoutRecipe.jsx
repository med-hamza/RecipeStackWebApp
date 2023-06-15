import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const LayoutRecipe = () => {
  return (
    <div>
    <Header />
    <Outlet />
    <Footer />
    </div>
  )
}

export default LayoutRecipe