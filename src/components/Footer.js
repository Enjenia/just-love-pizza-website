import { useCallback } from "react";
import "./Footer.scss";

const Footer = () => {
  const onJLPFINALHORIZ2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='landingRectangle']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGalleryTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='galleryBg']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onServicesTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='landingRectangle2']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='landingrectangle']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='landingRectangle']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactFooterClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gallery']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="footer">
			<header className="footer-header">
				<section className="footer-logo">
					<img
						className="footer-logo-img"
						alt=""
						src="../jlp-final-horiz-1@2x.png"
					/>
				</section>
				<nav className="footer-nav">
					<span id="footer-nav-item-home" className="footer-nav-item">
						HOME
					</span>
					<span id="footer-nav-item-about" className="footer-nav-item">
						ABOUT
					</span>
					<span id="footer-nav-item-services" className="footer-nav-item">
						SERVICES
					</span>
					<span id="footer-nav-item-gallery" className="footer-nav-item">
						GALLERY
					</span>
				</nav>
				<section className="footer-contact">
					<button className="footer-contact-button button">
						CONTACT US
					</button>
				</section>
			</header>

			<div className="copyright">
        <span className="services-txt">
          <p className="copyright-2022">{`© Copyright  2022  Just Love Pizza  All Rights Reserved. `}</p>
          <p className="designed-and-developed">
            Designed and Developed by Enjenia
          </p>
        </span>
      </div>

    </div>
  );
};

export default Footer;
