import "./Gallery.scss";

const Gallery = () => {
	return (
		<div className="gallery-main">
			<div className="gallery-bg" data-scroll-to="gallery" />
			<div className="instagram-link">
				<div className="gallery-title">
					{`Check us out on Instagram `}
					<a href="https://www.instagram.com/just.love.pizza/?hl=en">
						<span className="justlovepizza">@justlovepizza</span>
					</a>
				</div>
				<img className="pizzaicon" alt="" src="../pizzaicon@2x.png" />
			</div>
			<div className="instagram-gallery">
				<div className="instagram-first-column">
					<img className="icon" alt="" src="../car.jpg" />
					<img className="icon1" alt="" src="../dough.jpg" />
				</div>

				<div className="instagram-second-column">
					<img className="icon3" alt="" src="../fire.jpg" />
					<img className="icon4" alt="" src="../inside.jpg" />
				</div>

				<div className="instagram-third-column">
					<img className="icon6" alt="" src="../jules.jpg" />
					<img className="icon7" alt="" src="../darkfire.jpg" />
				</div>

				<div className="instagram-fourth-column">
					<img className="icon9" alt="" src="../lew2.jpg" />
					<img className="icon10" alt="" src="../open.jpg" />
				</div>

				<div className="instagram-fifth-column">
					<img className="icon12" alt="" src="../shelter.jpg" />
					<img className="icon13" alt="" src="../oven.jpg" />
				</div>
			</div>
		</div>
	);
};

export default Gallery;
