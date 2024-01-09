import React from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';
import close from '../../images/icons8-close.svg';

const Banner = ({ setBannerToggle }) => (
	<div className='banner-body'>
		<section className='banner-content'>
			<div className='pizza-start'>
				<img className='pizza-icon' alt='' src='../pizza-icon.svg' loading='lazy' />
			</div>
			<h1 className='banner-body-text'>
				Unlock a 10% discount for your exclusive event when you secure your reservation with a deposit three months
				prior to your booking date!
			</h1>
			<div className='pizza-end'>
				<img className='pizza-icon' alt='' src='../pizza-icon.svg' loading='lazy' />
			</div>
		</section>

		<section className='close'>
			<button type='button' onClick={() => setBannerToggle(false)}>
				<img className='close-button' alt='' src={close} loading='lazy' />
			</button>
		</section>
	</div>
);

Banner.propTypes = {
	setBannerToggle: PropTypes.func.isRequired,
};

export default Banner;
