import React, { useCallback } from 'react';
import './About.scss';

const About = () => {
	const handleClick = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='contact-us']");
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
		<div className='about-main' data-scroll-to='about-main'>
			<section className='about-text'>
				<h1>
					A little bit more about the business
					<section className='return-home'>
						<button
							className='landing-contact-button button'
							type='button'
							onClick={() => handleClick('landing')}
							onKeyDown={(e) => handleKeyDown(e, 'landing')}
						>
							RETURN HOME?
						</button>
					</section>
				</h1>
				<div className='julie-text'>
					<img className='julie' alt='' src='../julie.png' loading='lazy' />
					<section className='text-right'>
						<p>
							Welcome to our wood-fired mobile events pizza business, run by a passionate husband and wife team! We
							specialise in bringing the authentic taste of wood-fired pizza to events of all sizes, whether it&apos;s a
							wedding, corporate event, or private party. Our mobile setup allows us to cater to your needs wherever you
							are, be it at a scenic outdoor location or in the comfort of your own back garden.
						</p>
						<p>
							We can also be found in the bustling atmosphere of artisan markets. Our pizzas are made using only the
							freshest ingredients and cooked to perfection in minutes in our custom-made wood-fired oven. The result is
							a crispy, flavourful crust and toppings that burst with deliciousness.
						</p>
						<p>
							We offer two types of service for our wood-fired pizzas. The first is pizzas cooked to order, where guests
							can choose from our menu and watch as their pizza is cooked to perfection in our wood-fired oven. The
							second option is a buffet-style service, where we serve a variety of pizzas and guests can help themselves
							to their favourite slices.
						</p>
					</section>
				</div>
				<div className='middle'>
					<p>
						In addition to our delicious wood-fired pizzas, we also offer a small breakfast service, perfect for morning
						events or markets, all made using high-quality ingredients and cooked in our wood-fired oven.
					</p>
				</div>
				<div className='lewis-text'>
					<section className='text-left'>
						<p>
							As a husband and wife team, we take pride in delivering a high-quality service that exceeds your
							expectations. We are committed to ensuring your event is stress-free and enjoyable, leaving you with
							unforgettable memories.
						</p>
						<p>
							If you&apos;re looking for a unique and memorable way to cater your event, look no further than our
							wood-fired mobile events pizza business. Contact us today to discuss how we can make your event one to
							remember!
						</p>
					</section>
					<img className='lewis' alt='' src='../lewis.png' loading='lazy' />
				</div>
				<button
					className='about-contact-button button'
					type='button'
					onClick={() => handleClick('landing')}
					onKeyDown={(e) => handleKeyDown(e, 'landing')}
				>
					GET IN TOUCH
				</button>
			</section>
		</div>
	);
};

export default About;
