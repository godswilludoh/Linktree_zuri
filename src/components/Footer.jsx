import React from 'react';
import Zuri from '../assets/zuri.png';
import I4G from '../assets/I4G.png';
const Footer = () => {
	return (
		<div className='flex justify-between mx-10 my-10'>
			<div>
				<img className='' src={Zuri} alt='Zuri logo' />
			</div>

			<p className='text-base text-[#667085] font-normal'>
				HNG Internship 9 Frontend Task
			</p>
			<div>
				<img className='' src={I4G} alt='I4G logo' />
			</div>
		</div>
	);
};

export default Footer;
