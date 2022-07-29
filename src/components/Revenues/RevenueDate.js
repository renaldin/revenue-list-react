import React from 'react';

import './RevenueDate.css';

const RevenueDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='revenue-date'>
      <div className='revenue-date__month'>{month}</div>
      <div className='revenue-date__year'>{year}</div>
      <div className='revenue-date__day'>{day}</div>
    </div>
  );
};

export default RevenueDate;
