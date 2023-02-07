import React, { useState } from 'react';
import { useDispatch } from "react-redux";


function AddHunt(){
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [species, setSpecies] = useState('');
    const [equipment, setEquipment] = useState('');
    const [restrictions, setRestrictions] = useState('');
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
    }

    return (
        <>
            <form onSubmit={addHunt}>
                <input
                type="text"
                value={date}
                placeholder = "Date"
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
        </>
    )
}

export default AddHunt