
import { useQuery } from '@tanstack/react-query';

import Loading from '../../Shared/Loading/Loading';
import ProductCategory from '../ProductCategory/ProductCategory';


const Product = () => {


    const { data: products = [], isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch("http://localhost:8000/allProduct")
            const data = await res.json()
            return data
            
        }

		
    });

if (isLoading) {
    return <Loading></Loading>
    }
    
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
						key={product._id}
					></ProductCategory>
				))}
			</div>
		</>
    );
};

export default Product;