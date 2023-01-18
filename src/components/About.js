import { useCallback } from "react";
import "./About.scss";

const About = () => {
  const onContactButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gallery']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="about1">
      <div className="about-bg">
        <img
          className="joshuabartell6vvibtvl90aunspla-icon1"
          alt=""
          src="../joshuabartell6vvibtvl90aunsplash-2@2x.png"
        />
        <div className="landingrectangle" data-scroll-to="landingrectangle" />
      </div>
      <button className="contact-button" onClick={onContactButtonClick}>
        <button className="button" />
        <b className="get-in-touch1">GET IN TOUCH</b>
      </button>
      <img
        className="placeholder-image-icon"
        alt=""
        src="../placeholderimage@2x.png"
      />
      <div className="about-text">
        <div className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laud
        </div>
        <b className="a-little-bit">A little bit about the business</b>
      </div>
    </div>
  );
};

export default About;
