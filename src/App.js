import React, { Component } from 'react';
import Header from './containers/header/header';
import Pane from './components/pane/pane';
import ArticlePane from './components/article-pane/article-pane';
import Skills from './components/skills/skills';
import Testimonial from './components/testimonial/testimonial';
import TimeMarker from './components/time-marker/time-marker';
import Job from './components/job/job';
import ContactForm from './components/contact-form/contact-form';
import Footer from './containers/footer/footer';
import NavBar from './components/navbar/navbar';

import StubData from './store/content.json';

import './static/css/app.css';

class App extends Component {
  state = {
    content: StubData.content[0],
    displayTiles: false,
    darkMode: false
  };

  toggleDisplayType = () => {
    this.state.displayTiles
      ? this.setState({displayTiles: false})
      : this.setState({displayTiles: true})
  }

  toggleColorMode = () => {
    this.state.darkMode
      ? this.setState({darkMode: false})
      : this.setState({darkMode: true})
  }

  render() {
    return (
      <div className={`App display-mode--${this.state.displayTiles ? `tiles` : `cards`} color-mode--${this.state.darkMode ? `dark` : `light`}`}>
        <div class="customizations">
          <button onClick={this.toggleDisplayType}>ToggleDisplayMode</button>
          <button onClick={this.toggleColorMode}>ToggleColorMode</button>
        </div>
        <Header props={this.state.content.components[0].titleCrawl} />
        <div className="main">
          <ArticlePane props={this.state.content.components[1].aboutMe} />
          <ArticlePane props={this.state.content.components[2].myWork} />

          <Pane title={this.state.content.components[4].mySkills[0].title}>
            <Skills skills={this.state.content.components[4].mySkills[0].skills} />
          </Pane>

          <ArticlePane props={this.state.content.components[5].myMusic} />

          <Pane title={this.state.content.components[6].testimonials[0].title} className="testimonials">
            {
              this.state.content.components[6].testimonials[0].testimonials.map((item, index) => {
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

          <Pane title={this.state.content.components[7].resume[0].title} className="resume">
            {
              this.state.content.components[7].resume[0].jobs.map((item, index) => {
                return (
                  <TimeMarker>
                    <Job
                      key={index}
                      title={item.title}
                      company={item.company}
                      image={item.image}
                      content={item.content}
                    />
                  </TimeMarker>
                )
              })
            }
          </Pane>

          <Pane title={this.state.content.components[8].contactForm[0].title}>
            <ContactForm email={this.state.content.components[8].contactForm[0].email} />
          </Pane>

        </div>
        <Footer props={this.state.content.components[9].footer} />
      </div>
    );
  }
}

export default App;
