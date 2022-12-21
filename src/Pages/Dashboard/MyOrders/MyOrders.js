import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyOrders = () => {
	const { user } = useContext(AuthContext);
	const url = `https://product-server-sand.vercel.app/bookings?email=${user?.email}`;
	const { data: bookings = [] } = useQuery({
		queryKey: ["bookings", user?.email],
		queryFn: async () => {
			const res = await fetch(url, {
				headers: {
					authorization: `bearer ${localStorage.getItem(
						"getToken"
					)}`,
				},
			});

			const data = await res.json();
			console.log(data);
			return data;
		},
	});

	return (
		<div>
			<h3 className="text-3xl mt-5 text-center mb-6">
				My Orders
			</h3>

			<div className="overflow-x-auto">
				<table className="table w-full">
					{/* <!-- head --> */}
					<thead>
						<tr>
							<th></th>
							<th>Image</th>
							<th>Name</th>
							<th>Price</th>
							<th>Payment</th>
						</tr>
					</thead>
					<tbody>
						{bookings &&
							bookings?.map((booking) => (
								<tr key={booking._id}>
									<th></th>
									<div className="avatar">
										<div className="w-24 rounded-full">
											<img
												src={
													booking.img
												}
												alt=""
											/>
										</div>
									</div>
									<td>
										{
											booking.productName
										}
									</td>
									<td>
										{
											booking.price
										}
									</td>

									<td>
										{booking.price &&
											!booking.paid && (
												<Link
													to={`/dashboard/payment/${booking._id}`}
												>
													<button className="btn btn-warning btn-sm">
														Pay
													</button>
												</Link>
											)}

										{booking.price &&
											booking.paid && (
												<span className="text-black font-bold">
													Paid
												</span>
											)} 
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyOrders;
