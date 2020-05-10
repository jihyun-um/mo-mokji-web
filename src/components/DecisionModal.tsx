import React, { FunctionComponent } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

type DecisionModalProps = {
  selectedOption: string;
  handleClearSelectedItem(): void;
};

const DecisionModal: FunctionComponent<DecisionModalProps> = ({
  selectedOption,
  handleClearSelectedItem,
}) => {
  return (
    <Modal
      isOpen={!!selectedOption}
      contentLabel="Selected Option"
      style={{
        overlay: {},
        content: {
          maxWidth: '30rem',
          height: '12rem',
          margin: '10rem auto',
          top: 0,
          bottom: 0,
          left: '3rem',
          right: '3rem',
          padding: 0,
        },
      }}
    >
      <h3>오늘은..</h3>
      <p>
        {selectedOption} 먹자{' '}
        <span role="img" aria-label="pig">
          🐷
        </span>
      </p>
      <button onClick={handleClearSelectedItem}>좋아</button>
    </Modal>
  );
};

export default DecisionModal;
