import React from 'react';

const Title = ({ children }) => (
  <div>
    <div className="title">
      {children}
    </div>
    <div className="subtitle">
      for <small>(tough)</small> males
    </div>
  </div>
);

export default Title;
