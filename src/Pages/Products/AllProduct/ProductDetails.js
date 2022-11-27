import React from 'react';
import { Link } from 'react-router-dom';

const productDetails = ({ data }) => {
const { img, name, OriginalPrice, ResalePrice, Seller, location, post, use } =
	data;
    return (
		<div className="card card-compact  bg-base-100 shadow-xl">
			<figure>
				<img className="h-60 " src={img} alt="img" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">Name: {name}</h2>

				<div>
					<p>post: {post}</p>
					<p>location: {location}</p>
					<p>Original Price: {OriginalPrice}</p>
					<p>Resale Price: {ResalePrice}</p>
					<p>Months of Use: {use}</p>
					<p>Seller: {Seller}</p>
				</div>

				<div className="card-actions justify-start">
					<Link
						// to={`/allProduct/${_id}`}
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					>
						See All
					</Link>
				</div>
			</div>
		</div>
    );
};

export default productDetails;