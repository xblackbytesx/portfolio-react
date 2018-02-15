import React from 'react';
import './title-crawl.css';

const TitleCrawl = (props) => {
  return (
    <section className="main-intro">
      <article className="star-wars-titles">
        <p id="start">{props.start}</p>

        <header>
          <h1>FABIO BIER <sub>Front-end Jedi</sub></h1>
        </header>

        <div id="titles">
          <div id="titlecontent">
            <p className="center">EPISODE IV<br />A NEW HOPE FOR YOUR WEBSITE</p>

            <p>It is a period of many connected devices.</p>
            <p>With so many different form factors offering a unified user experience across the board is often challenging.</p>

            <p>However modern web technologies cater to these needs by ways of <strike>The Force</strike> CSS3 and HTML5.</p>
            <p>As a professional Front-end Developer it is my destiny to wield these forces for the good of Webkind.</p>

            <p>My work varies from designing beautiful user interfaces to developing entire front-ends using the latest Web Standards.</p>

            <p>I take pride in writing clean and semantic code with SEO and accesibility in mind. If you're interested in the inner workings of this page…</p>

            <p className="center">View the source, Luke!</p>

            <p>Sorry. Couldn't resist it.</p>

            <p>Finally, Han shot first and the original, unadulterated movies remain the best. Stop fiddling with them, George!</p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default TitleCrawl;
