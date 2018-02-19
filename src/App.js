import React, { Component } from 'react';
import TitleCrawl from './components/title-crawl/title-crawl';
import Pane from './components/pane/pane';
import ContentSlider from './components/content-slider/content-slider';
import MiniCard from './components/mini-card/mini-card';
import Skills from './components/skills/skills';
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
            this.state.components[0].titleCrawl.map((item, index) => {
              return (
                <TitleCrawl
                  start={item.start}
                  title={item.title}
                  subtitle={item.subtitle}
                  content={item.content}
                  key={item.index}
                />
              )
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
            <Skills skills={this.state.components[4].mySkills[0].skills} />
          </Pane>

          <Pane title={this.state.components[5].testimonials[0].title}>
            {
              this.state.components[5].testimonials[0].testimonials.map((item, index) => {
                return (
                  <Testimonial
                    name={item.name}
                    title={item.title}
                    company={item.company}
                    image={item.image}
                    content={item.content}
                  />
                )
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
