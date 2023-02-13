import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom'
import NavHead from '../NavHead/NavHead';
import Footer from '../Footer/Footer';


function UpcomingHuntDetails(){
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
        history.push('/upcoming')
    }

    const editHunt = () => {
        
        history.push(`/edit/upcoming/${detail.id}`);
    }

    const upcomingHuntsList = () => {
        
        history.push(`/upcoming`);
    }

    return(
        
        <>
        <NavHead/>
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
                <button onClick={upcomingHuntsList}>Back</button>
                
            </div>
            <Footer/>
        </>


       
        
    )
}

export default UpcomingHuntDetails