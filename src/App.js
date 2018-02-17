import React, { Component } from 'react';
import TitleCrawl from './components/title-crawl/title-crawl';
import Pane from './components/pane/pane';
import ContentSlider from './components/content-slider/content-slider';
import MiniCard from './components/mini-card/mini-card';
import ProgresBar from './components/progress-bar/progress-bar';
import Testimonial from './components/testimonial/testimonial';
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
                <Pane title={component.title} image={component.image} key={component.index}>
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
                <Pane title={component.title} image={component.image} key={component.index}>
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

          <Pane title={this.state.components[5].testimonials[0].title}>
            {
              this.state.components[5].testimonials[0].testimonials.map((item, index) => {
                return <Testimonial name={item.name} title={item.title} company={item.company} content={item.content} />
              })
            }
          </Pane>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
