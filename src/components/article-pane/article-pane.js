import React from 'react';
import Pane from '../pane/pane';
import Article from '../article/article';
import ContentSlider from '../content-slider/content-slider';

const ArticlePane = (props) => {
  return (
    props.props.map((item, index) => {
      return (
        <section className={`pane ${props.className ? props.className : null}`}>
          { item.title
            ? <div className="pane__title">
                <h1>{item.title}</h1>
              </div>
            : null
          }
          { item.image
            ? <figure className="pane__image">
                <img src={item.image} alt="Pane image" />
              </figure>
            : null
          }
          { item.slider
            ? <div className="pane__slider">
                <ContentSlider slides={item.slider} slidesToShow={1} slidesToScroll={1} />
              </div>
            : null
          }
          { item.content
            ? <div className="pane__content">
                <Article content={item.content} />
              </div>
            : null
          }
        </section>
      )
    })
  )
}

export default ArticlePane;
