import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* updateHuntDetails(action) {
    const editedHunt = action.payload;
    console.log('this is edited hunt:' ,editedHunt);
    yield axios({
      method: 'PUT',
      url: `/hunt/${editedHunt}`,
      data: editedHunt // 👈 will look something like:
              // {
              //   id: 3,
              //   github_name: 'matthew-dangerzone-black'
              // }
    })
    // We've successfully updated a row in the students
    // table! Now we need to run our fetchStudents Saga
    // function to bring the studentList reducer back
    // in sync with our students table:
    yield put({
      type: 'SAGA/FETCH_UPCOMING'
    })
  
  }

  function* updateUpcomingHunt() {
    yield takeLatest('UPDATE_UPCOMINGHUNT', updateHuntDetails);
  }
  
export default updateUpcomingHunt