import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductDetails from "../AllProduct/ProductDetails";
import BookingModal from './BookingModal/BookingModal';

const AllProduct = () => {


    const loadData = useLoaderData()
    console.log(loadData);
    const getData = loadData.items 
    console.log(getData)
    return (
		<div>
			<div className="m-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
				{getData.map((data, i) => (
					<ProductDetails
						data={data}
						key={i}
					></ProductDetails>
				))}
            </div>
            
            <BookingModal></BookingModal>
		</div>
    );
};

export default AllProduct;