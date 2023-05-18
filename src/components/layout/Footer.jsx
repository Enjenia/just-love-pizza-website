import React, { useCallback } from 'react';
import './Footer.scss';
import Home from '../../images/home.svg';
import Phone from '../../images/phone.svg';
import Image from '../../images/image.svg';
import Truck from '../../images/truck.svg';
import Question from '../../images/question.svg';
import Logo from '../../images/jlp-final-horiz-2@2x.webp';
import enjenia from '../../images/enjenia.webp';

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
						src={Logo}
						loading='lazy'
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
							<img
								className='author-img'
								src={enjenia}
								alt='Enjenia, beautifully brewed software solutions'
								loading='lazy'
							/>{' '}
							Enjenia
						</a>
					</p>
				</span>
			</div>

			<div className='mobile'>
				<nav className='mobile-nav'>
					<span
						id='mobile-nav-item-home'
						role='link'
						tabIndex={0}
						className='mobile-nav-item'
						onClick={() => handleClick('landing')}
						onKeyDown={(e) => handleKeyDown(e, 'landing')}
					>
						<img className='home-icon' alt='' src={Home} loading='lazy' />
						<span className='mobile-nav-item-label'>Home</span>
					</span>
					<span
						id='mobile-nav-item-services'
						role='link'
						tabIndex={0}
						className='mobile-nav-item'
						onClick={() => handleClick('services-main')}
						onKeyDown={(e) => handleKeyDown(e, 'services-main')}
					>
						<img className='truck-icon' alt='' src={Truck} loading='lazy' />
						<span className='mobile-nav-item-label'>Services</span>
					</span>
					<span
						id='mobile-nav-item-about'
						role='link'
						tabIndex={0}
						className='mobile-nav-item'
						onClick={() => handleClick('about-main')}
						onKeyDown={(e) => handleKeyDown(e, 'about-main')}
					>
						<img className='question-icon' alt='' src={Question} loading='lazy' />
						<span className='mobile-nav-item-label'>About</span>
					</span>
					<span
						id='mobile-nav-item-gallery'
						role='link'
						tabIndex={0}
						className='mobile-nav-item'
						onClick={() => handleClick('gallery')}
						onKeyDown={(e) => handleKeyDown(e, 'gallery')}
					>
						<img className='image-icon' alt='' src={Image} loading='lazy' />
						<span className='mobile-nav-item-label'>Gallery</span>
					</span>
					<span
						id='mobile-nav-item-contact'
						role='link'
						tabIndex={0}
						className='mobile-nav-item'
						onClick={() => handleClick('contact-us')}
						onKeyDown={(e) => handleKeyDown(e, 'contact-us')}
					>
						<img className='phone-icon' alt='' src={Phone} loading='lazy' />
						<span className='mobile-nav-item-label'>Contact</span>
					</span>
				</nav>
			</div>
		</div>
	);
};

export default Footer;
