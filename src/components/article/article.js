import React from 'react';

const Article = (props) => {
  return (
    props.article.map((article, index) => {
      return (
        <article>
          <h1>{article.title}</h1>
          <p>{article.paragraph}</p>
        </article>
      )
    })
  )
}

export default Article;
