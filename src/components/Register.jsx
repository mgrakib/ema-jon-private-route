import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
		<div className='h-[500px] w-[400px] border border-[#95A0A7] mx-auto my-5 rounded-md p-4 shadow-[-5px_4px_0px_0px_rgba(255,153,0,.3)]'>
			<form>
				<h2 className='text-[35px] text-center'>Sing Up</h2>

				<div className='mx-auto w-[315px]'>
					<div className='mb-3'>
						<label
							htmlFor='email'
							className='block'
						>
							Email
						</label>
						<input
							type='email'
							name='email'
							id='email'
							className='h-[45px] w-full border border-[#95A0A7] rounded-md outline-none px-2'
						/>
					</div>

					<div className='mb-3'>
						<label
							htmlFor='password'
							className='block'
						>
							Password
						</label>
						<input
							type='password'
							name='password'
							id='password'
							className='h-[45px] w-full border border-[#95A0A7] rounded-md outline-none px-2'
						/>
					</div>

					<div className='mb-3'>
						<label
							htmlFor='consformPassword'
							className='block'
						>
							Consform Password
						</label>
						<input
							type='password'
							name='consformPassword'
							id='consformPassword'
							className='h-[45px] w-full border border-[#95A0A7] rounded-md outline-none px-2'
						/>
					</div>
					<div className='mt-8 bg-[#FFE0B3] rounded-md font-bold'>
						<input
							type='submit'
							name='submit'
							id='submit'
							className='h-[45px] w-full cursor-pointer outline-none px-2'
						/>
					</div>
					<p className='text-center'>
						<small>
							Already have an account?{" "}
							<Link
								className='text-[#FF9900]'
								to={"/login"}
							>
								Login
							</Link>
						</small>
					</p>

					<div>
						<p className='text-center my-1'>
							<small>or</small>
						</p>

						<div className='bg-[#FFE0B3] h-[45px] w-full cursor-pointer rounded-md flex items-center justify-center gap-2'>
							<FaGoogle className='text-[#34A853]' />{" "}
							<small>Continue with Google</small>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Register;