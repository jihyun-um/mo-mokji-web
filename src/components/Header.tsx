import React, { FunctionComponent } from 'react';

const Header: FunctionComponent = () => {
  return (
    <div>
      <h1>
        뭐 먹지?{' '}
        <span role="img" aria-label="pig">
          🐷
        </span>
      </h1>

      <h4>먹고 싶은 것만 많은 그대를 위해</h4>
    </div>
  );
};

export default Header;
