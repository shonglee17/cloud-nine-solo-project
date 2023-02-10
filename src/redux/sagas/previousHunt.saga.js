import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchPreviousList() {
    try {
        // GET THE FRUIT FROM THE SERVER!
        const response = yield axios({
            method: 'GET',
            url: '/hunt/previous'
        })
  
        // WOOT. HERE'S THE FRUIT:
        const previousHuntList = response.data
        console.log(previousHuntList);
        // WOO! NOW, PUT THAT FRUIT IN THE
        // basketReducer:
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