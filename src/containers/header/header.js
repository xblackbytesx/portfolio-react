import React from 'react';
import TwinkleStars from '../../components/twinkle-stars/twinkle-stars';
import TitleCrawl from '../../components/title-crawl/title-crawl';
import './header.css';

const Header = (props) => (
  <header>
    <TwinkleStars />
    <TitleCrawl props={props.props} />
  </header>
)

export default Header;
