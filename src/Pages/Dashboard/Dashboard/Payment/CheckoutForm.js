import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckoutForm = ({ booking }) => {
	console.log(booking);

	const { price, email, name, _id, productName, location } = booking;
	const [cardError, setCardError] = useState("");

	const [clientSecret, setClientSecret] = useState("");
	const [success, setSuccess] = useState("");
	const [processing, setProcessing] = useState(false);
	const [transactionId, setTransactionId] = useState("");

	const navigate = useNavigate();
	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		fetch(
			"https://product-server-sand.vercel.app/create-payment-intent",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authorization: `bearer ${localStorage.getItem(
						"getToken"
					)}`,
				},
				body: JSON.stringify({ price }),
			}
		)
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret));
	}, [price]);

	const stripe = useStripe();

	const elements = useElements();

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}
		const card = elements.getElement(CardElement);
		console.log(card);
		if (card === null) {
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod(
			{
				type: "card",
				card,
			}
		);

		if (error) {
			console.log(error);
			setCardError(error.message);
		} else {
			setCardError("");
		}
		setSuccess("");
		setProcessing(true);
		const { paymentIntent, error: confirmError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						name: name,
						email: email,
					},
				},
			});
		if (confirmError) {
			setCardError(confirmError.message);
			return;
		}

		console.log("paymentIntent", paymentIntent);

		if (paymentIntent.status === "succeeded") {
			console.log("card info", card);
			// store payment in the database

			// setSuccess("Congrats! your payment completed")
			// setTransactionId(paymentIntent.id)

			const payment = {
				name,
				price,
				transactionId: paymentIntent.id,
				email,
				bookingId: _id,
				Product: productName,
				location: location,
			};
			fetch("https://product-server-sand.vercel.app/payments", {
				method: "POST",
				headers: {
					"content-type": "application/json",
					authorization: `bearer ${localStorage.getItem(
						"getToken"
					)}`,
				},

				body: JSON.stringify(payment),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);

					if (data.insertedId) {
						toast.success("Success");
						setSuccess(
							"Congrats! your payment completed"
						);
						setTransactionId(paymentIntent.id);
						navigate("/dashboard");
					}
				});
		}

		setProcessing(false);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: "16px",
								color: "#424770",
								"::placeholder": {
									color: "#aab7c4",
								},
							},
							invalid: {
								color: "#9e2146",
							},
						},
					}}
				/>
				<button
					className="btn btn-sm mt-5 btn-primary"
					type="submit"
					disabled={
						!stripe || !clientSecret || processing
					}
				>
					Pay
				</button>
			</form>
			<p className="text-red-500">{cardError}</p>
			{success && (
				<div>
					<p className="text-green-500 ">{success}</p>

					<p>
						transactionId:
						<span className="font-bold">
							{transactionId}
						</span>
					</p>
				</div>
			)}
		</>
	);
};

export default CheckoutForm;
