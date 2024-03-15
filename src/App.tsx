import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
// import Orders from "./pages/orders/Orders";yy
import "./styles/global.scss"
import Orders from "./pages/orders/Orders";
import Create from "./Create";
import Update from "./Update";
import CalendarView from "./pages/calender/CalenderView";



function App() {

  const Layout = () =>  {
    return (
    <div className="main">
      <Navbar/>
      <div className="contain">
        <div className="menu-con">
          <Menu/>
        </div>
        <div className="content-con">
          <Outlet/>
        </div>
      </div>
      <Footer/>
    </div>
    );
    
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element : <Layout/>,
      children: [
        {
        path:"/",
        element : <Home/>
        },
        {
        path:"products",
        element : <Products/>
        },
        {
        path:"orders",
        element : <Orders/>
        },
        {
        path:"create",
        element : <Create/>
        },
        {
        path:"calender",
        element : <CalendarView orders={[]}/>
        },
        {
        path:"edit/:id",
        element : <Update/>
        },
        
    ]
    }
]);


  return (
    <RouterProvider router={router}/>
  )
}

export default App
