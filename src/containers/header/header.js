import React from 'react';
import TitleCrawl from '../../components/title-crawl/title-crawl';
import './header.css';

const Header = (props) => (
  <header>
    <TitleCrawl props={props.props} />
  </header>
)

export default Header;
