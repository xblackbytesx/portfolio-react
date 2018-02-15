import React, { Component } from 'react';
import TitleCrawl from './components/title-crawl/title-crawl';
import Pane from './components/pane/pane';
import StubData from './store/content.json';

import './App.css';

class App extends Component {
  state = StubData.content[0];

  // getProps = () => {
  //   console.log(this.state);
  //   this.state.components.map((component)=> {
  //     const titleCrawl = component.titleCrawl[0];
  //   });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        <TitleCrawl content={this.state.components[0].titleCrawl} />
        <Pane content="Test" />
      </div>
    );
  }
}

export default App;
