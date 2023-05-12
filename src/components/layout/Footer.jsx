import React, { useCallback } from 'react';
import './Footer.scss';
import enjenia from '../../images/enjenia.png';

const Footer = () => {
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
		<div className='footer'>
			<header className='footer-header'>
				<section
					className='footer-logo'
					role='link'
					tabIndex={0}
					onClick={() => handleClick('landing')}
					onKeyDown={(e) => handleKeyDown(e, 'landing')}
				>
					<img
						className='footer-logo-img'
						alt='Just Love Pizza, Traditional Wood Fired Pizza'
						src='../jlp-final-horiz-1@2x.png'
					/>
				</section>
				<nav className='footer-nav'>
					<span
						id='footer-nav-item-home'
						role='link'
						tabIndex={0}
						className='footer-nav-item'
						onClick={() => handleClick('landing')}
						onKeyDown={(e) => handleKeyDown(e, 'landing')}
					>
						HOME
					</span>
					<span
						id='footer-nav-item-about'
						role='link'
						tabIndex={0}
						className='footer-nav-item'
						onClick={() => handleClick('about-main')}
						onKeyDown={(e) => handleKeyDown(e, 'about-main')}
					>
						ABOUT
					</span>
					<span
						id='footer-nav-item-services'
						role='link'
						tabIndex={0}
						className='footer-nav-item'
						onClick={() => handleClick('services-main')}
						onKeyDown={(e) => handleKeyDown(e, 'services-main')}
					>
						SERVICES
					</span>
					<span
						id='footer-nav-item-gallery'
						role='link'
						tabIndex={0}
						className='footer-nav-item'
						onClick={() => handleClick('gallery')}
						onKeyDown={(e) => handleKeyDown(e, 'gallery')}
					>
						GALLERY
					</span>
				</nav>
				<section className='footer-contact'>
					<button className='footer-contact-button button' type='button' onClick={() => handleClick('contact-us')}>
						CONTACT US
					</button>
				</section>
			</header>

			<div className='copyright'>
				<span className='services-txt'>
					<p className='copyright-2022'>{`© Copyright  2022  Just Love Pizza  All Rights Reserved. `}</p>
					<p className='designed-and-developed'>
						Designed and Developed by{' '}
						<a className='author-link' href='https://enjenia.com' target='_blank' rel='noreferrer'>
							<img className='author-img' src={enjenia} alt='Enjenia, beautifully brewed software solutions' /> Enjenia
						</a>
					</p>
				</span>
			</div>
		</div>
	);
};

export default Footer;
