import React from 'react';
import UpcomingHunt from '../UpcomingHunt/UpcomingHunt';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <p>Info Page</p>
      <UpcomingHunt/>
    </div>
  );
}

export default InfoPage;
