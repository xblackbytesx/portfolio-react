import React from 'react';
import ListCollection from '../../components/list-collection/list-collection';

// Static assets
import './footer.css';
import siteLogo from '../../static/img/logo.svg';

const Footer = (props) => (
  <footer className="footer" role="contentinfo">
      <h1 className="visuallyhidden">Footer</h1>

      <div className="master-container">
          <div className="main">
            {
              props.props.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="footer-logo">
                      <img src={siteLogo} alt="Logo Fabio Bier" />
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
