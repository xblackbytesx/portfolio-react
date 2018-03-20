import React from 'react';

const LinkList = (props) => (
  props.content.map((list, index) => {

    return (
      <ul key={index}>
        <h3>{list.title}</h3>
        {
          list.links.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.url}>{link.title}</a>
              </li>
            )
          })
        }
      </ul>
    )
  })
)

export default LinkList;
