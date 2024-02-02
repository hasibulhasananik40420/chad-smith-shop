import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Bio from "../Pages/Bio";
import Contact from "../Pages/Contact";

 const routes = createBrowserRouter([
      
    {
        path:'/',
        element:<App/>,
        children:[
            {index:true,
             element:<Home/>
            },

            {
                path:'/bio',
                element:<Bio/>
            },
             
            {
                path:'/contact',
                element:<Contact/>
            }

        ]
    }


 ])

 export default routes