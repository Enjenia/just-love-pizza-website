import React from 'react';
import Footer from '../layout/Footer';
import Contact from '../section/Contact';
import Gallery from '../section/Gallery';
import Services from '../section/Services';
import About from '../section/About';
import Landing from '../section/Landing';
import './JustLovePizzaWebsite.scss';

const JustLovePizzaWebsite = () => (
	<div className='just-love-pizza-website'>
		<Landing />
		<Services />
		<About />
		<Gallery />
		<Contact />
		<Footer />
	</div>
);

export default JustLovePizzaWebsite;
