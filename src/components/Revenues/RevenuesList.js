import React from 'react';

import RevenueItem from './RevenueItem';
import './RevenuesList.css';

const RevenuesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='revenues-list__fallback'>Found no revenues.</h2>;
  }

  return (
    <ul className='revenues-list'>
      {props.items.map((revenue) => (
        <RevenueItem
          key={revenue.id}
          title={revenue.title}
          amount={revenue.amount}
          date={revenue.date}
        />
      ))}
    </ul>
  );
};

export default RevenuesList;
