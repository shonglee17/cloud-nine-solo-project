import { useHistory } from 'react-router-dom';
import NavHead from '../NavHead/NavHead';
import Footer from '../Footer/Footer';
import Button from 'react-bootstrap/Button';
import './HomePage.css' 

function HomePage() {
  const history = useHistory();

  const upcomingHunt = () => {
    history.push('/upcoming');
  };
  const previousHunt = () => {
    history.push('/previous');
  };

  const createHunt = () => {
    history.push('/createhunt');
  };

  return (
    <>
      <NavHead />
      <div className="button-group">
      <Button className="create" variant="info" style={{ backgroundColor: 'orange' , color: 'black'  }} onClick={createHunt}>CREATE HUNT</Button>
      <Button className="upcoming" variant="info" style={{ backgroundColor: 'orange' , color: 'black' }} onClick={upcomingHunt}>UPCOMING HUNT</Button>
      <Button className="previous" variant="info" style={{ backgroundColor: 'orange' , color: 'black' }} onClick={previousHunt}>PREVIOUS HUNT</Button>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
