import React from 'react';
import ReactMarkdown from 'react-markdown';

const Article = (props) => (
  props.article.map((article, index) => {

    let title =
      article.title
      ? <h1>{article.title}</h1>
      : null;

    let paragraph =
      article.paragraph
      ? <ReactMarkdown source={article.paragraph} />
      : null;

    return (
      <article>
        {title}
        {paragraph}
      </article>
    )
  })
)

export default Article;
