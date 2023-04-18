import React, { useContext } from 'react';
import { TrashIcon, ArrowSmallRightIcon } from '@heroicons/react/24/solid'
import { AuthContextAPI } from './AuthContext';
import { Link } from 'react-router-dom';

const OrderSummary = () => {
    const { cart, handelClearCart } = useContext(AuthContextAPI);

    
    let quantity = 0;
    let totalPrice = 0;
    let totalShipping = 0;
    for (const cartProduct of cart) {
        
        quantity = quantity + cartProduct.quantity;
        totalPrice = totalPrice + cartProduct.price * cartProduct.quantity;
        totalShipping = totalShipping + cartProduct.shipping;
    }
    
    const totalTax = ((totalPrice + totalShipping) * 10) / 100;
    const grandTotal = totalPrice + totalShipping + totalTax;
    
    return (
		<div className='sticky top-0'>
			<h3 className='text-3xl text-center'>Order Summary</h3>
			<div className='mt-5 text-[17px] flex flex-col gap-5'>
				<p>Selected Items: {quantity}</p>
				<p>Total Price: ${totalPrice}</p>
				<p>Total Shipping Charge: ${totalShipping}</p>
				<p>Tax: ${totalTax}</p>
				<h4 className='text-2xl font-bold'>
					Grand Total: ${grandTotal}
				</h4>
			</div>
			<div className='mt-10 flex flex-col gap-4'>
				<div
					onClick={() => handelClearCart()}
					className='flex items-center justify-center gap-2 bg-[#FF3030] h-[48px] rounded-md text-white cursor-pointer'
				>
					<span>Clear Cart</span>
					<TrashIcon className='h-6 w-6 text-white' />
				</div>

				<Link to={"/order-review"}>
					<div className='flex items-center justify-center gap-2 bg-[#FF9900] h-[48px] rounded-md text-white cursor-pointer'>
						<span>Review Order</span>
						<ArrowSmallRightIcon className='h-6 w-6 text-white' />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default OrderSummary;