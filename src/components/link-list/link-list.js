import React from 'react';
import './link-list.css';

const LinkList = (props) => (
  <ul className="link-list">
    <li><h3>{props.content.title}</h3></li>
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
