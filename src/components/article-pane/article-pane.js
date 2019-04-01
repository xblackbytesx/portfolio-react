import React from 'react';
import TrackVisibility from 'react-on-screen';
import Article from '../article/article';
import ContentSlider from '../content-slider/content-slider';
import LastFm from '../lastfm/lastfm';

const ArticlePaneStub = ({props, isVisible}) => (
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
          <img src={item.image} alt={item.image} />
        </figure>
      : null

    let slider =
      item.slider
      ? <div className="pane__slider">
          <ContentSlider slides={item.slider} slidesToShow={1} slidesToScroll={1} />
        </div>
      : null

      let widget =
        item.widget
        ? <div className="pane__widget">
            <LastFm
              username={item.widget[0].lastFm[0].username}
              period={item.widget[0].lastFm[0].period}
              apiKey={item.widget[0].lastFm[0].apiKey}
              limit={item.widget[0].lastFm[0].limit}
            />
          </div>
        : null

    let article =
      item.article
      ? <div className="pane__content">
          <Article article={item.article} />
        </div>
      : null

    return (

        <section key={index} className={`pane ${item.className ? item.className : null} ${isVisible ? 'appeared' : null}`}>
          {title}
          {image}
          {slider}
          {widget}
          {article}
        </section>

    )
  })
)

const ArticlePane = (props) => (
  <TrackVisibility once partialVisibility>
    <ArticlePaneStub props={props} />
  </TrackVisibility>
)

export default ArticlePane;
