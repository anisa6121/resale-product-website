import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../../Layout/DashboardLayout";
import Main from "../../../Layout/Main";
import Blog from "../../Blog/Blog";

import MyOrders from "../../Dashboard/MyOrders/MyOrders";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import AllProduct from "../../Products/AllProduct/AllProduct";

import Registration from "../../Register/Registration";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


import AllBuyer from "../../Dashboard/AllBuyers/AllBuyer";
import AdminRoute from "../AdminRoute/AdminRoute";

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
				<DashboardLayout></DashboardLayout>
			</PrivateRoute>
		),
		children: [
			{
				path: "/dashboard",
				element: <MyOrders></MyOrders>,
			},
			{
				path: "/dashboard/buyers",
				element: (
					<AdminRoute>
						<AllBuyer></AllBuyer>
					</AdminRoute>
				),
			},
		],
	},
]);

export default router;