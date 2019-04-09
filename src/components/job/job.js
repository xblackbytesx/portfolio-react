import React, { Component } from 'react';
import './job.css';

class Job extends Component {
  state = {
    expanded: false
  }

  toggleState = () => {
    this.state.expanded
      ? this.setState({expanded: false})
      : this.setState({expanded: true})
  }

  render() {
    return(
      <section className={`job job--${this.state.expanded ? `expanded` : `collapsed`}`}>
        <div className="job__wrapper">
          <figure className="job__image">
            <img src={this.props.image} alt={this.props.name} />
          </figure>
          <div className="job__content">
            <h1>{this.props.title}</h1>
            <small>{this.props.company}</small>
            <article>
              <p>{this.props.content}</p>
            </article>
          </div>
        </div>
        <div className="job__wrapper job__wrapper--empty">
          <h1>Invisible</h1>
        </div>
      </section>
    )
  }
}

export default Job;
