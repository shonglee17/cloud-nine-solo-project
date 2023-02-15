import { useHistory } from 'react-router-dom';
import NavHead from '../NavHead/NavHead';
import Footer from '../Footer/Footer';

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

      <button onClick={createHunt}>Create A Hunt</button>
      <button onClick={upcomingHunt}>Upcoming Hunt</button>
      <button onClick={previousHunt}>Previous Hunt</button>
      <Footer />
    </>
  );
}

export default HomePage;
