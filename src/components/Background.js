import React from 'react';

const Background = ({ children }) => {
  const lists = Array.apply(null, Array(6)).map(() => <li/>);
  return (
    <div>
      {children}
      <ul className="bg-strips">
        {lists}
      </ul>
    </div>
  )
};

export default Background;