import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import React from 'react';
import UpcomingHuntItem from '../UpcomingHuntItem/UpcomingHuntItem';
import { useHistory } from 'react-router-dom';
import NavHead from '../NavHead/NavHead';
import Footer from '../Footer/Footer';
import './UpcomingHunt.css'
import Table from 'react-bootstrap/Table';

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
    <Table striped bordered hover variant="dark">
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
    </Table>

    <Footer/>
    </>
  );
}

export default UpcomingHunt;
