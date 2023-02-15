import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchUpcomingList() {
    try {
      
        const response = yield axios({
            method: 'GET',
            url: '/hunt/upcoming'
        })
  
        
        let upcomingHuntList = response.data
        console.log(upcomingHuntList);
      
        yield put({
            type: 'SET_UPCOMING',
            payload: upcomingHuntList
        })
    } catch (error) {
        console.log('UpcomingSaga error:', error)
    }
  }

  function* upcomingSaga() {
    yield takeLatest('SAGA/FETCH_UPCOMING', fetchUpcomingList);
  }
  
  

  export default upcomingSaga