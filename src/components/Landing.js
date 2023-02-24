import { useCallback } from "react";
import "./Landing.scss";

const Landing = () => {
  const onGALLERYTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='galleryBg']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSERVICESTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='landingRectangle2']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onABOUTTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='landingrectangle']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gallery']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
		<div className="landing">
			<header className="landing-header">
				<section className="landing-logo">
					<img
						className="landing-logo-img"
						alt=""
						src="../jlp-final-horiz-1@2x.png"
					/>
				</section>
				<nav className="landing-nav">
					<span id="landing-nav-item-home" className="landing-nav-item">
						HOME
					</span>
					<span id="landing-nav-item-about" className="landing-nav-item" onClick={onABOUTTextClick}>
						ABOUT
					</span>
					<span id="landing-nav-item-services" className="landing-nav-item" onClick={onSERVICESTextClick}>
						SERVICES
					</span>
					<span id="landing-nav-item-gallery" className="landing-nav-item" onClick={onGALLERYTextClick}>
						GALLERY
					</span>
				</nav>
				<section className="landing-contact">
					<button className="landing-contact-button button" onClick={onContactClick}>
						Contact Us
					</button>
				</section>
			</header>

			<section className="landing-body">
				<h1 className="landing-body-title">Welcome to Just Love Pizza</h1>
				<h2 className="landing-body-content">We are a pizza trailer service that caters Weddings, Birthday Parties, Family Events, Corporate Events, Artisan Markets and more!</h2>
			</section>
		</div>

  );
};

export default Landing;
