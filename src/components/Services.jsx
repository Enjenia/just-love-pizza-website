import React from 'react';
import './Services.scss';

const Services = () => (
	<div className='services-main' data-scroll-to='services-main'>
		<div className='our-catering-services'>OUR CATERING SERVICES</div>

		<div className='service-cards'>
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
		</div>
	</div>
);

export default Services;
