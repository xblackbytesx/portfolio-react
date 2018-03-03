import React, { Component } from 'react';
import TitleCrawl from './components/title-crawl/title-crawl';
import Pane from './components/pane/pane';
import ArticlePane from './components/article-pane/article-pane';
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
          <TitleCrawl props={this.state.components[0].titleCrawl} />
        </header>
        <div className="main">
          <ArticlePane props={this.state.components[1].aboutMe} />
          <ArticlePane props={this.state.components[2].myWork} />

          <Pane title={this.state.components[4].mySkills[0].title}>
            <Skills skills={this.state.components[4].mySkills[0].skills} />
          </Pane>

          <Pane title={this.state.components[5].testimonials[0].title} className="testimonials">
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
