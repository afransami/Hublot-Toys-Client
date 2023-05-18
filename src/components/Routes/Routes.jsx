import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layouts/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Blogs from "../Blogs/Blogs";
import ViewDetails from "../ViewDetails/ViewDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'blogs',
            element: <Blogs></Blogs>
        },
        {
            path: 'viewDetails',
            element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
        },
        
      ]
    },
  ]);

  export default router;