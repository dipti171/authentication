import {createBrowserRouter} from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Prtofile";
  
 const  router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children:[
        {
            path: "/",
            element:<Home/>
        },
        {
          path: "/register",
          element:<Register/>
        },
        {
          path: "/login",
          element:<Login/>
        },
        {
          path: "/profile",
          element:<Profile/>
        }
      ]
    },

])

export default router;
  
