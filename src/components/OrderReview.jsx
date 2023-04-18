import React, { useContext } from 'react';
import { AuthContextAPI } from './AuthContext';
import OrderSummary from './OrderSummary';
import ProductReview from './ProductReview';
import ProductCheckout from './ProductCheckout';

const OrderReview = () => {
    const { cart } = useContext(AuthContextAPI);
    
    
    return (
		<div className='grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-5 md:gap-10'>
			<div className='flex flex-col  mt-2 md:mt-5 gap-3 md:gap-5 ml-2 md:ml-10 '>
                {cart.length > 0 ? cart.map(product => <ProductReview key={product.id} product={product} />) : <p className='text-center text-2xl'>No Product Available</p>}
			</div>
			<div className='bg-[#FFE0B3] p-3'>
				<ProductCheckout/>
			</div>
		</div>
	);
};

export default OrderReview;