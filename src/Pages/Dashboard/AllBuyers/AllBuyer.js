import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllBuyer = () => {
	const { data: users = [], refetch } = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const res = await fetch(
				"https://product-server-sand.vercel.app/users"
			);
			const data = await res.json();
			return data;
		},
	});

	const handleMakeAdmin = (id) => {
		fetch(
			`https://product-server-sand.vercel.app/users/admin/${id}`,
			{
				method: "PUT",
				headers: {
					authorization: `bearer ${localStorage.getItem(
						"accessToken"
					)}`,
				},
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					toast.success("add admin successful.");
					refetch();
				}
			});
	};

	const handleDeleteUser = (id) => {
		fetch(`https://product-server-sand.vercel.app/users/${id}`, {
			method: "DELETE",
			headers: {
				authorization: `bearer ${localStorage.getItem(
					"getToken"
				)}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					toast.success(" deleted successfully");
					refetch();
				}
			});
	};
	return (
		<div>
			<h2 className="text-3xl text-center m7-6">All Buyers</h2>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Email</th>
							<th>Admin</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{users?.map((user, i) => (
							<tr key={user._id}>
								<th>{i + 1}</th>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>
									{user?.role !==
										"admin" && (
										<button
											onClick={() =>
												handleMakeAdmin(
													user._id
												)
											}
											className="btn btn-xs btn-primary"
										>
											Make
											Admin
										</button>
									)}
								</td>
								<td>
									<label>
										<button
											onClick={() =>
												handleDeleteUser(
													user._id
												)
											}
											className="btn  btn-error"
										>
											Delete
										</button>
									</label>
									{/* <button className="btn btn-xs btn-danger">
										Delete
									</button> */}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllBuyer;
