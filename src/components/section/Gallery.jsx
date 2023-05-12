import React from 'react';
import './Gallery.scss';

const Gallery = () => (
	<div className='gallery-main'>
		<div className='gallery-bg' data-scroll-to='gallery' />
		<div className='instagram-link'>
			<div className='gallery-title'>
				{`Check us out on Instagram `}
				<a href='https://www.instagram.com/just.love.pizza/?hl=en'>
					<span className='justlovepizza'>@justlovepizza</span>
				</a>
			</div>
			<img className='pizzaicon' alt='' src='../pizza-icon.svg' />
		</div>
		<div className='instagram-gallery'>
			<div className='instagram-first-column'>
				<img className='icon' alt='' src='https://i.imgur.com/BlfPjJV.jpg' />
				<img className='icon1' alt='' src='https://i.imgur.com/EWDq6Z1.jpg' />
				<img className='icon3' alt='' src='https://i.imgur.com/0JldtFm.jpg' />
				<img className='icon4' alt='' src='https://i.imgur.com/98i6H5b.jpg' />
				<img className='icon6' alt='' src='https://i.imgur.com/e1Ndxtv.jpg' />
			</div>
			<div className='instagram-second-column'>
				<img className='icon7' alt='' src='https://i.imgur.com/UvDQWhr.jpg' />
				<img className='icon9' alt='' src='https://i.imgur.com/K7os5Qg.jpg' />
				<img className='icon10' alt='' src='https://i.imgur.com/VEbUwyw.jpg' />
				<img className='icon12' alt='' src='https://i.imgur.com/C24utwd.jpg' />
				<img className='icon13' alt='' src='https://i.imgur.com/bHlEox2.jpg' />
			</div>
		</div>
	</div>
);

export default Gallery;
