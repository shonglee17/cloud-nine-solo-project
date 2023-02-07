import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchUpcomingList() {
    try {
        // GET THE FRUIT FROM THE SERVER!
        const response = yield axios({
            method: 'GET',
            url: '/hunt/upcoming'
        })
  
        // WOOT. HERE'S THE FRUIT:
        let upcomingHuntList = response.data
        console.log(upcomingHuntList);
        // WOO! NOW, PUT THAT FRUIT IN THE
        // basketReducer:
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