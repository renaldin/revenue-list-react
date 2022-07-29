import React, { useState } from 'react';

import RevenueForm from './RevenueForm';
import './NewRevenue.css';

const NewRevenue = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveRevenueDataHandler = (enteredRevenueData) => {
    const revenueData = {
      ...enteredRevenueData,
      id: Math.random().toString(),
    };
    props.onAddRevenue(revenueData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-revenue'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Revenue</button>
      )}
      {isEditing && (
        <RevenueForm
          onSaveRevenueData={saveRevenueDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewRevenue;
