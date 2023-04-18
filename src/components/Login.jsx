import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
	
    return (
		<div className='h-[500px] w-[400px] border border-[#95A0A7] mx-auto my-5 rounded-md p-4 shadow-[-5px_4px_0px_0px_rgba(255,153,0,.3)]'>
			<form>
				<h2 className='text-[35px] text-center'>Login</h2>

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
					<div className='mt-10 bg-[#FFE0B3] rounded-md font-bold'>
						<input
							type='submit'
							name='submit'
							id='submit'
							className='h-[45px] w-full cursor-pointer outline-none px-2'
						/>
					</div>
					<p className='text-center'>
						<small>
							New to Ema-john?{" "}
							<Link
								className='text-[#FF9900]'
								to={"/singin"}
							>
								Create New Account
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

export default Login;