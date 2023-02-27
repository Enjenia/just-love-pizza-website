import "./Gallery.scss";

const Gallery = () => {
  return (
    <div className="gallery2">
			      <div className="gallery-bg" data-scroll-to="gallery" />
      <div className="instagram-link">
        <div className="gallery-title">
          {`Check us out on Instagram `}
          <a href="https://www.instagram.com/just.love.pizza/?hl=en"><span className="justlovepizza">@justlovepizza</span></a>
        </div>
				<img className="pizzaicon" alt="" src="../pizzaicon@2x.png" />
      </div>
			<div className="instagram-gallery">
      <div className="instagram-first-column">
        <img className="icon" alt="" src="../1@2x.png" />
        <img className="icon1" alt="" src="../2@2x.png" />
        <div className="icon2"></div>
			</div>

			<div className="instagram-second-column">
        <img className="icon3" alt="" src="../4@2x.png" />
        <img className="icon4" alt="" src="../5@2x.png" />
        <div className="icon5"></div>
				</div>

			<div className="instagram-third-column">
        <img className="icon6" alt="" src="../7@2x.png" />
        <img className="icon7" alt="" src="../8@2x.png" />
        <div className="icon8"></div>
				</div>

			<div className="instagram-fourth-column">
        <img className="icon9" alt="" src="../10@2x.png" />
        <img className="icon10" alt="" src="../11@2x.png" />
        <div className="icon11"></div>
			</div>

			<div className="instagram-fifth-column">
        <img className="icon12" alt="" src="../13@2x.png" />
        <img className="icon13" alt="" src="../14@2x.png" />
        <div className="icon14"></div>
      </div>
			</div>
    </div>
  );
};

export default Gallery;
