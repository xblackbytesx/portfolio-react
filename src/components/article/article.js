import React from 'react';

const Article = (props) => {
  return (
    props.content.map((content, index) => {
      return (
        <article>
          <h1>{content.title}</h1>
          <p>{content.body}</p>
        </article>
      )
    })
  )
}

export default Article;
