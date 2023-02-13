import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import React from 'react';
import PreviousHuntItem from './PreviousHuntItem';
import { useHistory } from 'react-router-dom';
import NavHead from '../NavHead/NavHead';
import Footer from '../Footer/Footer';
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
    <Footer/>
    </>
  );
}

export default PreviousHunt;