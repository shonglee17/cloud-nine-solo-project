// hold only the single student object being edited
const huntToEditReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_HUNT_TO_EDIT':
      return action.payload;
    case 'SET_DATE':
      const newDate = action.payload;
      return { ...state, date: newDate };
    case 'SET_LOCATION':
      const newLocation = action.payload;
      return { ...state, location: newLocation };
    case 'SET_SPECIES':
      const newSpecies = action.payload;
      return { ...state, species: newSpecies };
    case 'SET_EQUIPMENT':
      const newEquipment = action.payload;
      return { ...state, equipment: newEquipment };
    case 'SET_BAGGED':
      const newBagged = action.payload;
      return { ...state, bagged: newBagged };
    case 'SET_NOTES':
      const newNotes = action.payload;
      return { ...state, notes: newNotes };
    case 'SET_IMAGE':
      const newImage = action.payload;
      return { ...state, image: newImage };
    case 'SET_RESTRICTIONS':
      const newRestrictions = action.payload;
      return { ...state, restrictions: newRestrictions };

    default:
      return state;
  }
};


export default huntToEditReducer;
