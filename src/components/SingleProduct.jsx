import React, { useContext } from 'react';
import { BeakerIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { addToDB } from '../FakeData/CommonJs';
import { AuthContextAPI } from './AuthContext';

const SingleProduct = ({ product }) => {
	const { handelAddToCart } = useContext(AuthContextAPI);

    const {id, img, name, price, ratings, seller } = product;
    return (
		<div className='border rounded-lg border-[#95A0A7] overflow-hidden'>
			<div className='p-2 h-[286px]'>
				<img
					src={img}
					alt=''
					className='h-full w-full object-cover rounded-md'
				/>
			</div>
			<div className='p-4 flex  flex-col'>
				<div className='text-[21px] flex flex-col min-h-[100px]'>
					<h4>{name}</h4>
					<p className='mt-auto'>Price: ${price}</p>
				</div>
				<div className='mt-5'>
					<p>Manufacturer : {seller}</p>
					<p>Rating : {ratings} start</p>
				</div>
			</div>

			<div
				onClick={() => handelAddToCart(product)}
				className='bg-[#FFE0B3] h-[48px] flex items-center justify-center cursor-pointer gap-2'
			>
				<span>Add to Cart</span>
				<ShoppingCartIcon className='h-6 w-6 text-black' />
			</div>
		</div>
	);
};

export default SingleProduct;