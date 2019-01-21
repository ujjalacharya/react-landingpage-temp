import React from "react";
import Slider from "react-slick";
import slideone from "../../resources/images/slide_one.jpg";
import slidetwo from "../../resources/images/slide_two.jpg";
import slidethree from "../../resources/images/slide_three.jpg";

import TimeUntil from './TimeUntil';

class Carrousel extends React.Component {
  render() {
    const settings = {
      dot: false,
      infinite: true,
      speed: 500,
      autoplay: true
    };

    return (
      <div
        className="carrousel_wrapper"
        style={{
          overflow: "hidden",
          height: '100vh'
        }}
      >
        <Slider {...settings}>
          <div>
            <div className="carrousel_image"
              style={{
                background: `url(${slideone})`,
                 height: '100vh'

              }}
            />
          </div>
          <div>
            <div className="carrousel_image"
              style={{
                background: `url(${slidetwo})`,
                 height: '100vh'

              }}
            />
          </div>
          <div>
            <div className="carrousel_image"
              style={{
                background: `url(${slidethree})`,
                 height: '100vh'

              }}
            />
          </div>
        </Slider>
        <TimeUntil />
      </div>
    );
  }
}

export default Carrousel;
