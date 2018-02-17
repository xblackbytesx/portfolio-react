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
          {
            this.state.components.map((component, index) => {
              return <TitleCrawl content={component.titleCrawl} key={component.index} />
            })
          }
        </header>
        <div className="main">
          {
            this.state.components[1].aboutMe.map((component, index) => {
              return (
                <Pane title={component.title} image={component.image}>
                  <article>
                    <p>{component.content}</p>
                  </article>
                </Pane>
              )
            })
          }
          {
            this.state.components[2].myWork.map((component, index) => {
              return (
                <Pane title={component.title} image={component.image}>
                  <article>
                    <p>{component.content}</p>
                  </article>
                </Pane>
              )
            })
          }

          <ContentSlider slidesToShow={3} slidesToScroll={1}>
            {
              this.state.components[3].myProjects[0].projects.map((item, index) => {
                return <MiniCard title={item.title} image={item.image} key={item.index} />
              })
            }
          </ContentSlider>

          <Pane title={this.state.components[4].mySkills[0].title}>
            <ul id="skill">
              <li className="skills">
                <ul>
                  {
                    this.state.components[4].mySkills[0].skills.map((skill, index) => {
                      return <ProgresBar className={skill.skill} key={skill.index}>{skill.skill}</ProgresBar>
                    })
                  }
                </ul>
              </li>
            </ul>
          </Pane>
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
