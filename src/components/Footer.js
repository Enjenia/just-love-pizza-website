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
      <div className="footer-bg" />
      <img
        className="jlp-final-horiz-2"
        alt=""
        src="../jlp-final-horiz-2@2x.png"
        onClick={onJLPFINALHORIZ2Click}
      />
      <div className="copyright-2022-just-container">
        <span className="services-txt">
          <p className="copyright-2022">{`© Copyright  2022  Just Love Pizza  All Rights Reserved. `}</p>
          <p className="designed-and-developed">
            Designed and Developed by Enjenia
          </p>
        </span>
      </div>
      <div className="footer-child" />
      <div className="contacts">
        <b className="n07868017133">07868017133</b>
        <b className="justlovepizzainfogmailcom">
          justlovepizza.info@gmail.com
        </b>
        <b className="justlovepizzacouk">justlovepizza.co.uk</b>
      </div>
      <div className="footer-nav">
        <b className="gallery" onClick={onGalleryTextClick}>
          GALLERY
        </b>
        <b className="services" onClick={onServicesTextClick}>
          <span className="services-txt">
            <p className="copyright-2022">SERVICES</p>
          </span>
        </b>
        <b className="about" onClick={onAboutTextClick}>
          ABOUT
        </b>
        <b className="home" onClick={onHomeTextClick}>
          HOME
        </b>
        <button className="contact-footer" onClick={onContactFooterClick}>
          <div className="rectangle4" />
          <b className="contactus">CONTACT US</b>
        </button>
      </div>
    </div>
  );
};

export default Footer;
