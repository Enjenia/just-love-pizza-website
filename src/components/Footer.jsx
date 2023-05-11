import { useCallback } from "react";
import "./Footer.scss";

const Footer = () => {
  const onFOOTERLOGOClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='landing']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGALLERYTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gallery']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSERVICESTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='services-main']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onABOUTTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='about-main']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHOMETextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='landing']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCONTACTFooterClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='contact-us']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="footer">
			<header className="footer-header">
				<section className="footer-logo" onClick={onFOOTERLOGOClick}>
					<img
						className="footer-logo-img"
						alt=""
						src="../jlp-final-horiz-1@2x.png"
					/>
				</section>
				<nav className="footer-nav">
					<span id="footer-nav-item-home" className="footer-nav-item" onClick={onHOMETextClick}>
						HOME
					</span>
					<span id="footer-nav-item-about" className="footer-nav-item" onClick={onABOUTTextClick}>
						ABOUT
					</span>
					<span id="footer-nav-item-services" className="footer-nav-item" onClick={onSERVICESTextClick}>
						SERVICES
					</span>
					<span id="footer-nav-item-gallery" className="footer-nav-item" onClick={onGALLERYTextClick}>
						GALLERY
					</span>
				</nav>
				<section className="footer-contact">
					<button className="footer-contact-button button" onClick={onCONTACTFooterClick}>
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
