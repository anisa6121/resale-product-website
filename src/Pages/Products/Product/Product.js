import axios from "axios";
import { useEffect, useState } from "react";

import Loading from "../../Shared/Loading/Loading";
import ProductCategory from "../ProductCategory/ProductCategory";

const Product = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		axios.get("https://product-server-sand.vercel.app/allProduct")
		.then((data) => {
			console.log(data.data);
			setProducts(data.data);
			setLoading(false);
		});
		setLoading(true);
	}, []);

	if (loading) {
		return <Loading></Loading>;
	}
	return (
		<>
			<div className="text-center">
				<h1 className="text-4xl text-sky-400 ">
					Our Product Category
				</h1>
				<h2 className="text-2xl mt-2">
					Choose your Product <br /> and buy
				</h2>
			</div>
			<div className="mt-3 mb-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
				{products?.map((product) => (
					<ProductCategory
						product={product}
						key={product._id}
					></ProductCategory>
				))}
			</div>
		</>
	);
};

export default Product;
