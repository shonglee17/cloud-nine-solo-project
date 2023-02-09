import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import React from 'react';
import PreviousHuntItem from './PreviousHuntItem';


function PreviousHunt() {
  const previousHunt = useSelector((store) => store.previousHuntReducer);
  console.log(previousHunt);
  useEffect(() => {
    dispatch({
      type: 'SAGA/FETCH_PREVIOUS',
    });
  }, []);
  const dispatch = useDispatch();
  
 
  console.log(previousHunt);
  return (
    <table
      style={{
        backgroundColor: '#D6EEEE',
      }}
    >
      <thead>
        <tr>
          <th>DATE</th>
          <th>SPECIES</th>
          
        </tr>
      </thead>

      {previousHunt.map((data) => {

        return (
        <PreviousHuntItem key={data.id} data={data}/>
        );
      })}
    </table>
  );
}

export default PreviousHunt;