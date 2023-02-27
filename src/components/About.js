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
      <section className="placeholder">
				<img
        className="placeholder-image"
        alt=""
        src="../placeholderimage@2x.png"
      	/>
			</section>
      <section className="about-text">
				<p className="about-title">A little bit about the business</p>
        <p className="about-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laud
        </p>
				<button className="about-contact-button button" onClick={onContactClick}>
						GET IN TOUCH
				</button>
      </section>
    </div>
  );
};

export default About;


