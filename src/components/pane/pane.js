import React from 'react';

const Pane = (props) => {
  return (
    <section>
      <h1 className="visually-hidden">Test</h1>
      <p>{props.content}</p>
    </section>
  )
}

export default Pane;
