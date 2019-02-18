import React from 'react';
import Article from '../article/article';
import './title-crawl.css';

const TitleCrawl = (props) => (
  props.props.map((item, index) => {
    return (
      <section key={index} className="main-intro">
        <article className="title-crawl">
          <div className="title-crawl__intro">
            <p>{item.start}</p>
          </div>

          <header className="title-crawl__logo">
            <h1>{item.title} <sub>{item.subtitle}</sub></h1>
          </header>

          <div className="title-crawl__body">
            { item.article
              ? <Article article={item.article} />
              : null
            }
          </div>
        </article>
      </section>
    )
  })
)

export default TitleCrawl;
