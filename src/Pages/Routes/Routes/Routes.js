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
import Payment from "../../Dashboard/Dashboard/Payment/Payment";

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
				loader: async ({ params }) => {
					return fetch(
						`https://product-server-sand.vercel.app/singleProduct/${params.id}`
					);
				},
			},
		],
	},
	{
		path: "/dashboard",
		errorElement:<ErrorPage></ErrorPage>,
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
			{
				path: "/dashboard/payment/:id",

				element: <Payment></Payment>,

				loader: ({ params }) =>
					fetch(
						`https://product-server-sand.vercel.app/bookings/${params.id}`
					),
			},
		],
	},
]);

export default router;
