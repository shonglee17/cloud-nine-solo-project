import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* updateHuntDetails(action) {
    const editedHunt = action.payload;
    console.log('this is edited hunt:' ,editedHunt);
    yield axios({
      method: 'PUT',
      url: `/hunt/${editedHunt}`,
      data: editedHunt 
    })
   
    yield put({
      type: 'SAGA/FETCH_PREVIOUS'
    })
  
  }

  function* updatePreviousHunt() {
    yield takeLatest('UPDATE_PREVIOUSHUNT', updateHuntDetails);
  }
  
export default updatePreviousHunt