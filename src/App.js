import React, { Component } from 'react';
import Header from './containers/header/header';
import Pane from './components/pane/pane';
import ArticlePane from './components/article-pane/article-pane';
import Skills from './components/skills/skills';
import LastFm from './components/lastfm/Lastfm';
import Testimonial from './components/testimonial/testimonial';
import Footer from './containers/footer/footer';

import StubData from './store/content.json';

import './static/css/app.css';

class App extends Component {
  state = StubData.content[0];

  render() {
    return (
      <div className="App">
        <Header props={this.state.components[0].titleCrawl} />
        <div className="main">
          <ArticlePane props={this.state.components[1].aboutMe} />
          <ArticlePane props={this.state.components[2].myWork} />

          <Pane title={this.state.components[4].mySkills[0].title}>
            <Skills skills={this.state.components[4].mySkills[0].skills} />
          </Pane>

          <Pane title="Music">
            <LastFm apiKey={"9d92732638e517cb06c246ca143e766e"} username={"softsaurus"} tracks={10} />
          </Pane>

          <Pane title={this.state.components[5].testimonials[0].title} className="testimonials">
            {
              this.state.components[5].testimonials[0].testimonials.map((item, index) => {
                return (
                  <Testimonial
                    key={index}
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
        <Footer props={this.state.components[6].footer} />
      </div>
    );
  }
}

export default App;
