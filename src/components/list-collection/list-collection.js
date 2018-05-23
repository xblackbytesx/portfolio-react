import React from 'react';
import LinkList from '../link-list/link-list';

const ListCollection = (props) => (
  <div className={`list-collection ${props.className ? props.className : null}`}>
    {
      props.content.map((list, index) => {
        return (
          <div className="list-collection__group">
            <LinkList key={list.index} content={list} />
          </div>
        )
      })
    }
  </div>
)

export default ListCollection;
