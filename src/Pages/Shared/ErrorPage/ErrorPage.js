import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

import img from "../../../assets/error.png";

const ErrorPage = () => {
	const { logOut } = useContext(AuthContext);
	const error = useRouteError();
	const navigate = useNavigate();

	const handleLogOut = () => {
		logOut()
			.then(() => {
				navigate("/login");
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<div className="flex flex-col min-h-[700px] justify-center items-center">
				<img src={img} alt="" />

				<h1 className="text-4xl">OH NO, PAGE NOT FOUND</h1>

				<br />

				{error && (
					<div>
						<p className="text-red-500 text-center text-5xl">
							{error.statusText ||
								error.message}
						</p>
						<p>{error.status}</p>
					</div>
				)}

				<h4 className="text-3xl">
					Please
					<button
						className="btn  btn-active btn-link"
						onClick={handleLogOut}
					>
						Log out
					</button>{" "}
				</h4>
			</div>
		</>
	);
};

export default ErrorPage;
