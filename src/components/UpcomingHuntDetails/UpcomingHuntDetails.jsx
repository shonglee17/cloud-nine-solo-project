import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import NavHead from '../NavHead/NavHead';
import Footer from '../Footer/Footer';
import './UpcomingHuntDetails.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function UpcomingHuntDetails() {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'SAGA/FETCH_HUNTDETAILS',
      payload: params.id,
    });
  }, [params.id]);

  const detail = useSelector((store) => store.huntDetailReducer);

  let huntDate = detail.date;
  let dateObj = new Date(huntDate);
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  let newDate = month + '/' + day + '/' + year;

  const deleteHunt = () => {
    console.log(detail);
    dispatch({
      type: 'SAGA/DELETE_HUNT',
      payload: detail.id,
    });
    history.push('/upcoming');
  };

  const editHunt = () => {
    history.push(`/edit/upcoming/${detail.id}`);
  };


  return (
    <>
      <NavHead />
      <ListGroup>
      
      <ListGroup.Item variant="light">DATE : {newDate}</ListGroup.Item>
      <ListGroup.Item variant="dark">LOCATION : {detail.location}</ListGroup.Item>
      <ListGroup.Item variant="light">SPECIES : {detail.species}</ListGroup.Item>
      <ListGroup.Item variant="dark">EQUIPMENT : {detail.equipment}</ListGroup.Item>
      <ListGroup.Item variant="light">RESTRICTIONS : {detail.restrictions}</ListGroup.Item>
      <ListGroup.Item variant="dark">BAGGED : {detail.bagged}</ListGroup.Item>
      <ListGroup.Item variant="light">NOTES : {detail.notes}</ListGroup.Item>
    </ListGroup>
    <Button variant="success" onClick={editHunt} style={{ backgroundColor: 'green' }}>EDIT</Button>{' '}
    <Button variant="danger" onClick={deleteHunt} style={{ backgroundColor: 'red' }}>DELETE</Button>{' '}
      {/* <div className="details">
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
      </div>
      </div> */}
      <Footer />
    </>
  );
}

export default UpcomingHuntDetails;
