import React, { FunctionComponent } from 'react';

type ActionProps = {
  hasOptions: boolean;
  handlePick(): void;
};

const Action: FunctionComponent<ActionProps> = ({ hasOptions, handlePick }) => {
  return (
    <div>
      <button disabled={!hasOptions} onClick={handlePick}>
        정해줘
      </button>
    </div>
  );
};

export default Action;
