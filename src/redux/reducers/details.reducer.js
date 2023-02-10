

const huntDetailReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_HUNTDETAILS':
        return action.payload[0];
      default:
        return state;
    }
  };
  
export default huntDetailReducer;