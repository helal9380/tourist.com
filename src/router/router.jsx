import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home";
import AddTourist from "../Pages/AddTourist/AddTourist";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AllTouristSpot from "../Pages/AllTouristSpot/AllTouristSpot";
import AllTouristDetails from "../Pages/AllTouristSpot/AllTouristDetails";
import Carts from "../Pages/AllTouristSpot/Carts";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <h3>Error page</h3>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/allTouristSpot',
            element: <AllTouristSpot></AllTouristSpot>
        },
        {
            path: '/allTouristSpot/details/:id',
            element: <PrivateRoute><Carts></Carts></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/tourist/${params.id}`)
        },
        {
            path: '/carts',
            element: <PrivateRoute><Carts></Carts></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/carts'),
        },
        {
            path: '/addTourist',
            element: <PrivateRoute><AddTourist></AddTourist></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;