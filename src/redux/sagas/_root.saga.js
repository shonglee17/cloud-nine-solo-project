import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import upcomingSaga from './upcomingHunt.saga';
import previousSaga from './previousHunt.saga';
import addHuntSaga from './addHunt.saga';
import detailsSaga from './details.saga';
import deleteSaga from './deleteHunt.saga';
import huntToEdit from './huntToEdit.saga';
import updateUpcomingHunt from './updateUpcomingHunt.saga';
import updatePreviousHunt from './updatePreviousHunt.saga';
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    upcomingSaga(),
    previousSaga(),
    addHuntSaga(),
    detailsSaga(),
    deleteSaga(),
    huntToEdit(),
    updateUpcomingHunt(),
    updatePreviousHunt()
  ]);
}
