import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import React from 'react';
import UpcomingHuntItem from './UpcomingHuntItem';
import {useHistory} from 'react-router-dom'

function UpcomingHunt() {
  const upcomingHunt = useSelector((store) => store.upcomingHuntReducer);
  console.log(upcomingHunt);
  useEffect(() => {
    dispatch({
      type: 'SAGA/FETCH_UPCOMING',
    });
  }, []);
  const dispatch = useDispatch();

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

      {upcomingHunt.map((data) => {
        
        return (
            <UpcomingHuntItem key={data.id} data={data}/>
        );
      })}
    </table>
  );
}

export default UpcomingHunt;
