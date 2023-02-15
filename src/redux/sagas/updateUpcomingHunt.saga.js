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
      type: 'SAGA/FETCH_UPCOMING'
    })
  
  }

  function* updateUpcomingHunt() {
    yield takeLatest('UPDATE_UPCOMINGHUNT', updateHuntDetails);
  }
  
export default updateUpcomingHunt