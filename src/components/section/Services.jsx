import React, { useCallback } from 'react';
import JLP from '../../images/JLP OVEN 2.webp';
import './Services.scss';

const Service = () => {
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
		<div className='services-section'>
			<div className='services' data-scroll-to='services-main' />

			<div className='services-main'>
				<div className='services-body'>
					<div className='services-info'>
						<p className='we-do'>We do...</p>
						<p className='we-do-items'>WEDDINGS</p>
						<p className='we-do-items'>BIRTHDAY PARTIES</p>
						<p className='we-do-items'>FAMILY EVENTS</p>
						<p className='we-do-items'>CORPORATE EVENTS</p>
						<p className='we-do-items'>ARTISAN MARKETS....and MORE!</p>
					</div>
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

				<div className='contact-image'>
					<img className='jlp-oven-2' alt='' src={JLP} loading='lazy' />
				</div>
			</div>
		</div>
	);
};

export default Service;
