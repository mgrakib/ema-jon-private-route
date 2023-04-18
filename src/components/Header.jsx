import React from 'react';
import LOGO from '../assets/Logo.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
		<div className='bg-[#1C2B35] px-[100px] py-2 flex justify-between items-center'>
			<div>
				<img
					src={LOGO}
					alt=''
				/>
			</div>
			<nav>
				<ul className='flex items-center gap-10 text-white'>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
							to={"/"}
						>
							Order
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
							to={"/order-review"}
						>
							Order Review
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
							to={"/inventroy"}
						>
							Manage Inventory
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
							to={"/login"}
						>
							Login
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
							to={"/singin"}
						>
							Sing Up
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;