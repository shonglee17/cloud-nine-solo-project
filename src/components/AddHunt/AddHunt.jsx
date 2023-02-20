import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavHead from '../NavHead/NavHead';
import Footer from '../Footer/Footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddHunt() {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [species, setSpecies] = useState('');
  const [equipment, setEquipment] = useState('');
  const [restrictions, setRestrictions] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const addHunt = (event) => {
    event.preventDefault();

    let huntInfo = {
      date: date,
      location: location,
      species: species,
      equipment: equipment,
      restrictions: restrictions,
      bagged: 0,
      notes: '',
      image: '',
    };
    dispatch({
      type: 'SAGA/ADD_HUNT',
      payload: huntInfo,
    });
    setDate('');
    setLocation('');
    setSpecies('');
    setEquipment('');
    setRestrictions('');

    history.push('/upcoming');
  };

  const auto = () => {
    setDate('2023-10-14');
    setLocation('Owatonna');
    setSpecies('Pheasants');
    setEquipment('12 ga.');
    setRestrictions('Season starts at 9AM');
  };

  return (
    <>
      <NavHead />

      <div style={{ textAlign: 'center' }}>
        <form onSubmit={addHunt} style={{ padding: '20px' }}>
          <Form.Control
            size="lg"
            type="Date"
            placeholder="Location"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            style={{ width: '80%', margin: '0 auto',marginBottom: '20px' }}
          />
          <Form.Control
            size="lg"
            type="text"
            placeholder="Location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            style={{ width: '80%', margin: '0 auto' , marginBottom: '20px'  }}
          />
          <Form.Control
            size="lg"
            type="text"
            placeholder="Species"
            value={species}
            onChange={(event) => setSpecies(event.target.value)}
            style={{ width: '80%', margin: '0 auto' , marginBottom: '20px'  }}
          />
          <Form.Control
            size="lg"
            type="text"
            placeholder="Equipment"
            value={equipment}
            onChange={(event) => setEquipment(event.target.value)}
            style={{ width: '80%', margin: '0 auto' , marginBottom: '20px'  }}
          />
          <Form.Control
            size="lg"
            type="text"
            placeholder="Restrictions"
            value={restrictions}
            onChange={(event) => setRestrictions(event.target.value)}
            style={{ width: '80%', margin: '0 auto' , marginBottom: '20px'  }}
          />
        </form>
        <Button
          variant="outline-success"
          onClick={addHunt}
          style={{ backgroundColor: 'orange' }}
        >
          CREATE
        </Button>{' '}
        <div onClick={auto}>
          <h1>'</h1>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AddHunt;
