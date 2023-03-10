import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import React from 'react';
import PreviousHuntItem from '../PreviousHuntItem/PreviousHuntItem';
import { useHistory } from 'react-router-dom';
import NavHead from '../NavHead/NavHead';
import Footer from '../Footer/Footer';
import Table from 'react-bootstrap/Table';
import './PreviousHunt.css'

function PreviousHunt() {
  const previousHunt = useSelector((store) => store.previousHuntReducer);
  console.log(previousHunt);
  useEffect(() => {
    dispatch({
      type: 'SAGA/FETCH_PREVIOUS',
    });
  }, []);
  const dispatch = useDispatch();
  const history = useHistory()
 
  const homeButton = () => {
    history.push('/user')
  }
  console.log(previousHunt);
  return (
    <>
    <NavHead/>
    <Table striped bordered hover variant="dark">
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
    </Table>
    <Footer/>
    </>
  );
}

export default PreviousHunt;