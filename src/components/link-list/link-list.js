import React from 'react';

const LinkList = (props) => (
  <ul className="link-list">
    <h3>{props.content.title}</h3>
    {
      props.content.links.map((link, index) => {
        return (
          <li key={index} className="link-list__list-item">
            <a href={link.url} className="link-list__link">{link.title}</a>
          </li>
        )
      })
    }
  </ul>
)

export default LinkList;
