import React from 'react';

const Option = props => {
  return (
    <div>
      {props.name}{' '}
      <button onClick={e => props.handleRemoveOption(props.id)}>삭제</button>
    </div>
  );
};

export default Option;
