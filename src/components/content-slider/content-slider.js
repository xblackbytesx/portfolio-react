import React, { Component } from 'react';
import Slider from 'react-slick';
import './content-slider.css';

class ContentSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      arrows: false,
      speed: 500,
      slidesToShow: this.props.slidesToShow,
      slidesToScroll: this.props.slidesToScroll,
    };

    return (
      <Slider {...settings}>
        {this.props.children}
      </Slider>
    );
  }
}

export default ContentSlider;
