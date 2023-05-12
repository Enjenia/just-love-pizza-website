import React from 'react';
import './Gallery.scss';

const Gallery = () => (
	<div className='gallery-main'>
		<div className='gallery-bg' data-scroll-to='gallery' />
		<div className='instagram-link'>
			<div className='gallery-title'>
				{`Check us out on Instagram `}
				<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
					<span className='justlovepizza'>@justlovepizza</span>
				</a>
			</div>
			<img className='pizzaicon' alt='' src='../pizza-icon.svg' />
		</div>
		<div className='instagram-gallery'>
			<div className='instagram-first-column'>
				<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
					<img className='icon' alt='' src='https://i.imgur.com/BlfPjJV.jpg' />
				</a>
				<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
					<img className='icon1' alt='' src='https://i.imgur.com/EWDq6Z1.jpg' />
				</a>
				<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
					<img className='icon3' alt='' src='https://i.imgur.com/0JldtFm.jpg' />
				</a>
				<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
					<img className='icon4' alt='' src='https://i.imgur.com/98i6H5b.jpg' />
				</a>
				<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
					<img className='icon6' alt='' src='https://i.imgur.com/e1Ndxtv.jpg' />
				</a>
			</div>
			<div className='instagram-second-column'>
				<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
					<img className='icon7' alt='' src='https://i.imgur.com/UvDQWhr.jpg' />
				</a>
				<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
					<img className='icon9' alt='' src='https://i.imgur.com/K7os5Qg.jpg' />
				</a>
				<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
					<img className='icon10' alt='' src='https://i.imgur.com/VEbUwyw.jpg' />
				</a>
				<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
					<img className='icon12' alt='' src='https://i.imgur.com/C24utwd.jpg' />
				</a>
				<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
					<img className='icon13' alt='' src='https://i.imgur.com/bHlEox2.jpg' />
				</a>
			</div>
		</div>
	</div>
);

export default Gallery;
