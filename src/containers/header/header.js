import React from 'react';
import VideoBg from '../../components/videobg/videobg';
import TitleCrawl from '../../components/title-crawl/title-crawl';
import './header.css';

const Header = (props) => (
  <header>
    <VideoBg />
    <TitleCrawl props={props.props} />
  </header>
)

export default Header;
