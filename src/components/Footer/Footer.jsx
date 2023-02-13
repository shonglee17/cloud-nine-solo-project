import React from 'react';
import './Footer.css';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {

  const history = useHistory();
  const dispatch = useDispatch()
  const handleGoBack = () => {
    history.goBack();
  };

  const homeButton = () => {
    history.push('/user')
  }

  const logout = () =>{
    dispatch({ type: 'LOGOUT' })
    history.push('/')
  }

  return (
    <>
    <div onClick = {handleGoBack}>Back Button</div>
    <div onClick={homeButton}>Home Button</div>
    <div onClick={logout}>Logout</div>
    </>
  )
}

export default Footer;
