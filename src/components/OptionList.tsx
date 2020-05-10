import React, { FunctionComponent } from 'react';

import Option from './Option';

type OptionListProps = {
  items: string[];
  handleRemoveOption(optionName: string): void;
  handleRemoveAllOptions(): void;
};

const OptionList: FunctionComponent<OptionListProps> = ({
  items,
  handleRemoveOption,
  handleRemoveAllOptions,
}) => {
  return (
    <div>
      <button onClick={handleRemoveAllOptions}>나 이제 배불러</button>
      {items.map((item: string, index: number) => (
        <Option
          key={index}
          text={item}
          handleRemoveOption={handleRemoveOption}
        />
      ))}
    </div>
  );
};

export default OptionList;
