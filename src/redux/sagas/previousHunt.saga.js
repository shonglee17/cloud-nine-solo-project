import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchPreviousList() {
    try {
        
        const response = yield axios({
            method: 'GET',
            url: '/hunt/previous'
        })
  
       
        const previousHuntList = response.data
        console.log(previousHuntList);
        
        yield put({
            type: 'SET_PREVIOUS',
            payload: previousHuntList
        })
    } catch (error) {
        console.log('previousSaga error:', error)
    }
  }

  function* previousSaga() {
    yield takeLatest('SAGA/FETCH_PREVIOUS', fetchPreviousList);
  }
  
  

  export default previousSaga