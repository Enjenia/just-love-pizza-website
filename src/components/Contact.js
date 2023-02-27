import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact" data-scroll-to="contact-us" />

		<div className="contact-main">
			<div className="contact-body">

				<div className="contact-info">
					<p className="get-in-touch">Get in touch</p>
					<p className="website">justlovepizza.co.uk</p>
					<p className="mobile">07868017133</p>
					<p className="email">justlovepizza.info@gmail.com</p>
				</div>

				<div className="social-media-icons">
					<a href="https://www.facebook.com/profile.php?id=100086715121290"><img className="facebook-icon" alt="" src="../facebook.svg" /></a>
					<a href="https://twitter.com/Just_Love_Pizza"><img className="twitter-icon" alt="" src="../twitter.svg" /></a>
					<a href="https://www.instagram.com/just.love.pizza/?hl=en"><img className="instagram-icon" alt="" src="../instagram.svg" /></a>
				</div>

      </div>

			<div className="contact-image">
      	<img className="jlp-oven-1" alt="" src="../jlp-oven-1@2x.png" />
			</div>

		</div>

    </div>
  );
};

export default Contact;
