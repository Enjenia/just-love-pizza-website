import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="gallery1" data-scroll-to="gallery" />
      <div className="contactmain">
        <b className="justlovepizzacouk1">
          <span className="justlovepizzacouk-txt">
            <p className="justlovepizzacouk2">justlovepizza.co.uk</p>
            <p className="blank-line">&nbsp;</p>
          </span>
        </b>
        <b className="b">07868017133</b>
        <b className="justlovepizzainfogmailcom1">
          justlovepizza.info@gmail.com
        </b>
        <b className="get-in-touch">Get in touch</b>
        <a href="https://www.instagram.com/just.love.pizza/?hl=en"><img className="instagram-icon" alt="" src="../instagram.svg" /></a>
        <a href="https://twitter.com/Just_Love_Pizza"><img className="twitter-icon" alt="" src="../twitter.svg" /></a>
        <a href="https://www.facebook.com/profile.php?id=100086715121290"><img className="facebook-icon" alt="" src="../facebook.svg" /></a>
      </div>
      <img className="jlp-oven-1" alt="" src="../jlp-oven-1@2x.png" />
    </div>
  );
};

export default Contact;
