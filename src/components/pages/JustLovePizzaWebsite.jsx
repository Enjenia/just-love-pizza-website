import React, { useState } from 'react';
import Footer from '../layout/Footer';
import Contact from '../section/Contact';
import Gallery from '../section/Gallery';
import Services from '../section/Services';
import About from '../section/About';
import Landing from '../section/Landing';
import Banner from '../section/Banner';
import './JustLovePizzaWebsite.scss';

const JustLovePizzaWebsite = () => {
	const [bannerToggle, setBannerToggle] = useState(true);
	//  test build this page
	return (
		<div className='just-love-pizza-website'>
			{bannerToggle ? <Banner setBannerToggle={setBannerToggle} /> : null}
			<Landing bannerToggle={bannerToggle} />
			<Services />
			<About />
			<Gallery />
			<Contact />
			<Footer />
		</div>
	);
};

export default JustLovePizzaWebsite;
