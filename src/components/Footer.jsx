import React from 'react';

const Footer = () => {
	return (
		<div className='flex justify-between mx-8'>
			<img
				className='w-3/4'
				src='../../public/assets/zuri.png'
				alt='Zuri logo'
			/>
			<p className='text-base text-[#667085] font-normal'>
				HNG Internship 9 Frontend Task
			</p>
			<img src='../../public/assets/I4G.png' alt='I4G logo' />
		</div>
	);
};

export default Footer;
