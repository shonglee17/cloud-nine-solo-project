import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* addHunt(action){
    console.log(action.payload);
    try {
      const response = yield axios.post('/hunt', action.payload);
      console.log( response); 
      yield put ({ type: 'SAGA/FETCH_UPCOMING' });
    } catch (error){
      console.log('Error with addItem in SAGA POST clientside :', error)
    }
  }


  function* addHuntSaga() {
    yield takeLatest('SAGA/ADD_HUNT', addHunt);
  }

  export default addHuntSaga