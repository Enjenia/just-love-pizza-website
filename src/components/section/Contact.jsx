import React, { useCallback } from 'react';
import './Contact.scss';
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import twitter from '../../images/twitter.svg';
import JLP from '../../images/JLP OVEN 2.webp';

const Contact = () => {
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
		<div className='contact-section'>
			<div className='contact' data-scroll-to='contact-us' />

			<div className='contact-main'>
				<div className='contact-body'>
					<div className='contact-info'>
						<p className='get-in-touch'>Just get in touch</p>
						<p className='email'>
							Email - <a href='mailto:justlovepizza.info@gmail.com'>justlovepizza.info@gmail.com</a>
						</p>
						<p className='mobile'>
							Or call - <a href='tel:+447868017133'>07868017133</a>
						</p>
						<p className='website'>just love social?</p>
					</div>
					<div className='social-media-icons'>
						<a href='https://www.facebook.com/profile.php?id=100086715121290' target='_blank' rel='noreferrer'>
							<img className='facebook-icon' alt='' src={facebook} loading='lazy' />
						</a>
						<a href='https://twitter.com/Just_Love_Pizza' target='_blank' rel='noreferrer'>
							<img className='twitter-icon' alt='' src={twitter} loading='lazy' />
						</a>
						<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
							<img className='instagram-icon' alt='' src={instagram} loading='lazy' />
						</a>
					</div>
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
				</div>

				<div className='contact-image'>
					<img className='jlp-oven-1' alt='' src={JLP} loading='lazy' />
				</div>
			</div>
		</div>
	);
};

export default Contact;
