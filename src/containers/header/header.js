import React from 'react';
import TitleCrawl from '../../components/title-crawl/title-crawl';

const Header = (props) => (
  <header>
    <TitleCrawl props={props.props} />
  </header>
)

export default Header;
