import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* fetchHuntToEdit(action) {
    try{
    
    console.log('this is action.payload' , action.payload);
    const response = yield axios({
      method: 'GET',
      url: `/hunt/edit/${action.payload}`
    })
    yield put({
      type: 'SET_HUNT_TO_EDIT',
      payload: response.data
    })
    }catch (error) {
        console.log('fetchHuntToEdit error:', error)
    }
  }

  function* huntToEdit() {
    yield takeLatest('SAGA/HUNT_TO_EDIT', fetchHuntToEdit);
  }
  
  

  export default huntToEdit