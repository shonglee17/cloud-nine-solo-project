import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function EditPreviousHunt() {
  const params = useParams();
  const dispatch = useDispatch();
  const huntToEdit = useSelector((store) => store.huntToEditReducer);
  const history = useHistory();



  useEffect(() => {
    console.log('this is params', params.id);
    console.log(huntToEdit);
    dispatch({
      type: 'SAGA/HUNT_TO_EDIT',
      payload: params.id,
    });
  }, []);

  const handleDateChange = (evt) => {
    dispatch({
      type: 'SET_DATE',
      payload: evt.target.value,
    });
  };
 
  const handleLocationChange = (evt) => {
    dispatch({
      type: 'SET_LOCATION',
      payload: evt.target.value,
    });
  };

  const handleSpeciesChange = (evt) => {
    dispatch({
      type: 'SET_SPECIES',
      payload: evt.target.value,
    });
  };

  const handleEquipmentChange = (evt) => {
    dispatch({
      type: 'SET_EQUIPMENT',
      payload: evt.target.value,
    });
  };

  const handleBaggedChange = (evt) => {
    dispatch({
      type: 'SET_BAGGED',
      payload: evt.target.value,
    });
  };

  const handleNotesChange = (evt) => {
    dispatch({
      type: 'SET_NOTES',
      payload: evt.target.value,
    });
  };

  const handleImageChange = (evt) => {
    dispatch({
      type: 'SET_IMAGE',
      payload: evt.target.value,
    });
  };

  const handleRestrictionsChange = (evt) => {
    dispatch({
      type: 'SET_RESTRICTIONS',
      payload: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch({
      type: 'UPDATE_PREVIOUSHUNT',
      payload: huntToEdit,
    });
    history.push(`/previoushuntdetails/${params.id}`);
  };

  return (
    <div>
      <h2>The Id Of This Hunt is : {params.id} !!!!!</h2>
      <form>
      <input
          type="text"
          value={huntToEdit.date || ''}
          onChange={handleDateChange} 
        />
        <input
          type="text"
          // This next line is saying, "Use the studentToEdit.github_name
          // value if it exists OR use an empty string."
          value={huntToEdit.location || ''}
          onChange={handleLocationChange} 
        />
        <input
          type="text"
          value={huntToEdit.species || ''}
          onChange={handleSpeciesChange} 
        />
        <input
          type="text"
          value={huntToEdit.equipment || ''}
          onChange={handleEquipmentChange} 
        />
        <input
          type="text"
          value={huntToEdit.bagged || ''}
          onChange={handleBaggedChange} 
        />
        <input
          type="text"
          value={huntToEdit.notes || ''}
          onChange={handleNotesChange} 
        />
        <input
          type="text"
          value={huntToEdit.image || ''}
          onChange={handleImageChange} 
        />
        <input
          type="text"
          value={huntToEdit.restrictions || ''}
          onChange={handleRestrictionsChange} 
        />
         <button onClick={handleSubmit}>Submit</button>
      </form>
     
    </div>
  );
}

export default EditPreviousHunt;