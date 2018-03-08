import React from 'react';
import Article from '../article/article';
import ContentSlider from '../content-slider/content-slider';

const ArticlePane = (props) => (
  props.props.map((item, index) => {

    let title =
      item.title
      ? <div className="pane__title">
          <h1>{item.title}</h1>
        </div>
      : null

    let image =
      item.image
      ? <figure className="pane__image">
          <img src={item.image} alt="Pane image" />
        </figure>
      : null

    let slider =
      item.slider
      ? <div className="pane__slider">
          <ContentSlider slides={item.slider} slidesToShow={1} slidesToScroll={1} />
        </div>
      : null

    let article =
      item.article
      ? <div className="pane__content">
          <Article article={item.article} />
        </div>
      : null

    return (
      <section className={`pane ${item.className ? item.className : null}`}>
        {title}
        {image}
        {slider}
        {article}
      </section>
    )
  })
)

export default ArticlePane;
