import './HelpBox.css';
import React from 'react';

// eslint-disable-next-line react/prop-types
function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

export default HelpBox;
