import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
const LayoutRecipe = () => {
  return (
    <div>
      <Header />
      <ToastContainer />
      <Outlet />
      <Footer />
    </div>
  )
}

export default LayoutRecipe