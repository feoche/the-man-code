import React from 'react';

const Background = ({ children }) => {
  const lists = Array.apply(null, new Array(6)).map(() => <li/>);
  return (
    <div className="bg">
      <div className="menu">
        {children}
        <ul className="bg-strips">
          {lists}
        </ul>
      </div>
    </div>
  )
};

export default Background;
