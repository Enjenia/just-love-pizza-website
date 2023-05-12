import React from 'react';
import './Contact.scss';

const Contact = () => (
	<div className='contact-section'>
		<div className='contact' data-scroll-to='contact-us' />

		<div className='contact-main'>
			<div className='contact-body'>
				<div className='contact-info'>
					<p className='get-in-touch'>Get in touch</p>
					<p className='website'>justlovepizza.co.uk</p>
					<a href='tel:+447868017133'>
						<p className='mobile'>+44 7868 017133</p>
					</a>
					<a href='mailto:justlovepizza.info@gmail.com'>
						<p className='email'>justlovepizza.info@gmail.com</p>
					</a>
				</div>

				<div className='social-media-icons'>
					<a href='https://www.facebook.com/profile.php?id=100086715121290' target='_blank' rel='noreferrer'>
						<img className='facebook-icon' alt='' src='../facebook.svg' />
					</a>
					<a href='https://twitter.com/Just_Love_Pizza' target='_blank' rel='noreferrer'>
						<img className='twitter-icon' alt='' src='../twitter.svg' />
					</a>
					<a href='https://www.instagram.com/just.love.pizza/?hl=en' target='_blank' rel='noreferrer'>
						<img className='instagram-icon' alt='' src='../instagram.svg' />
					</a>
				</div>
			</div>

			<div className='contact-image'>
				<img className='jlp-oven-1' alt='' src='../jlp-oven-1@2x.png' />
			</div>
		</div>
	</div>
);

export default Contact;
