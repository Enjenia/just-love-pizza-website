import { useCallback } from "react";
import "./Landing.scss";

const Landing = () => {
	const onGALLERYTextClick = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='gallery']");
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	}, []);

	const onSERVICESTextClick = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='services-main']");
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	}, []);

	const onABOUTTextClick = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='about-main']");
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	}, []);

	const onContactClick = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='contact-us']");
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	}, []);

	return (
		<div className="landing" data-scroll-to="landing">
			<header className="landing-header">
				<section className="landing-logo">
					<img
						className="landing-logo-img"
						alt=""
						src="../jlp-final-horiz-1@2x.png"
					/>
				</section>
				<nav className="landing-nav">
					<span
						id="landing-nav-item-home"
						className="landing-nav-item"
						data-scroll-to="landing"
					>
						HOME
					</span>
					<span
						id="landing-nav-item-about"
						className="landing-nav-item"
						onClick={onABOUTTextClick}
					>
						ABOUT
					</span>
					<span
						id="landing-nav-item-services"
						className="landing-nav-item"
						onClick={onSERVICESTextClick}
					>
						SERVICES
					</span>
					<span
						id="landing-nav-item-gallery"
						className="landing-nav-item"
						onClick={onGALLERYTextClick}
					>
						GALLERY
					</span>
				</nav>
				<section className="landing-contact">
					<button
						className="landing-contact-button button"
						onClick={onContactClick}
					>
						CONTACT US
					</button>
				</section>
			</header>

			<section className="landing-body">
				<h1 className="landing-body-title">Welcome to Just Love Pizza</h1>
				<p className="landing-body-content">
					Craving wood-fired pizza for your event? Let us bring our wood-fired
					pizza oven to you! Our passionate team will serve up a variety of
					tasty pizzas buffet-style for your guests to enjoy. Contact us now to
					elevate your event with our unforgettable wood-fired pizza.
				</p>
			</section>
		</div>
	);
};

export default Landing;
