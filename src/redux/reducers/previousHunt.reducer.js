
const previousHuntReducer = (state = [], action) => {

    switch (action.type) {
      case 'SET_PREVIOUS':
        return action.payload;
      default:
        return state;
    }
  };
  

export default previousHuntReducer