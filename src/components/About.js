import { useCallback } from "react";
import "./About.scss";

const About = () => {
	const onContactClick = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='contact-us']");
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	}, []);

	return (
		<div className="about-main" data-scroll-to="about-main">
			<section className="about-text">
				<div className="julie-paragraphs">
					<div className="julie">
						<img className="julie" alt="" src="../julie.png" />
					</div>
					<div className="about-text-top">
						<p className="about-title">A little bit more about the business</p>
						<p className="p1">
							Welcome to our wood-fired mobile events pizza business, run by a
							passionate husband and wife team!
						</p>
						<p className="p2">
							We specialise in bringing the authentic taste of wood-fired pizza
							to events of all sizes, whether it's a wedding, corporate event,
							or private party. Our mobile setup allows us to cater to your
							needs wherever you are, be it at a scenic outdoor location or in
							the comfort of your own back garden. We can also be found in the
							bustling atmosphere of artisan markets. Our pizzas are made using
							only the freshest ingredients and cooked to perfection in minutes
							in our custom-made wood-fired oven. The result is a crispy,
							flavourful crust and toppings that burst with deliciousness.
						</p>
						<p className="p3">
							We offer two types of service for our wood-fired pizzas. The first
							is pizzas cooked to order, where guests can choose from our menu
							and watch as their pizza is cooked to perfection in our wood-fired
							oven. The second option is a buffet-style service, where we serve
							a variety of pizzas and guests can help themselves to their
							favourite slices.
						</p>
					</div>
				</div>

				<div className="middle">
					<p className="p4">
						In addition to our delicious wood-fired pizzas, we also offer a
						small breakfast service, perfect for morning events or markets, all
						made using high-quality ingredients and cooked in our wood-fired
						oven.
					</p>
				</div>

				<div className="lewis-paragraphs">
					<div className="lewis-text">
						<p className="p5">
							As a husband and wife team, we take pride in delivering a
							high-quality service that exceeds your expectations. We are
							committed to ensuring your event is stress-free and enjoyable,
							leaving you with unforgettable memories.
						</p>
						<p className="p6">
							If you're looking for a unique and memorable way to cater your
							event, look no further than our wood-fired mobile events pizza
							business. Contact us today to discuss how we can make your event
							one to remember!
						</p>
						<button
							className="about-contact-button button"
							onClick={onContactClick}
						>
							GET IN TOUCH
						</button>
					</div>
					<div className="lewis">
						<img className="lewis" alt="" src="../lewis.png" />
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
