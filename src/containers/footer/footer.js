import React from 'react';
import ListCollection from '../../components/list-collection/list-collection';
import './footer.css';

const Footer = (props) => (
  <footer className="footer" role="contentinfo">
      <h1 className="visuallyhidden">Footer</h1>

      <div className="master-container">
          <div className="main-container">
            {
              props.props.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="footer-logo">
                      <img src={item.logo} alt="Logo Fabio Bier" />
                    </div>

                    <ListCollection content={item.linkList} className="footer-links" />

                    <hr />

                    <p>{item.copyright}</p>
                  </div>
                )
              })
            }
          </div>
      </div>
  </footer>
)

export default Footer;
