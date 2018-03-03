import React from 'react';
import Article from '../article/article';
import ContentSlider from '../content-slider/content-slider';

const ArticlePane = (props) => (
  props.props.map((item, index) => {
    return (
      <section className={`pane ${item.className ? item.className : null}`}>
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
        { item.article
          ? <div className="pane__content">
              <Article article={item.article} />
            </div>
          : null
        }
      </section>
    )
  })
)

export default ArticlePane;
