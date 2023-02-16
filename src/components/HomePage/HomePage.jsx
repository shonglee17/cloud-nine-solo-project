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
      <Button variant="info" style={{ backgroundColor: 'gray' }} onClick={createHunt}>Create Hunt</Button>
      <Button variant="info" style={{ backgroundColor: 'gray' }} onClick={upcomingHunt}>Upcoming Hunt</Button>
      <Button variant="info" style={{ backgroundColor: 'gray' }} onClick={previousHunt}>Previous Hunt</Button>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
