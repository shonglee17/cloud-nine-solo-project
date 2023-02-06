import { useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';

function UpcomingHunt(){
    const upcomingHunt = useSelector((store) => store.upcomingHuntReducer)
    console.log(upcomingHunt);
    useEffect(()=>{
        dispatch({
            type: 'SAGA/FETCH_UPCOMING'
        })
    },[])
    const dispatch = useDispatch()
    
    return(
        <>
            {upcomingHunt.map((data)=>{
                let dateobj = data.date
                let dateObj = new Date(dateobj);
                let month = dateObj.getUTCMonth() + 1; //months from 1-12
                let day = dateObj.getUTCDate();
                let year = dateObj.getUTCFullYear();
                let newdate = year + "/" + month + "/" + day;
                console.log(newdate);
                return (
                    <div key={data.id}>
                    <ul >{newdate}</ul>
                    <li>{data.equipment}</li>

                    </div>
                )
            })}
        </>
    )
}

export default UpcomingHunt