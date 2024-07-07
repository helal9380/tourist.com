import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home";
import AddTourist from "../Pages/AddTourist/AddTourist";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
            path: '/addTourist',
            element: <AddTourist></AddTourist>
        }
      ]
    },
  ]);

  export default router;