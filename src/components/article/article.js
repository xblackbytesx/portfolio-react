import React from 'react';
import ReactMarkdown from 'react-markdown';

const Article = (props) => {
  return (
    props.article.map((article, index) => {
      return (
        <article>
          <h1>{article.title}</h1>
          <ReactMarkdown source={article.paragraph} />
        </article>
      )
    })
  )
}

export default Article;
