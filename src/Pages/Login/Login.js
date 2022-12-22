import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
const {
	register,
	formState: { errors },
	handleSubmit,
} = useForm();
 
	const { signIn, googleSignIn } = useContext(AuthContext);

	const [loginError, setLoginError] = useState("");

	const [loginUserEmail, setLoginUserEmail] = useState("");

	const [token] = useToken(loginUserEmail);

	const location = useLocation();
	const from = location.state?.from?.pathname || "/";
	const navigate = useNavigate();

	

	if (token) {
		navigate("/");
			// navigate(from, { replace: true })
	}
	const handleLogin = (data) => {
		console.log(data);

		setLoginError("");

		signIn(data.email, data.password)
			.then((result) => {
				const user = result.user;
				console.log(user);

				setLoginUserEmail(data.email);
			})

			.catch((error) => {
				console.log(error.message);
				setLoginError(error.message);
			});
	};

	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				const user = result.user;

				console.log(user);
				saveUser(user.displayName, user.email);
				setLoginUserEmail(user);
			})

			.catch((er) => console.log(er));
	};

	const saveUser = (name, email) => {
		const user = { name, email };

		fetch("https://product-server-sand.vercel.app/users", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},

			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("save User", data);

				setLoginUserEmail(email);
			});
	};

	return (
		<div className="h-[800px] flex justify-center items-center">
			<div className="w-96 p-7">
				<h2 className="text-3xl text-center"> LogIn </h2>

				<form onSubmit={handleSubmit(handleLogin)}>
					{/* daisy ui */}

					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text">
								Email
							</span>
						</label>

						<input
							type="text"
							{...register("email", {
								required: "Email  is required",
							})}
							className="input input-bordered w-full max-w-xs"
						/>
						{errors.email && (
							<p
								className="text-red-600"
								role="alert"
							>
								{errors.email?.message}
							</p>
						)}
					</div>

					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text">
								Password
							</span>
						</label>

						<input
							type="password"
							{...register("password", {
								required: "Password is required",

								minLength: {
									value: 8,
									message: "Password must be 8 characters or longer",
								},
							})}
							className="input input-bordered w-full max-w-xs mb-5"
						/>
						{errors.password && (
							<p
								className="text-red-600"
								role="alert"
							>
								{
									errors.password
										?.message
								}
							</p>
						)}
					</div>

					<input
						className="btn btn-primary w-full"
						value="Login"
						type="submit"
					/>

					<div>
						{loginError && (
							<p className="text-red-600">
								{loginError}
							</p>
						)}
					</div>
				</form>

				<p>
					New to This Website
					<Link
						className="text-secondary"
						to="/register"
					>
						Create new Account
					</Link>
				</p>
				<div className="divider">OR</div>
				<button
					onClick={handleGoogleSignIn}
					className="btn btn-error btn-outline w-full"
				>
					Log In WITH GOOGLE
				</button>
			</div>
		</div>
	);
};

export default Login;
