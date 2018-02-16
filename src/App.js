import React, { Component } from 'react';
import TitleCrawl from './components/title-crawl/title-crawl';
import Pane from './components/pane/pane';
import Footer from './components/footer/footer';
import StubData from './store/content.json';

import './App.css';

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
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
