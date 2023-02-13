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
    <div className="footerIcons">
    <div className="back-icon" onClick = {handleGoBack}></div>
    <div className="home-icon" onClick={homeButton}></div>
    <div className="logout-icon" onClick={logout}></div>
    </div>
  )
}

export default Footer;
