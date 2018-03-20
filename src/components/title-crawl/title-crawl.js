import React from 'react';
import Article from '../article/article';
import './title-crawl.css';

const TitleCrawl = (props) => (
  props.props.map((item, index) => {
    return (
      <section key={index} className="main-intro">
        <article className="star-wars-titles">
          <p id="start">{item.start}</p>

          <header>
            <h1>{item.title} <sub>{item.subtitle}</sub></h1>
          </header>

          <div id="titles">
            <div id="titlecontent">
              { item.article
                ? <Article article={item.article} />
                : null
              }
            </div>
          </div>
        </article>
      </section>
    )
  })
)

export default TitleCrawl;
