import React, { useCallback } from 'react';
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
						<p className='weddings'>WEDDINGS</p>
						<p className='weddings'>BIRTHDAY PARTIES</p>
						<p className='weddings'>FAMILY EVENTS</p>
						<p className='weddings'>CORPORATE EVENTS</p>
						<p className='weddings'>ARTISAN MARKETS</p>
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
					<img className='jlp-oven-2' alt='' src='../JLP OVEN 2.png' loading='lazy' />
				</div>
			</div>
		</div>
	);
};

export default Service;

/*		<div className='service-cards'>
			<div className='engagement-parties-card'>
				<div className='engagement-parties'>ENGAGEMENT PARTIES</div>
			</div>

			<div className='bridal-shower-card'>
				<div className='bridal-shower'>BRIDAL SHOWERS</div>
			</div>

			<div className='popup-events-card'>
				<div className='popup-events'>POP-UP EVENTS</div>
			</div>

			<div className='birthdays-card'>
				<div className='birthdays'>BIRTHDAYS</div>
			</div>
			<div className='family-events-card'>
				<div className='family-events'>FAMILY EVENTS</div>
			</div>

			<div className='artisan-market-card'>
				<div className='artisan-markets'>ARTISAN MARKETS</div>
			</div>

			<div className='corporate-events-card'>
				<div className='corporate-events'>CORPORATE EVENTS</div>
			</div>
			<div className='weddings-card'>
				<div className='weddings'>WEDDINGS</div>
			</div>
		</div> */
