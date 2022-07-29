import React from 'react';

import RevenueDate from './RevenueDate';
import Card from '../UI/Card';
import './RevenueItem.css';

const RevenueItem = (props) => {
  return (
    <li>
      <Card className='revenue-item'>
        <RevenueDate date={props.date} />
        <div className='revenue-item__description'>
          <h2>{props.title}</h2>
          <div className='revenue-item__price'>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default RevenueItem;
