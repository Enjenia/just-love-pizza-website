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
						Home
					</span>
					<span id="landing-nav-item-about" className="landing-nav-item" onClick={onABOUTTextClick}>
						About
					</span>
					<span id="landing-nav-item-services" className="landing-nav-item" onClick={onSERVICESTextClick}>
						Services
					</span>
					<span id="landing-nav-item-gallery" className="landing-nav-item" onClick={onGALLERYTextClick}>
						Gallery
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

    // <div className="landing">
    //   <div className="bg">
    //     <img
    //       className="andreasronningens2ysslw97l4uns-icon"
    //       alt=""
    //       src="../andreasronningens2ysslw97l4unsplash-1@2x.png"
    //     />
    //     <div className="landingrectangle1" data-scroll-to="landingRectangle" />
    //   </div>
    //   <div className="text">
    //     <div className="we-are-a">
    //       We are a pizza trailer service that caters Weddings, Birthday Parties,
    //       Family Events, Corporate Events, Artisan Markets and more!
    //     </div>
    //     <b className="welcome-to-just">Welcome to Just Love Pizza</b>
    //   </div>
    //   <div className="logo">
    //     <img
    //       className="jlp-final-horiz-1"
    //       alt=""
    //       src="../jlp-final-horiz-1@2x.png"
    //     />
    //   </div>
    //   <div className="nav">
    //     <b className="gallery3" onClick={onGALLERYTextClick}>
    //       GALLERY
    //     </b>
    //     <b className="services3" onClick={onSERVICESTextClick}>
    //       <span className="services-txt1">
    //         <p className="services4">SERVICES</p>
    //       </span>
    //     </b>
    //     <b className="about2" onClick={onABOUTTextClick}>
    //       ABOUT
    //     </b>
    //     <b className="home1">HOME</b>
    //     <button className="contact1" onClick={onContactClick}>
    //       <div className="contact-child" />
    //       <b className="contact-us">CONTACT US</b>
    //     </button>
    //   </div>
    // </div>
  );
};

export default Landing;
