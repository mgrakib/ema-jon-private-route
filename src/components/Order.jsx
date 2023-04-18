import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import OrderSummary from './OrderSummary';
import { AuthContextAPI } from './AuthContext';

const Order = () => {
    
	const {products} = useContext(AuthContextAPI)	
    return (
		<div className='grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-5'>
			<div className='grid grid-cols-1 md:grid-cols-3 mt-2 md:mt-10 gap-3 md:gap-10 ml-2 md:ml-10'>
				{products.map(product => (
					<SingleProduct
						key={product.id}
						product={product}
					/>
				))}
			</div>
			<div className='bg-[#FFE0B3] p-3'>
				<OrderSummary/>
			</div>
		</div>
	);
};

export default Order;