import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import upcomingHuntReducer from './upcomingHunt.reducer';
import previousHuntReducer from './previousHunt.reducer';
import huntDetailReducer from './details.reducer';
import huntToEditReducer from './huntToEdit.reducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  upcomingHuntReducer,
  previousHuntReducer, //stores the list of Upcoming hunt from the database
  huntDetailReducer,//stores the details of the hunt selected
  huntToEditReducer,//stores the data of the changes the user makes on the dom
});

export default rootReducer;
