import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Blog from "../../Blog/Blog";
import Dashboard from "../../Dashboard/Dashboard";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import AllProduct from "../../Products/AllProduct/AllProduct";

import Registration from "../../Register/Registration";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
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
				element: <Registration></Registration>,
			},
			{
				path: "/blog",
				element: <Blog></Blog>,
			},

			{
				path: "/allProduct/:id",
				element: (
					<PrivateRoute>
						<AllProduct></AllProduct>
					</PrivateRoute>
				),
				
				loader: ({ params }) =>
					fetch(
						`http://localhost:8000/singleProduct/${params.id}`
					),
			},
		],
	},
	{
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<Dashboard></Dashboard>
			</PrivateRoute>
		),
	},
]);

export default router;