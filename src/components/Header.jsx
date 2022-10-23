import React from 'react';
import Profile from '../assets/Godswill-Udoh.png';

const Header = () => {
	return (
		<div className='my-8'>
			<div className='flex flex-wrap justify-center my-2'>
				<img
					className='w-40 rounded-full'
					src={Profile}
					alt='Godswill profile'
				/>
			</div>

			<p className='font-bold text-xl text-center'>Godswill Udoh</p>
		</div>
	);
};

export default Header;
