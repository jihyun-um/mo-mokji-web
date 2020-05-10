import React, { FunctionComponent } from 'react';

type OptionProps = {
  text: string;
  handleRemoveOption(optionName: string): void;
};

const Option: FunctionComponent<OptionProps> = ({
  text,
  handleRemoveOption,
}) => {
  return (
    <div>
      {text} <button onClick={() => handleRemoveOption(text)}>삭제</button>
    </div>
  );
};

export default Option;
