import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layouts/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Blogs from "../Blogs/Blogs";
import ViewDetails from "../ViewDetails/ViewDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllToys from "../AllToys/AllToys";
import MyToys from "../MyToys/MyToys";
import AddaToy from "../AddaToy/AddaToy";
import UpdateToy from "../UpdateToy/UpdateToy";



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
            path: 'viewDetails/:id',
            element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
        },
        {
            path: 'allToys',
            element: <AllToys></AllToys>
        },
        {
            path: 'updateToy/:id',
            element: <UpdateToy></UpdateToy>
        },
        {
            path: 'myToys',
            element: <MyToys></MyToys>
        },
        {
            path: 'addAToy',
            element: <AddaToy></AddaToy>
        },
        
      ]
    },
  ]);

  export default router;