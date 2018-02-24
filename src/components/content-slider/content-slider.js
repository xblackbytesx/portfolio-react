import React, { Component } from 'react';
import Slider from 'react-slick';
import './content-slider.css';

class ContentSlider extends Component {
  render() {
    const settings = {
      dots: false,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: this.props.slidesToShow,
      slidesToScroll: this.props.slidesToScroll,
      initialSlide: 1,
      arrows: false
    };

    return (
      <div>
        <Slider {...settings}>
        {
          this.props.slides.map((slide, index) => {
            return <img src={slide.image} alt="test" />
          })
        }
        </Slider>
      </div>
    );
  }
}

export default ContentSlider;
