import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeighlightCorousel.scss";
function HeighlightCorousel({ skills }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2
  };
  return (
    <div>
      <Slider {...settings}>
        {skills.map(({ name, id }) => (
          <div className="cards" key={id}>
            {name}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeighlightCorousel;
