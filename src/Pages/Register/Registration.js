import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Registration = () => {
const {register,formState: { errors },handleSubmit,} = useForm();

    const [error, setError] = useState("");  
    
    const { createUser, updateUser } = useContext(AuthContext); 
    
const handleSignUp = (data) => {
	console.log(data);

	setError("");

	createUser(data.email, data.password)
		.then((result) => {
			const user = result.user;
			console.log(user);
			// toast("User Created Successfully.");

			const userInfo = {
				displayName: data.name,
			};

			updateUser(userInfo)
				.then(() => {
					// saveUser(data.name, data.email);
				})
				.catch((err) => console.log(err));
		})

		.catch((error) => {
			console.log(error);
			setError(error.message);
		});
};


    return (
		<div className="h-[800px] flex justify-center items-center">
			<div className="w-96 p-7">
				<h2 className="text-3xl  text-center"> Register </h2>

                <form onSubmit={handleSubmit(handleSignUp)}>
              
					{/* daisy ui */}

					<div className="form-control w-full max-w-xs">
						<label className="label">
						
							<span className="label-text">
								Name
							</span>
						</label>
						<input
							type="text"
							{...register("name", {
								required: "Name is Required",
							})}
							className="input input-bordered w-full max-w-xs"
						/>
						{errors.name && (
							<p className="text-red-500">
								{errors.name.message}
							</p>
						)}

						<label className="label">
							<span className="label-text">
								Email
							</span>
						</label>

						<input
							type="text"
							{...register("email", {
								required: "Email Address is required",
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
									value: 6,
									message: "Password must be 6 characters or longer",
								},
								
							})}
							className="input input-bordered w-full max-w-xs"
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
						className="btn text-white btn-primary w-full mt-4"
						value="Register"
						type="submit"
					/>
					{error && (
						<p className="text-red-500">
							{error}
						</p>
					)}
				</form>

				<p>
					Already have an account.
					<Link className="text-secondary" to="/login">
						Login
					</Link>
				</p>
				<div className="divider">OR</div>
				<button className="btn btn-error btn-outline w-full">
					SIGN IN WITH GOOGLE
				</button>
			</div>
		</div>
    );
};

export default Registration;