import React, { useState } from 'react';
import styled from 'styled-components';

const ReceiptWindowContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReceiptWindowContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
`;

const ReceiptWindowTitle = styled.h2`
  margin-bottom: 1rem;
`;

const ReceiptWindowForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ReceiptWindowInput = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ReceiptWindowButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
`;

const ReceiptWindow = ({ onClose }) => {
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle receipt submission logic here
    onClose();
  };

  return (
    <ReceiptWindowContainer>
      <ReceiptWindowContent>
        <ReceiptWindowTitle>Add Receipt</ReceiptWindowTitle>
        <ReceiptWindowForm onSubmit={handleSubmit}>
          <ReceiptWindowInput
            type="text"
            placeholder="Source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
          <ReceiptWindowInput
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <ReceiptWindowInput
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <ReceiptWindowButton type="submit">Submit</ReceiptWindowButton>
        </ReceiptWindowForm>
      </ReceiptWindowContent>
    </ReceiptWindowContainer>
  );
};

export default ReceiptWindow;