import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Blog from "../../Blog/Blog";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";

import Registration from "../../Register/Registration";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";



export const router = createBrowserRouter([
	{
		path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
                path: "/register",
                element:<Registration></Registration>
            },
            {
                path: "/blog",
                element:<Blog></Blog>
            },
         
		],
	},
]);

export default router;