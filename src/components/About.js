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
    <div className="about-main">
      <img
        className="placeholder-image"
        alt=""
        src="../placeholderimage@2x.png"
      />
      <div className="about-text">
				<b className="about-title">A little bit about the business</b>
        <div className="about-content">
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
				<button className="about-contact-button button">
						GET IN TOUCH
				</button>
      </div>
    </div>
  );
};

export default About;


