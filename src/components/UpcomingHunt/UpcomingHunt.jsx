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
  const history = useHistory()
  
  const upcomingHuntDetails = () =>{
    history.push('/upcominghuntdetails')
  }

  return (
    <table
      style={{
        backgroundColor: '#D6EEEE',
      }}
    >
      <thead>
        <tr onClick={upcomingHuntDetails}>
          <th>DATE</th>
          <th>SPECIES</th>
          <th>MODIFY</th>
          <th>Upcoming Hunt</th>
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
