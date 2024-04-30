import React, { useState } from 'react';
import styled from 'styled-components';
import ReceiptWindow from '../Income/ReceiptWindow';
import IncomeGraph from '../Income/IncomeGraph';

// Styled components for the Income page
const IncomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #fff;
  max-width: 1200px;
  margin: auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Title = styled.h1`
  color: #102a43;
  font-size: 2.5rem;
`;

const IncomeList = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const IncomeEntry = styled.div`
  background: #f0f4f8;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
  position: relative;
  &:hover .delete-icon {
    display: block;
  }
`;

const EntryDetail = styled.div`
  color: #333;
  text-align: left;
`;

const Amount = styled.span`
  color: #28a745;
  font-weight: bold;
  text-align: right;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
`;

const ReceiptSchedule = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const EntryDate = styled.span`
  color: #777;
  text-align: center;
`;

const DeleteIcon = styled.span`
  display: none;
  position: absolute;
  top: 8px;
  right: 8px;
  color: red;
  cursor: pointer;
`;

// Dummy data for the income list
const incomeData = [
  { id: 1, source: 'Salary', amount: 5000, date: '2023-04-01' },
  { id: 2, source: 'Freelance', amount: 1500, date: '2023-04-15' },
  { id: 3, source: 'Dividends', amount: 300, date: '2023-04-30' },
];

const IncomePage = () => {
  const [showReceiptWindow, setShowReceiptWindow] = useState(false);
  const [incomeData, setIncomeData] = useState([
    { id: 1, source: 'Salary', amount: 5000, date: '2023-04-01' },
    { id: 2, source: 'Freelance', amount: 1500, date: '2023-04-15' },
    { id: 3, source: 'Dividends', amount: 300, date: '2023-04-30' },
  ]);

  const handleAddReceipt = () => {
    setShowReceiptWindow(true);
  };

  const handleCloseReceiptWindow = () => {
    setShowReceiptWindow(false);
  };

  const handleDeleteIncome = (id) => {
    setIncomeData((prevData) => prevData.filter((entry) => entry.id !== id));
  };

  const incomeGraphData = incomeData.map(entry => ({
    date: entry.date,
    amount: entry.amount,
  }));

  return (
    <IncomeContainer>
      <Title>Income Overview</Title>
      <IncomeGraph data={incomeGraphData} />

      <Button onClick={handleAddReceipt}>Add Receipt</Button>
      {showReceiptWindow && (
        <div>
          {showReceiptWindow && <ReceiptWindow onClose={handleCloseReceiptWindow} />}
          <Button onClick={handleCloseReceiptWindow}>Close</Button>
        </div>
      )}
      <IncomeList>
  {incomeData.map((entry, index) => (
    <IncomeEntry key={entry.id}>
      <EntryDetail>{entry.source}</EntryDetail>
      <EntryDate>{entry.date}</EntryDate>
      <Amount>${entry.amount.toFixed(2)}</Amount>
      <DeleteIcon
        className="delete-icon"
        onClick={() => handleDeleteIncome(entry.id)}
      >
        &times;
      </DeleteIcon>
    </IncomeEntry>
  ))}
</IncomeList>
      <ReceiptSchedule>
        <h2>Receipt Schedule</h2>
        {incomeData.map(entry => (
          <div key={entry.id}>
            {entry.date}: {entry.source} - ${entry.amount.toFixed(2)}
          </div>
        ))}
      </ReceiptSchedule>
    </IncomeContainer>
  );
};

export default IncomePage;