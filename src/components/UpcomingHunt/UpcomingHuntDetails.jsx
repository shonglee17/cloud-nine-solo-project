import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom'



function upcomingHuntDetails(){
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
    const deleteHunt = () =>{
        console.log(detail);
        dispatch({
            type: 'SAGA/DELETE_HUNT',
            payload: detail.id
        })
        history.push('/upcoming')
    }

    const editHunt = () => {
        history.push(`/edit/${detail.id}`);
    }

    return(
        <>
        <div>date</div>
        <div>location</div>
        <div>species</div>
        <div>equipment</div>
        <div>bagged</div>
        <div>Notes</div>
        <div>Note Text Box</div>
        <button>ENTER</button>
        <button>CLEAR</button>
        <div>
        <button onClick={editHunt}>EDIT</button>
        <button onClick={deleteHunt}>DELETE</button>
        </div>
        </>
    )
}

export default upcomingHuntDetails