import "./Gallery.scss";

const Gallery = () => {
  return (
    <div className="gallery2">
      <div className="instagram">
        <img className="icon" alt="" src="../1@2x.png" />
        <img className="icon1" alt="" src="../2@2x.png" />
        <img className="icon2" alt="" src="../3@2x.png" />
        <img className="icon3" alt="" src="../4@2x.png" />
        <img className="icon4" alt="" src="../5@2x.png" />
        <img className="icon5" alt="" src="../6@2x.png" />
        <img className="icon6" alt="" src="../7@2x.png" />
        <img className="icon7" alt="" src="../8@2x.png" />
        <img className="icon8" alt="" src="../9@2x.png" />
        <img className="icon9" alt="" src="../10@2x.png" />
        <img className="icon10" alt="" src="../11@2x.png" />
        <img className="icon11" alt="" src="../12@2x.png" />
        <img className="icon12" alt="" src="../13@2x.png" />
        <img className="icon13" alt="" src="../14@2x.png" />
        <img className="icon14" alt="" src="../15@2x.png" />
      </div>
      <div className="gallery-bg" data-scroll-to="galleryBg" />
      <div className="instagram-link">
        <img className="pizzaicon" alt="" src="../pizzaicon@2x.png" />
        <div className="check-us-out-container">
          {`Check us out on Instagram `}
          <a href="https://www.instagram.com/just.love.pizza/?hl=en"><span className="justlovepizza">@justlovepizza</span></a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
