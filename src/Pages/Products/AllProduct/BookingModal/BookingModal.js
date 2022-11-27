import React from 'react';

const BookingModal = () => {
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
						{/* {treatmentName} */}
					</h3>

					<form
						// onSubmit={handleBooking}
						className="grid grid-cols-1 gap-3 mt-10"
					>
						<input
							required
							// defaultValue={
							// 	user?.displayName
							// }
							disabled
							name="name"
							type="text"
							placeholder="Your Name"
							className="input w-full input-bordered"
						/>

						<input
							name="location"
							type="text"
							placeholder="location"
							className="input w-full input-bordered"
						/>
						<input
							required
							// defaultValue={user?.email}
							readOnly
							name="email"
							type="email"
							placeholder="Email Address"
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
							className="btn btn-accent w-full"
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