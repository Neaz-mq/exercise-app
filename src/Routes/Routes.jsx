import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Stretches from "../pages/Stretches/Stretches/Stretches";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
         {
            path:'/stretches',
            element: <Stretches></Stretches>
        },
    ]
  },
]);