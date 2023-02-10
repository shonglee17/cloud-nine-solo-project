



import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';


function* deleteHunt(action) {
    try {
        const deleteHuntId = action.payload

        const response = yield axios({
            method: 'DELETE',
            url: `/hunt/${deleteHuntId}`
        })

    } catch (error) {
        console.log('deleteSaga error:', error)
    }
  }

  function* deleteSaga() {
    yield takeLatest('SAGA/DELETE_HUNT', deleteHunt);
  }
  
  

  export default deleteSaga