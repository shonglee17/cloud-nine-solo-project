import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavHead from '../NavHead/NavHead';
import Footer from '../Footer/Footer';
import './EditUpcomingHunt.css' 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function EditUpcomingHunt() {
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
      type: 'UPDATE_UPCOMINGHUNT',
      payload: huntToEdit,
    });
    history.push(`/upcominghuntdetails/${params.id}`);
  };
  
  return (
    <div>
      <NavHead/>
     
      <form>
      
      <Form.Control 
      type="date" 
      placeholder="Date" 
      value={huntToEdit.date || ''} 
      onChange={handleDateChange}
      style={{ width: '50%' }}  
      />
      <Form.Control 
      type="text" 
      placeholder="Location" 
      value={huntToEdit.location || ''} 
      onChange={handleLocationChange}
      style={{ width: '50%' }}  
      />
      <Form.Control 
      type="text" 
      placeholder="Species" 
      value={huntToEdit.species || ''} 
      onChange={handleSpeciesChange}
      style={{ width: '50%' }}  
      />
      <Form.Control 
      type="text" 
      placeholder="Equipment" 
      value={huntToEdit.equipment || ''} 
      onChange={handleEquipmentChange}
      style={{ width: '50%' }}  
      />
      <Form.Control 
      type="text" 
      placeholder="Bagged" 
      value={huntToEdit.bagged || ''} 
      onChange={handleBaggedChange}
      style={{ width: '50%' }}  
      />
      <Form.Control 
      type="text" 
      placeholder="Notes" 
      value={huntToEdit.notes || ''} 
      onChange={handleNotesChange}
      style={{ width: '50%' }}  
      />
      <Form.Control 
      type="text" 
      placeholder="Image" 
      value={huntToEdit.image || ''} 
      onChange={handleImageChange}
      style={{ width: '50%' }}  
      />
      <Form.Control 
      type="text" 
      placeholder="Restrictions" 
      value={huntToEdit.restrictions || ''} 
      onChange={handleRestrictionsChange}
      style={{ width: '50%' }}  
      />
      <Button variant="success" onClick={handleSubmit} style={{ backgroundColor: 'green' }}>SUBMIT</Button>{' '}
      {/* <button onClick={handleSubmit}>Submit</button> */}
      {/* <h6 style={{ color: 'orange' }}>Date</h6>
      <input
          type="date"
          value={huntToEdit.date || ''}
          onChange={handleDateChange} 
        />
        <h6 style={{ color: 'orange' }}>Location</h6>
        <input
          type="text"
          // This next line is saying, "Use the studentToEdit.github_name
          // value if it exists OR use an empty string."
          value={huntToEdit.location || ''}
          onChange={handleLocationChange} 
        />
        <h6 style={{ color: 'orange' }}>Species</h6>
        <input
          type="text"
          value={huntToEdit.species || ''}
          onChange={handleSpeciesChange} 
        />
        <h6 style={{ color: 'orange' }}>Equipment</h6>
        <input
          type="text"
          value={huntToEdit.equipment || ''}
          onChange={handleEquipmentChange} 
        />
        <h6 style={{ color: 'orange' }}>Bagged</h6>
        <input
          type="text"
          value={huntToEdit.bagged || ''}
          onChange={handleBaggedChange} 
        />
        <h6 style={{ color: 'orange' }}>Notes</h6>
        <input
          type="text"
          value={huntToEdit.notes || ''}
          onChange={handleNotesChange} 
        />
        <h6 style={{ color: 'orange' }}>Image</h6>
        <input
          type="text"
          value={huntToEdit.image || ''}
          onChange={handleImageChange} 
        />
        <h6>Restrictions</h6>
        <input
          type="text"
          value={huntToEdit.restrictions || ''}
          onChange={handleRestrictionsChange} 
        /> */}
         
      </form>
     <Footer/>
    </div>
  );
}

export default EditUpcomingHunt;



