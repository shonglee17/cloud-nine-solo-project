import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory} from 'react-router-dom'
import NavHead from '../NavHead/NavHead';
import Footer from '../Footer/Footer';
function AddHunt(){
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [species, setSpecies] = useState('');
    const [equipment, setEquipment] = useState('');
    const [restrictions, setRestrictions] = useState('');
    const history = useHistory()
    const dispatch = useDispatch()

    const addHunt = (event) => {
        event.preventDefault();
        
        let huntInfo = {
            date : date,
            location : location,
            species : species,
            equipment : equipment,
            restrictions : restrictions,
            bagged : 0,
            notes : '',
            image : ''
        }
        dispatch({
            type: 'SAGA/ADD_HUNT',
            payload: huntInfo
          });
          setDate('')
          setLocation('')
          setSpecies('')
          setEquipment('')
          setRestrictions('')
          
          history.push('/upcoming')
    }

    return (
        <>
        <NavHead/>
            <form onSubmit={addHunt}>
                <input
                type="date"
                value={date}
                placeholder = "YYYY-MM-DD"
                onChange={(event) => setDate(event.target.value)}
                />
                <input
                type="text"
                value={location}
                placeholder = "Location"
                onChange={(event) => setLocation(event.target.value)}
                />
                <input
                type="text"
                value={species}
                placeholder = "Species"
                onChange={(event) => setSpecies(event.target.value)}
                />
                <input
                type="text"
                value={equipment}
                placeholder = "Equipment"
                onChange={(event) => setEquipment(event.target.value)}
                />
                <input
                type="text"
                value={restrictions}
                placeholder = "Restrictions"
                onChange={(event) => setRestrictions(event.target.value)}
                />
            </form>
            <button onClick={addHunt}>Check Mark</button>
            <Footer/>
        </>
    )
}

export default AddHunt