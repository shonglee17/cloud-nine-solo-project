import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import React from 'react';
import UpcomingHuntItem from '../UpcomingHuntItem/UpcomingHuntItem';
import { useHistory } from 'react-router-dom';
import NavHead from '../NavHead/NavHead';
import Footer from '../Footer/Footer';
import './UpcomingHunt.css'
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

  const homeButton = () => {
    history.push('/user')
  }
  return (
    <>
    <NavHead/>
    <table
      style={{
        backgroundColor: '#D6EEEE',
      }}
      
    >
      <thead >
        <tr >
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

    <Footer/>
    </>
  );
}

export default UpcomingHunt;
