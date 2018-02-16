import React, { Component } from 'react';
import TitleCrawl from './components/title-crawl/title-crawl';
import Pane from './components/pane/pane';
import ContentSlider from './components/content-slider/content-slider';
import MiniCard from './components/mini-card/mini-card';
import ProgresBar from './components/progress-bar/progress-bar';
import Footer from './components/footer/footer';
import StubData from './store/content.json';

import './static/css/app.css';

class App extends Component {
  state = StubData.content[0];

  render() {
    return (
      <div className="App">
        <header>
          <TitleCrawl content={this.state.components[0].titleCrawl} />
        </header>
        <div className="main">
          <Pane props={this.state.components[1].aboutMe} />
          <Pane props={this.state.components[2].myWork} />

          <ContentSlider slidesToShow={3} slidesToScroll={1}>
            <MiniCard title="NU.nl" image="https://www.fabiobier.com/static/img/portfolio/2015/website_nunl.jpg" />
            <MiniCard title="NUSport.nl" image="https://www.fabiobier.com/static/img/portfolio/2015/website_nusport.jpg" />
            <MiniCard title="NU.nl" image="https://www.fabiobier.com/static/img/portfolio/2015/website_nunl.jpg" />
            <MiniCard title="NUSport.nl" image="https://www.fabiobier.com/static/img/portfolio/2015/website_nusport.jpg" />
            <MiniCard title="NU.nl" image="https://www.fabiobier.com/static/img/portfolio/2015/website_nunl.jpg" />
            <MiniCard title="NUSport.nl" image="https://www.fabiobier.com/static/img/portfolio/2015/website_nusport.jpg" />
          </ContentSlider>

          <div className="pane">
            <div className="pane__title"><h2>My Skills</h2></div>
            <div className="pane__content">
            <ul id="skill">
                <li class="skills">
                  <ul>
                    <ProgresBar className="html">html</ProgresBar>
                    <ProgresBar className="css">css</ProgresBar>
                    <ProgresBar className="javascript">javascript</ProgresBar>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;


// <ContentSlider slidesToShow={3} slidesToScroll={1}>
//   <img src="https://www.fabiobier.com/static/img/portfolio/2015/website_nunl.jpg" />
//   <img src="https://www.fabiobier.com/static/img/portfolio/2015/website_nunl.jpg" />
//   <img src="https://www.fabiobier.com/static/img/portfolio/2015/website_nunl.jpg" />
//   <img src="https://www.fabiobier.com/static/img/portfolio/2015/website_nunl.jpg" />
//   <img src="https://www.fabiobier.com/static/img/portfolio/2015/website_nunl.jpg" />
//   <img src="https://www.fabiobier.com/static/img/portfolio/2015/website_nunl.jpg" />
// </ContentSlider>
