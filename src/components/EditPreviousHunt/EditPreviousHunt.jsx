import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavHead from '../NavHead/NavHead';
import Footer from '../Footer/Footer';
import './EditPreviousHunt.css' 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
      placeholder="Restrictions" 
      value={huntToEdit.restrictions || ''} 
      onChange={handleRestrictionsChange}
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
          style={{
            width: '80%',
            height: '120px',
            verticalAlign: 'top',
            textAlign: 'left',
            paddingBottom: '80px',
            paddingLeft: '10px',
            paddingRight: '0',
          }}
        />
      {/* <Form.Control 
      type="text" 
      placeholder="Image" 
      value={huntToEdit.image || ''} 
      onChange={handleImageChange}
      style={{ width: '50%' }}  
      /> */}
      {/* <Form.Control 
      type="text" 
      placeholder="Restrictions" 
      value={huntToEdit.restrictions || ''} 
      onChange={handleRestrictionsChange}
      style={{ width: '50%' }}  
      /> */}
      <Button variant="success" onClick={handleSubmit} style={{ backgroundColor: 'green' }}>SUBMIT</Button>{' '}
         
      </form>
     <Footer/>
    </div>
  );
}

export default EditPreviousHunt;