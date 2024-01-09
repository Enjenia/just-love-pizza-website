import React, { useCallback } from 'react';
import './Gallery.scss';
import { Helmet } from 'react-helmet';

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
			<div>
				<Helmet>
					<script src='https://static.elfsight.com/platform/platform.js' data-use-service-core defer />
				</Helmet>
				<div className='elfsight-app-0c13f63c-0275-4118-bef6-406aba6bbdfc' data-elfsight-app-lazy />
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
		</div>
	);
};

export default Gallery;
