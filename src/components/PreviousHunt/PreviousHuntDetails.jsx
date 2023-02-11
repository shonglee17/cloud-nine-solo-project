import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom'



function PreviousHuntDetails(){
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_HUNTDETAILS',
            payload: params.id
        })
    }, [params.id])

    

    const detail = useSelector((store) => store.huntDetailReducer)

    let huntDate = detail.date;
    let dateObj = new Date(huntDate);
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let newDate = year + '/' + month + '/' + day;

    const deleteHunt = () =>{
        console.log(detail);
        dispatch({
            type: 'SAGA/DELETE_HUNT',
            payload: detail.id
        })
        history.push('/previous')
    }

    const editHunt = () => {
        
        history.push(`/edit/previous/${detail.id}`);
    }

    const previousHuntsList = () => {
        
        history.push(`/previous`);
    }

    return(
        
        <>
           <div key={detail.id}>DATE : {newDate}</div>
           <div>LOCATION : {detail.location}</div>
           <div>SPECIES : {detail.species}</div>
           <div>EQUIPMENT : {detail.equipment}</div>
           <div>RESTRICTIONS : {detail.restrictions}</div>
           <div>BAGGED : {detail.bagged}</div>
           <div>NOTES : {detail.notes}</div>
            <div>
                <button onClick={editHunt}>EDIT</button>
                <button onClick={deleteHunt}>DELETE</button>
                <button onClick={previousHuntsList}>Back</button>
                
            </div>
        </>


       
        
    )
}

export default PreviousHuntDetails