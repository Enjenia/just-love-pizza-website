import React from 'react';
import './Landing.scss';
import Header from '../layout/Header';

const Landing = () => (
	<div className='landing' data-scroll-to='landing'>
		<Header />

		<section className='landing-body'>
			<h1 className='landing-body-title'>Welcome to Just Love Pizza</h1>
			<p className='landing-body-content'>
				Craving wood-fired pizza for your event? Let us bring our wood-fired pizza oven to you! Our passionate team will
				serve up a variety of tasty pizzas buffet-style for your guests to enjoy. Contact us now to elevate your event
				with our unforgettable wood-fired pizza.
			</p>
		</section>
	</div>
);

export default Landing;
