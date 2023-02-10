import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchHuntDetails(action){
    try{
        console.log(action.payload)
        const response = yield axios({
            method: 'GET',
            url: `/hunt/details/${action.payload}`
          })       
        yield put({
            type: 'SET_HUNTDETAILS',
            payload: response.data
        })
    }
    catch (error){
        console.log('SAGA/FETCH_HUNTDETAILS ERROR:', error)
    }
}

function* detailsSaga(){
    yield takeLatest('SAGA/FETCH_HUNTDETAILS', fetchHuntDetails)
}
export default detailsSaga;