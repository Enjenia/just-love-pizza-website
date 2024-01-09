import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './Landing.scss';
import Header from '../layout/Header';
import located from '../../images/location-sign-svgrepo-com.svg';

const Landing = ({ bannerToggle }) => {
	const handleClick = useCallback((location) => {
		const anchor = document.querySelector(`[data-scroll-to='${location}']`);
		if (anchor) {
			anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
		}
	}, []);

	const handleKeyDown = (e, location) => {
		if (e.keyCode === 13) {
			handleClick(location);
		}
	};
	return (
		<div className='landing' data-scroll-to='landing' style={{ paddingTop: bannerToggle ? '2em' : '0em' }}>
			<Header />

			<section className='landing-body'>
				<h1 className='landing-body-title'>Welcome to Just Love Pizza</h1>
				<p className='landing-body-content'>
					Craving wood-fired pizza for your event? Let us bring our wood-fired pizza oven to you! Our passionate team
					will serve up a variety of tasty pizzas buffet-style for your guests to enjoy. Contact us now to elevate your
					event with our unforgettable wood-fired pizza.
				</p>
				<div className='we-are-located'>
					<img className='locate' alt='' src={located} loading='lazy' />
					<h1 className='our-location'>Tamworth, Staffordshire</h1>
				</div>
			</section>
			<section className='return-home'>
				<button
					className='landing-contact-button button'
					type='button'
					onClick={() => handleClick('contact-us')}
					onKeyDown={(e) => handleKeyDown(e, 'contact-us')}
				>
					CONTACT US
				</button>
			</section>
		</div>
	);
};

Landing.propTypes = {
	bannerToggle: PropTypes.bool.isRequired,
};

export default Landing;
