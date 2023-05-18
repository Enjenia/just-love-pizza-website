import React, { useCallback } from 'react';
import './Gallery.scss';

const Gallery = () => {
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
		<div className='gallery-main'>
			<div className='gallery-bg' data-scroll-to='gallery' />
			<div className='instagram-link'>
				<div className='gallery-title'>
					{`Check us out on Instagram `}
					<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
						<span className='justlovepizza'>
							@justlovepizza <img className='pizzaicon' alt='' src='../pizza-icon.svg' loading='lazy' />{' '}
						</span>
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

			<div className='instagram-gallery'>
				<div className='instagram-first-column'>
					<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
						<img className='icon' alt='' src='https://i.imgur.com/r6oPONj.jpg' loading='lazy' />
					</a>
					<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
						<img className='icon1' alt='' src='https://i.imgur.com/sfYzaOM.jpg' loading='lazy' />
					</a>
					<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
						<img className='icon3' alt='' src='https://i.imgur.com/w2BrmMy.jpg' loading='lazy' />
					</a>
					<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
						<img className='icon4' alt='' src='https://i.imgur.com/bX80kvm.jpg' loading='lazy' />
					</a>
					<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
						<img className='icon6' alt='' src='https://i.imgur.com/KurBSTP.jpg' loading='lazy' />
					</a>
				</div>
				<div className='instagram-second-column'>
					<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
						<img className='icon7' alt='' src='https://i.imgur.com/uZGwlpT.jpg' loading='lazy' />
					</a>
					<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
						<img className='icon9' alt='' src='https://i.imgur.com/fDTliXn.jpg' loading='lazy' />
					</a>
					<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
						<img className='icon10' alt='' src='https://i.imgur.com/8udbDOP.jpg' loading='lazy' />
					</a>
					<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
						<img className='icon12' alt='' src='https://i.imgur.com/owgySY7.jpg' loading='lazy' />
					</a>
					<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
						<img className='icon13' alt='' src='https://i.imgur.com/IvYDTc9.jpg' loading='lazy' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
