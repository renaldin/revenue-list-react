import React, { useState } from 'react';

import NewRevenue from './components/NewRevenue/NewRevenue';
import Revenues from './components/Revenues/Revenues';

const DUMMY_REVENUES = [
  {
    id: 'e1',
    title: 'Project One in 2020',
    amount: 110,
    date: new Date(2020, 1, 14),
  },
  {
    id: 'e2',
    title: 'Project Two in 2020',
    amount: 100,
    date: new Date(2020, 6, 28),
  },
  {
    id: 'e3',
    title: 'Project One in 2021',
    amount: 799.49,
    date: new Date(2021, 1, 12)
  },
  {
    id: 'e4',
    title: 'Project Two in 2021',
    amount: 300,
    date: new Date(2021, 4, 10),
  },
  {
    id: 'e5',
    title: 'Project Three in 2021',
    amount: 400,
    date: new Date(2021, 7, 20),
  },
];

const App = () => {
  const [revenues, setRevenues] = useState(DUMMY_REVENUES);

  const addRevenueHandler = (revenue) => {
    setRevenues((prevRevenues) => {
      return [revenue, ...prevRevenues];
    });
  };

  return (
    <div>
      <NewRevenue onAddRevenue={addRevenueHandler} />
      <Revenues items={revenues} />
    </div>
  );
};

export default App;
