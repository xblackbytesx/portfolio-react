import React from 'react';
import Pane from '../pane/pane';
import Article from '../article/article';

const ArticlePane = (props) => {
  return (
    props.props.map((item, index) => {
      return (
        <Pane title={item.title} image={item.image}>
          <Article content={item.content} />
        </Pane>
      )
    })
  )
}

export default ArticlePane;
