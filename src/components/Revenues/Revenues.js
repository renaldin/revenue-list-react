import React, { useState } from 'react';

import Card from '../UI/Card';
import RevenuesFilter from './RevenuesFilter';
import RevenuesList from './RevenuesList';
import RevenuesChart from './RevenuesChart';
import './Revenues.css';

const Revenues = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredRevenues = props.items.filter((revenue) => {
    return revenue.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='revenues'>
        <RevenuesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <RevenuesChart revenues={filteredRevenues} />
        <RevenuesList items={filteredRevenues} />
      </Card>
    </div>
  );
};

export default Revenues;
