import React, { FunctionComponent } from 'react';

type AddOptionProps = {
  addNewOption(newOption: string): void;
};

const AddOption: FunctionComponent<AddOptionProps> = (props) => {
  const handleSubmit = (event: any): void => {
    event.preventDefault();

    const newOption = event.target.elements.option.value.trim();

    props.addNewOption(newOption);
    event.target.elements.option.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="option" />
      <button>추가</button>
    </form>
  );
};

export default AddOption;
