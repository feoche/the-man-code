import React, { Component } from 'react';

const ProgressBar = ({ steps, current }) => {
  const stepsElements = Array.apply(null, new Array(steps)).map((e, i) => {
    return i === current ? <li className="active" /> : <li />;
  });

  return (
    <ul className="progress-bar">{stepsElements}</ul>
  );
};

export default ProgressBar;
