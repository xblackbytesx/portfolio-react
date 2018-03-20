import React from 'react';
import LinkList from '../link-list/link-list';

const ListCollection = (props) => (
  <div className={`list-collection ${props.className ? props.className : null}`}>
    {
      props.content.map((list, index) => {
        return (
          <LinkList key={index} content={list} />
        )
      })
    }
  </div>
)

export default ListCollection;
