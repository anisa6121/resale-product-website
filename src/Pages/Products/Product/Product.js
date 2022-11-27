import React, { useEffect, useState } from 'react';
import ProductCategory from '../ProductCategory/ProductCategory';


const Product = () => {


      const [products, setProducts] = useState([]);

      useEffect(() => {
		fetch("products.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
      }, []);
    
    return (
		<>
			<div className="text-center" >
				<h1 className="text-4xl text-sky-400 ">
					Our Product Category
				</h1>
				<h2 className='text-2xl mt-2'>Choose your Product <br /> and buy</h2>
			</div>
			<div className='mt-3 mb-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5'>
				{products.map((product) => (
					<ProductCategory
						product={product}
						key={product.id}
					></ProductCategory>
				))}
			</div>
		</>
    );
};

export default Product;