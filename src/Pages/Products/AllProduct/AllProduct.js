import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductDetails from "../AllProduct/ProductDetails";
import BookingModal from './BookingModal/BookingModal';

const AllProduct = () => {


    const loadData = useLoaderData()
    console.log(loadData);
    const getData = loadData.items 
	console.log(getData)
	const [product, setProduct] = useState(null);
    return (
		<div>
			<div className="m-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
				{getData?.map((data, i) => (
					<ProductDetails  
						data={data}
						key={i}
						setProduct={setProduct}
					></ProductDetails>
				))}
			</div>

			{product && 
				<BookingModal
                 product={product}
                 setProduct={setProduct}
                ></BookingModal>
			}
		</div>
    );
};

export default AllProduct;