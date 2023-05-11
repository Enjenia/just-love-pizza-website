import React, { useCallback } from 'react';
import './Landing.scss';

const Landing = () => {
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
		<div className='landing' data-scroll-to='landing'>
			<header className='landing-header'>
				<section
					className='landing-logo'
					role='link'
					tabIndex={0}
					onClick={() => handleClick('landing')}
					onKeyDown={(e) => handleKeyDown(e, 'landing')}
				>
					<img className='landing-logo-img' alt='' src='../jlp-final-horiz-1@2x.png' />
				</section>
				<nav className='landing-nav'>
					<span
						id='landing-nav-item-home'
						className='landing-nav-item'
						role='link'
						tabIndex={0}
						data-scroll-to='landing'
						onClick={() => handleClick('landing')}
						onKeyDown={(e) => handleKeyDown(e, 'landing')}
					>
						HOME
					</span>
					<span
						id='landing-nav-item-about'
						role='link'
						tabIndex={0}
						className='landing-nav-item'
						onClick={() => handleClick('about-main')}
						onKeyDown={(e) => handleKeyDown(e, 'about-main')}
					>
						ABOUT
					</span>
					<span
						id='landing-nav-item-services'
						role='link'
						tabIndex={0}
						className='landing-nav-item'
						onClick={() => handleClick('services-main')}
						onKeyDown={(e) => handleKeyDown(e, 'services-main')}
					>
						SERVICES
					</span>
					<span
						id='landing-nav-item-gallery'
						role='link'
						tabIndex={0}
						className='landing-nav-item'
						onClick={() => handleClick('gallery')}
						onKeyDown={(e) => handleKeyDown(e, 'gallery')}
					>
						GALLERY
					</span>
				</nav>
				<section className='landing-contact'>
					<button className='landing-contact-button button' type='button' onClick={() => handleClick('contact-us')}>
						CONTACT US
					</button>
				</section>
			</header>

			<section className='landing-body'>
				<h1 className='landing-body-title'>Welcome to Just Love Pizza</h1>
				<p className='landing-body-content'>
					Craving wood-fired pizza for your event? Let us bring our wood-fired pizza oven to you! Our passionate team
					will serve up a variety of tasty pizzas buffet-style for your guests to enjoy. Contact us now to elevate your
					event with our unforgettable wood-fired pizza.
				</p>
			</section>
		</div>
	);
};

export default Landing;
