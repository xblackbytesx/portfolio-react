import React, { Component } from 'react';
import './testimonial.css';

class Testimonial extends Component {
  state = {
    expanded: false
  }

  toggleState = () => {
    this.state.expanded
      ? this.setState({expanded: false})
      : this.setState({expanded: true})

    console.log(this.state);
  }

  render() {
    return(
      <section className={`testimonial testimonial--${this.state.expanded ? `expanded` : `collapsed`}`}>
        <figure className="testimonial__image">
          <img src={this.props.image} alt={this.props.name} />
        </figure>
        <div className="testimonial__content">
          <h1>{this.props.name}</h1>
          <small>{this.props.title}, {this.props.company}</small>
          <article onClick={this.toggleState}>
            <p>{this.props.content}</p>
          </article>
        </div>
      </section>
    )
  }
}

export default Testimonial;
