import React from 'react';
import { Link } from 'react-router-dom';
const ProductCategory = ({ product }) => {

    const {_id, title, img} = product
	return (
		<div className="card card-compact  bg-base-100 shadow-xl">
			<figure>
				<img className="h-60 " src={img} alt="img" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>

				<div className="card-actions justify-start">
					<Link
						to={`/allProduct/${_id}`}
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					>
						See All
					</Link>
                </div>
                
			</div>
		</div>
	);
};

export default ProductCategory;