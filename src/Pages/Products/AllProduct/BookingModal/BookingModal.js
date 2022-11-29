import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../contexts/AuthProvider";

const BookingModal = ({ product, setProduct }) => {
	const { user } = useContext(AuthContext);

	const { name: itemName, ResalePrice, img } = product;

	const handleBooking = (event) => {
		event.preventDefault();
		const form = event.target;

		const location = form.location.value;
		const name = form.name.value;
		const email = form.email.value;
		const phone = form.phone.value;
		// [3, 4, 5].map((value, i) => console.log(value))

		const booking = {
			name,
			img,
			email,
			phone,
			location,
			productName: itemName,
			price: ResalePrice,
		};

		console.log(booking);

		fetch("https://product-server-sand.vercel.app/bookings", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(booking),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);

				if (data.acknowledged) {
					setProduct(null);
					toast.success("Product Item confirmed");
				} else {
					toast.error(data.message);
				}
			});
	};
	return (
		<>
			<input
				type="checkbox"
				id="booking-modal"
				className="modal-toggle"
			/>
			<div className="modal">
				<div className="modal-box relative">
					<label
						htmlFor="booking-modal"
						className="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					<h3 className="text-lg font-bold">
						Product Name: {itemName}
					</h3>
					<p className="text-xl">
						Item Price : {ResalePrice}
					</p>
					<form
						onSubmit={handleBooking}
						className="grid grid-cols-1 gap-3 mt-10"
					>
						<input
							required
							defaultValue={
								user?.displayName
							}
							readOnly
							name="name"
							type="text"
							placeholder="Your Name"
							className="input w-full input-bordered"
						/>

						<input
							required
							defaultValue={user?.email}
							readOnly
							name="email"
							type="email"
							placeholder="Email Address"
							className="input w-full input-bordered"
						/>

						<input
							name="location"
							type="text"
							placeholder="location"
							className="input w-full input-bordered"
						/>

						<input
							name="phone"
							type="text"
							placeholder="Phone Number"
							className="input w-full input-bordered"
						/>

						<br />
						<input
							className="btn btn-primary w-full"
							type="submit"
							value="Submit"
						/>
					</form>
				</div>
			</div>
		</>
	);
};

export default BookingModal;
