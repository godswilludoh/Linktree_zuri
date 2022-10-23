import React from 'react';
import Slack from '../assets/slack.png';
import Github from '../assets/Icon.png';

const Icons = () => {
	return (
		<div className='flex  justify-center gap-8'>
			<div>
				<img src={Slack} alt='Slack icon' />
			</div>
			<div>
				<img src={Github} alt='Github icon' />
			</div>
		</div>
	);
};

export default Icons;
