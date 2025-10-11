import React, { useCallback } from 'react';
import './Header.scss';
import Logo from '../../images/jlp-final-horiz-2@2x.webp';

const Header = () => {
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
		<header className='landing-header'>
			<section
				className='landing-logo'
				role='link'
				tabIndex={0}
				onClick={() => handleClick('landing')}
				onKeyDown={(e) => handleKeyDown(e, 'landing')}
			>
				<img className='landing-logo-img' alt='Just Love Pizza, Traditional Wood Fired Pizza' src={Logo} />
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
				<button
					className='landing-contact-button button'
					type='button'
					onClick={() => handleClick('contact-us')}
					onKeyDown={(e) => handleKeyDown(e, 'contact-us')}
				>
					CONTACT US
				</button>
			</section>
		</header>
	);
};

export default Header;
