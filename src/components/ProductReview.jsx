import React, { useContext } from 'react';
import { AuthContextAPI } from './AuthContext';
import { FaTrashAlt } from "react-icons/fa";
const ProductReview = ({ product }) => {
    const { img, name, price, shipping } = product;
    const { handelDeleateProduct } = useContext(AuthContextAPI);

    return (
		<div className='border border-[#2A414F] rounded-md p-2 flex items-center gap-4 justify-between'>
			<div className='flex items-center gap-5'>
				<div className='w-[90px] h-[90px]'>
					<img
						src={img}
						alt=''
					/>
				</div>
				<div>
					<h2 className='text-[21px]'>{name}</h2>
					<p className='text-[15px]'>
						Price: <span className='text-[#FF9900]'>${price}</span>
					</p>
					<p className='text-[15px]'>
						Shipping Charge :{" "}
						<span className='text-[#FF9900]'>${shipping}</span>
					</p>
				</div>
			</div>
			<div>
				<div
					onClick={() => handelDeleateProduct(product)}
					className='w-[55px] h-[55px] bg-[#eb575783] rounded-full cursor-pointer flex items-center justify-center text-[24px] text-[#EB5757]'
				>
					<FaTrashAlt />
				</div>
			</div>
		</div>
	);
};

export default ProductReview;