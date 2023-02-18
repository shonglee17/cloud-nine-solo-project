import NavHead from '../NavHead/NavHead';
import Footer from '../Footer/Footer';
import { useHistory } from 'react-router-dom';
import './Used.css';

function Used() {
  const history = useHistory();
  const homeButton = () => {
    history.push('/');
  };

  return (
    <div className="used">
      <ul>
        Tools Used
        <li> React</li>
        <li> node.js</li>
        <li> express</li>
        <li> mdbootstrap</li>
        <li> Postgres SQL</li>
        <li> Git</li>
        <li> Redux / Saga</li>
        <li> Postman</li>
        <li> Google Maps API</li>
      </ul>
      <h5>www.linkedin.com/in/shonglee17</h5>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <h1
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          onClick={homeButton}
        >
          Thank You!
        </h1>
      </div>
    </div>
    
  );
}

export default Used;
